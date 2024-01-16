import React, { useState } from "react";
import { styled, css } from "styled-components";
import { DatabaseProvider, useDatabase } from "../contexts/DatabaseContext";

import Login from "../ui/Landing/Login";
import CreateAccount from "../ui/Landing/CreateAccount";
import LandingHeader from "../ui/LandingHeader";

const sharedStyles = css`
  background-color: var(--layout-background-color);
  color: var(--black);
  font-size: 16px;
  padding: 2px;
`;

const StyledComponent = styled.div`
  ${sharedStyles}
`;


export default function Landing() {
  const { loginStatus } = useDatabase();
  const [authComponent, setAuthCompnent] = useState<"login" | "register">(
    "login"
  );

  function handleSetAuthComponent(): void {
    if (authComponent === "login") {
      setAuthCompnent("register");
    } else setAuthCompnent("login");
    console.log(authComponent);
  }

  return (
    <StyledComponent>
      {authComponent === "login" ? (
        <div>
          <LandingHeader />
          <Login switchComponent={handleSetAuthComponent} />
        </div>
      ) : (
        <div>
          <LandingHeader />

          <CreateAccount switchComponent={handleSetAuthComponent} />
        </div>
      )}
    </StyledComponent>
  );
}
