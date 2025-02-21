"use client";

import {signOut} from "aws-amplify/auth";
import outputs from "../../amplify_outputs.json";
import { Amplify } from "aws-amplify"

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs)
export default function LogoutPage() {
    async function handleSignOut() {
        await signOut()
    }
    
    return (
        <Authenticator>
        <div>      

        <button onClick={handleSignOut}>Sign Out</button>  
            
        </div>
        </Authenticator>

    )
    
}