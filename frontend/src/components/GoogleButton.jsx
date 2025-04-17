import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleButton = () => {
  return (
    <GoogleLogin
      onSuccess={async (credentialResponse) => {
        console.log("API response:", res);
        const { credential } = credentialResponse;
        const res = await axios.post('http://localhost:5000/api/auth/google', {
          credential: credential,
        });

        console.log(res.data); 
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
};

export default GoogleButton;