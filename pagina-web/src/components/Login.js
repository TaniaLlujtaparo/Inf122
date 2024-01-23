import React from "react";
/*import { useState } from 'react';*/

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Login</button>;
};