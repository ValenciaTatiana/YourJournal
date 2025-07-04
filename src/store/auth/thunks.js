import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./index";
import { login, logout } from "./authSlice";

export const checkingAuthentication = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInWithGoogle();

        if (!result.ok) {
            return dispatch(logout(result.errorMessage));
        }

        dispatch(login(result));
    }
}