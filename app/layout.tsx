"use client";
import "../app/globals.css";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import { Amplify } from "aws-amplify";
import Navbar from "../app/_components/Navbar";

Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    
    <html lang="en" className="">
      <body className="bg-white dark:bg-gray-900">
        <Navbar />
        <Authenticator>
          {children}
        </Authenticator>
      </body>
    </html>

    
  );
}
