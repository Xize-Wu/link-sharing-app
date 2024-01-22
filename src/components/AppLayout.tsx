import { styled } from "styled-components";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../redux/authSlice";

const StyledLayout = styled.main`
  width: 100%;
`;

function AppLayout() {
  const navigate = useNavigate();
  const isAuth = useSelector(getIsAuthenticated);

  useEffect(
    function (){
      if(!isAuth){
        navigate("/login")
      }
    }
  )

  return (
    <StyledLayout>
      <Outlet/>
    </StyledLayout>
  );
}

export default AppLayout;
