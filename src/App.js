import "./App.css";

import { Authenticator } from "@aws-amplify/ui-react";
import { API } from "@aws-amplify";
import "@aws-amplify/ui-react/styles.css";

export default function App() {
  function getData() {
    const apiName = "MyApiName";
    const path = "/path";
    const myInit = {
      // OPTIONAL
      headers: {}, // OPTIONAL
    };

    return API.get(apiName, path, myInit);
  }

  (async function () {
    const response = await getData();
    console.log(response);
  })();

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
