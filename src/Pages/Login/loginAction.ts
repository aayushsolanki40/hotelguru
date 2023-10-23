import { LoaderFunctionArgs, redirect } from "react-router-dom";
import { AuthProvider } from "../../Auth/auth";

export default async function loginAction({ request }: LoaderFunctionArgs) {
    let formData = await request.formData();
    let username = formData.get("username") as string | null;
    let password = formData.get("password") as string | null;
  
    // Validate our form inputs and return validation errors via useActionData()
    if (!username || !password) {
      return {
        error: "You must provide a username and password to log in",
      };
    }
  
    // Sign in and redirect to the proper destination if successful.
    try {
      await AuthProvider.signin(username);
    } catch (error) {
      // Unused as of now but this is how you would handle invalid
      // username/password combinations - just like validating the inputs
      // above
      return {
        error: "Invalid login attempt",
      };
    }
  
    let redirectTo = formData.get("redirectTo") as string | null;
    return redirect(redirectTo || "/");
  }