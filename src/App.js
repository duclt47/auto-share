import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import './App.css';
class App extends Component {

  getLinkPostFB = () => {
    const fbToken = localStorage.getItem('fbaccess_token')
    const url = `https://graph.facebook.com/me/feed?access_token=${fbToken}`;
    fetch(url)
      .then((response) => {
        response.json().then(function(token) {
          console.log(token)
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  render() {
    const responseFacebook = (response) => {
      localStorage.setItem('fbaccess_token',response.accessToken)
    }
    const responseGoogle = (response) => {
      console.log(response);
    }
    
  return (
    <div className="App">
      <div className='row'>
        <div className='item'>
          <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
          <FacebookLogin
            appId="555688408131156"
            autoLoad={true}
            fields="name,email,picture"
            callback={responseFacebook}
          />
          <p>post</p>
          <form action="https://graph.facebook.com/me/feed" method="post">
            <input type="text" name="message"/>
            <input type="text" name="access_token"/>
            <input type="submit"/>
          </form>
          <button onClick={() => this.getLinkPostFB()}>get link post</button>
        </div>
        <div className='item'>
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
        <div className='item'>

        </div>
      </div>
    </div>
  );
  }
}

export default App;
