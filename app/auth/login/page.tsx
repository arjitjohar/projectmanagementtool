
"use client";
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs)

export default function App() {

  return (

    <main>
    <Authenticator>
      {({user}) => (
        <main>
          <h1>Hi {user?.username} </h1>
        </main>
      )}
    </Authenticator>
    </main>

    );
}
