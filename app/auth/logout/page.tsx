"use client";

<<<<<<< HEAD
export default function LogoutPage() {
    
    return (
        
        <div>      
            <h1>Logout</h1>            
        </div>
        

=======
import {signOut} from "aws-amplify/auth";
import outputs from "../../../amplify_outputs.json";
import { Amplify } from "aws-amplify"

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs)
export default function LogoutPage() {
    return(
        <h1> basic logout</h1>
>>>>>>> d8af115 (add questions)
    )
}