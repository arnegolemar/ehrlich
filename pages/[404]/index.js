import css from "../../styles/notFound.module.css"
import Image from 'next/image';
import Link from "next/link";

const NotFound = () => {
    return (
        <div className={css.notFound}>
            <Image
                src="/404.png"
                alt="Page Not Found!"
                width={500}
                height={370}
            /><br/>
            <Link href="/">
                <button>
                    Return home
                </button>
            </Link>
        </div>
    )
}

export default NotFound;