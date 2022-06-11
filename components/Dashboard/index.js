import css from "./dashboard.module.css";
import ccss from "../../styles/common.module.css";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

const Dashboard = () => {
    const { data: session } = useSession();

    const [location, setLocation] = useState("");

    return (
        <div className={css.dashboard}>
            <div className={css.wrapper}>
                <p>{session.user.name}</p>
                <p>{session.user.email}</p>

                <div className={css.actions}>
                    <input type="text" placeholder="City"
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }}
                    /><br />
                    <Link href={"/weather-update/" + location}>
                        <button className={ccss.button}>
                            Display Weather
                        </button>
                    </Link>

                </div>
            </div>


        </div>
    )
}

export default Dashboard;