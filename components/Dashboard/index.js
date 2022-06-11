import css from "./dashboard.module.css";
import ccss from "../../styles/common.module.css";
import { useSession, signIn } from "next-auth/react";

const Dashboard = () => {
    const { data: session } = useSession();

    return (
        <div className={css.dashboard}>
            <div className={css.wrapper}>
                <p>{session.user.name}</p>
                <p>{session.user.email}</p>

                <div className={css.actions}>
                    <input type="text" placeholder="City" /><br />
                    <button className={ccss.button}>
                        Display Weather
                    </button>
                </div>
            </div>


        </div>
    )
}

export default Dashboard;