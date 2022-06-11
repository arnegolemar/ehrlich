import css from "./header.module.css";
import ccss from "../../styles/common.module.css";
import Image from 'next/image';

import { useSession, signOut } from "next-auth/react";

const Header = () => {
    const { data: session } = useSession();

    return (
        <div className={css.header}>
            <Image
                src="/cloud.png"
                alt="Cloud"
                width={80}
                height={45}
            />
            <span className={css.name}>Weather Forecast</span>
            {
                session
                    ? <button className={ccss.button + " " + css.button} onClick={() => signOut()}> Logout </button>
                    : ""
            }
        </div>
    )
}

export default Header;