"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/globals.css";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

export default function App() {
  const { user, signOut } = useAuthenticator();

  return (
    <main>

      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={signOut}> Sign Out </button>
    </main>
  );
}
