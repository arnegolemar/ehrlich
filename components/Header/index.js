import css from "./header.module.css";
import Image from 'next/image';


const Header = () => {
    return (
        <div className={css.header}>
            <Image
                src="/cloud.png"
                alt="Cloud"
                width={80}
                height={50}
            />
            <span>Weather Forecast</span>
        </div>
    )
}

export default Header;