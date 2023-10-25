import { Form, useActionData, useLocation, useNavigation } from "react-router-dom";
import '../../styles/Pages/loginPage.scss';
import Input from "../../Components/Input";

function LoginPage() {
    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let from = params.get("from") || "/";

    let navigation = useNavigation();
    let isLoggingIn = navigation.formData?.get("username") != null;

    let actionData = useActionData() as { error: string } | undefined;

    return (
        <div className="loginpage">
            <div className="image_box" style={{ background: `url('${process.env.PUBLIC_URL}/assets/images/milkyway.jpg')` }}>

            </div>
            <div className="login_form">
                <div className="login_form_title">
                    <span>Login To HotelGuru</span>
                </div>
                <Form method="post" replace>
                    <input type="hidden" name="redirectTo" value={from} />
                    <Input type="text" name="username" onClick={()=> {}} placeholder="Please enter username" title="Email" value="" />
                    <Input type="text" name="password" onClick={()=> {}} placeholder="Please enter password" title="Password" value="" />
                    <button className="login-btn" type="submit" disabled={isLoggingIn}>
                        {isLoggingIn ? "Logging in..." : "Continue"}
                    </button>
                    {actionData && actionData.error ? (
                        <p style={{ color: "red" }}>{actionData.error}</p>
                    ) : null}
                </Form>
            </div>
        </div>
    );
}

export default LoginPage;