"use client";
import "../app/globals.css"
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import { Amplify } from "aws-amplify";
import Link from "next/link";
Amplify.configure(outputs);



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body>
          <nav>
            {/* Navigation links */}
            <Link href="/about">About Me</Link>
            <Link href="/projects">Project Demos</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/login">Login/Signup</Link>
          </nav>
          <Authenticator>
             {children}
          </Authenticator>
        </body>
      </html>
    

  )
}
