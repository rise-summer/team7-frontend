import {createContext} from "react";

//context to pass auth stuff to children
const AuthContext = createContext();

export default {
  backend_url: "http://localhost:3000",
  AuthContext: AuthContext
}
