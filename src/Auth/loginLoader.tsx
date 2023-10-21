import { redirect } from "react-router-dom";
import { AuthProvider } from "./auth";

export async function loginLoader() {
    if (AuthProvider.isAuthenticated) {
        return redirect("/");
    }
    return null;
}