"use client";
import "../app/globals.css";
import { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";
import { Amplify } from "aws-amplify";
import Navbar from "../app/_components/Navbar";
import { ThemeProvider } from "../app/_components/theme_provider";

Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showAuthenticator, setShowAuthenticator] = useState(false);

  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className="light:bg-white dark:bg-gray-900">
        {showAuthenticator ? (
          <Authenticator>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              {children}
            </ThemeProvider>
          </Authenticator>
        ) : (
          <div className="landing-page flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <h1 className="text-5xl text-white text-center">Welcome to the Project Management Tool</h1>
            <p className="text-white text-center mt-4">Manage your projects efficiently and effectively.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => setShowAuthenticator(true)}>
              Login / Sign Up
            </button>
          </div>
        )}
      </body>
    </html>
  );
}