import { createContext } from "react";
import { AuthState } from "../interfaces/interfaces";

export type AuthContextProps = {
  authState: AuthState;
  dispatch: React.Dispatch<any>;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);
