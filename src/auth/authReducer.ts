import { AuthState } from "../interfaces/interfaces";
import { types } from "../types/types";

type Action =
  | { type: typeof types.login; payload: { name: string } }
  | { type: typeof types.logout; payload?: null };

export const authReducer = (state: AuthState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case types.login:
      return {
        ...state,
        //Non-null assertion operator (!)
        name: payload!.name,
        logged: true,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
