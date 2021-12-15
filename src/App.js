import "./App.css";

import { Authenticator } from "@aws-amplify/ui-react";
import { API, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

export default function App() {
  async function getBooks() {
    const apiName = "api6a984c52";
    const path = "/books";
    const myInit = {
      // OPTIONAL
      headers: {
        Authorization: `Bearer ${(await Auth.currentSession())
          .getIdToken()
          .getJwtToken()}`,
      },
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      // queryStringParameters: {
      //   // OPTIONAL
      //   name: "param",
      // },
    };

    return await API.get(apiName, path, myInit)
      .then((response) => {
        // Add your code here
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  getBooks();

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
