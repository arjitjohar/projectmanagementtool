import { fetchUserAttributes } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';
import { useAuthenticator } from "@aws-amplify/ui-react";

function getCustomUserAttributes() {
  const [attr, setAttr] = useState<{ [key: string]: string } | null>(null);
  const { user } = useAuthenticator();

  useEffect(() => {
    if (user) {
      fetchUserAttributes().then((attributes) => {
        if (attributes) {
          const attrValues = Object.fromEntries(
            Object.entries(attributes).map(([key, value]) => [key, String(value)])
          );
          setAttr(attrValues);
        } else {
          setAttr(null);
        }
      });
    }
  }, [user]);

  return attr;
}

export default getCustomUserAttributes;