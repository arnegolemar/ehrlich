import css from "../../styles/weatherUpdate.module.css";
import ccss from "../../styles/common.module.css";
import Link from "next/link";

const WeatherUpdate = ({ location }) => {
    return (
        <div className={css.weatherUpdate}>
            <div className={css.weatherUpdateWrapper}>
                {location}

                <table>
                    <thead>
                        <tr className={css.mainTh}>
                            <th colSpan={6}> Date </th>
                        </tr>
                        <tr className={css.subTh}>
                            <th> (mm/dd/yyyy) </th>
                            <th> Temp(F) </th>
                            <th className={css.notImp}> Description </th>
                            <th className={css.notImp}> Main </th>
                            <th className={css.notImp}> Pressure </th>
                            <th className={css.notImp}> Humidity </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

                <Link href="/">
                    <button className={ccss.button}>
                        Back
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default WeatherUpdate;