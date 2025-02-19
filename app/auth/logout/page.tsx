"use client";

import { useAuthenticator } from "@aws-amplify/ui-react";

export default function LoginPage() {
    const { signOut } = useAuthenticator();
    return (
        <div>      
        <button onClick={signOut}>Sign out</button>
    </div>

    )
    
}