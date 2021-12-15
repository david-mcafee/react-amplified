import "./App.css";

import { Authenticator } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

export default function App() {
  async function getItems() {
    const apiName = "apiapi6a984c52";
    const path = "/items";
    const myInit = {
      // OPTIONAL
      // headers: {
      //   Authorization: `Bearer ${(await Auth.currentSession())
      //     .getIdToken()
      //     .getJwtToken()}`,
      // },
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

  getItems();

  async function createItem() {
    const apiName = "apiapi6a984c52";
    const path = "/items";
    const myInit = {
      body: {}, // replace this with attributes you need
      // headers: {}, // OPTIONAL
    };

    return await API.post(apiName, path, myInit)
      .then((response) => {
        // Add your code here
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <ul />
          <button onClick={() => getItems()}>REFRESH ITEMS</button>
          <ul />
          <button onClick={() => createItem()}>CREATE ITEM</button>
        </main>
      )}
    </Authenticator>
  );
}
