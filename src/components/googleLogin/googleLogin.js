import GoogleLogin from 'react-google-login';
import React from 'react';

function Googlelogin() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div>
      <GoogleLogin
        clientId="763535704430-bc4v8c53e22bf512il3ka4no7cm94bm8.apps.googleusercontent.com"
        cookiePolicy="single_host_origin"
        onFailure={responseGoogle}
        onSuccess={responseGoogle}
      />
    </div>
  );
}

export default Googlelogin;
