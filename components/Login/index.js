
import css from "./login.module.css";
import ccss from "../../styles/common.module.css";

import { useSession, signIn } from "next-auth/react";

const Login = () => {
    const { data: session } = useSession();

    return (
        <div className={css.login}>
            <div className={css.loginContentContainer}>
                <p>Welcome to the weather forecast web application. Please login with your</p>
                <p>Github user to use the application and view the weather in your city.</p>

                {
                    !session
                        ? <button className={ccss.button} onClick={() => signIn()}>
                            Login
                        </button>

                        : ""
                }
            </div>
        </div>
    )
}

export default Login;