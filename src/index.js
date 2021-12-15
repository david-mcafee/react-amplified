import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";

import { Auth } from "aws-amplify";

Amplify.configure(awsExports);

Amplify.configure({
  ...awsExports,
  API: {
    endpoints: [
      {
        name: "api6a984c52",
        endpoint: "https://5atiyiml41.execute-api.us-west-2.amazonaws.com/dev",
        custom_header: async () => {
          // return { Authorization: "token" };
          // Alternatively, with Cognito User Pools use this:
          // return { Authorization: `Bearer ${(await Auth.currentSession()).getAccessToken().getJwtToken()}` }
          return {
            Authorization: `Bearer ${(await Auth.currentSession())
              .getIdToken()
              .getJwtToken()}`,
          };
        },
      },
    ],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
