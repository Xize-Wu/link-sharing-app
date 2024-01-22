import store from './store';
import { loadData } from "./authSlice";

export async function AppLoader() {
    const res = await fetch("./data.json");
    const data = await res.json();
    console.log(data);
    store.dispatch(loadData(data[0]));
    return data;
  }
  