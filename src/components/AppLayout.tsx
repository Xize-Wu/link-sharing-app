import React, { useState } from "react";
import { styled, css } from "styled-components";

import Login from "./Login";
import CreateAccount from "./CreateAccount";
import LandingHeader from "../ui/LandingHeader";
import Dashboard from "./Dashboard";
import { DatabaseProvider, useDatabase } from "../contexts/DatabaseContext";

const sharedStyles = css`
  background-color: var(--layout-background-color);
  color: var(--black);
  font-size: 16px;
  padding: 2px;
`;

const StyledLayout = styled.div`
  width: 100%;
`;

const StyledComponent = styled.div`
  ${sharedStyles}
`;

function AppLayout() {
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
    <StyledLayout>
      <main>
        {loginStatus ? (
         <Dashboard/>
        ) : (
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
        )}
      </main>
    </StyledLayout>
  );
}

export default AppLayout;
