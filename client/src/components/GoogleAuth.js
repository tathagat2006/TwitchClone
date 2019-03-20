import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientID:
          "703923137606-ceorppgmtv3h7e61dhlru2b1g5pd50ds.apps.googleusercontent.com",
        scope: "email"
      });
    });
  }
  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
