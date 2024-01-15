import NavBar from "./NavBar"

import { Provider } from 'react-redux';
import store from "../redux/store";

export default function Dashboard(){
    return (
        <>
        <NavBar/>
        {store}
        <div>Dashboard</div>
        
        </>
    )
}