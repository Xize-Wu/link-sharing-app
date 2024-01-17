import  { useState } from "react";
import { styled, css } from "styled-components";

import Login from "../ui/Landing/Login";
import CreateAccount from "../ui/Landing/CreateAccount";
import LandingHeader from "../ui/Landing/LandingHeader";

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
  const [authComponent, setAuthCompnent] = useState<"login" | "register">(
    "login"
  );

  function handleSetAuthComponent(): void {
    if (authComponent === "login") {
      setAuthCompnent("register");
    } else setAuthCompnent("login");
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
