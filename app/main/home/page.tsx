"use client";
import { fetchUserAttributes } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';

import { useAuthenticator } from "@aws-amplify/ui-react";

import getCustomUserAttributes from "../../_utils/getCustomUserAttributes";

export default function HomePage() {
  const customAttributes = getCustomUserAttributes();

  //usestate to store the custom attributes

  

  return (
    <div>
      <h1>Hi {customAttributes?.preferred_username || "loading.."}</h1>
    </div>
  );
}

