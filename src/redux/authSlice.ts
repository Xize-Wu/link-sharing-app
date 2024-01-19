import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@reduxjs/toolkit/query";
import { LinkInterface } from "../contexts/types";

interface StateProps {
  user: {
    links: Array<LinkInterface>;
  };
  isAuthenticated: boolean;
}

const initialState: StateProps = {
  user: { links: [] },
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadData(state, action) {
      state.user = action.payload;
      console.log(state.user);
    },
    login(state, action) {
      console.log(action.payload);
      //add password authentication;
      // state.user.email = action.payload.email;
      // state.user.password = action.payload.password;

      state.isAuthenticated = true;
    },
    logout(state){
        state.isAuthenticated = false;
    },
    addLink(state, action){
        state.user.links.forEach((link)=>{
            if (link.index === action.payload.index){
                link.platform = action.payload.platform;
            }
        })
    },
    updateLinkPlatform(state, action){
        state.user.links.forEach(
            (link) =>{
                if(link.index === action.payload.index){
                    link.address = action.payload.address;
                }
            }
        )
    },
    updateLinkAddress(state, action){
        state.user.links.forEach(
            (link) =>{
                if(link.index === action.payload.index)
                link.address = action.payload.address;
            }
        )
    }
  },
});
export const {
    login,
    logout,
    loadData,
    addLink,
    updateLinkPlatform,
    updateLinkAddress,
  } = authSlice.actions;
  
  export default authSlice.reducer;
  
  export const getIsAuthenticated = (state: RootState) =>
    state.auth.isAuthenticated;
  
  export const getLinks = (state: RootState) => state.auth.user.links;
  