import css from "../../styles/weatherUpdate.module.css";
import ccss from "../../styles/common.module.css";

import Link from "next/link";
import {  getSession } from "next-auth/react";

export async function getServerSideProps(context) {
    const session = await getSession(context)

    if (!session) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }

    const { location } = context.params;
    
    const res = await fetch("https://api.weatherapi.com/v1/current.json?key=0cd7b8a5b4104ae18ea184426221106&q=" + location + "&aqi=no");
    const data = await res.json()
    
    return {
        props: {
            data
        },
    }
}

const WeatherUpdate = ({ data }) => {
    console.log(data);

    var date = new Date(data.current.last_updated.split(" ")[0]);
        date = String(date.getMonth() + 1).padStart(2, "0") + "/" + String(date.getDate()).padStart(2, "0") + "/" + date.getFullYear()

    return (
        <div className={css.weatherUpdate}>
            <div className={css.weatherUpdateWrapper}>

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
                            <td> { date } </td>
                            <td> { data.current.temp_f } </td>
                            <td className={css.notImp}> { data.current.condition.text } </td>
                            <td className={css.notImp}> { data.current.condition.text } </td>
                            <td className={css.notImp}> { data.current.pressure_in } </td>
                            <td className={css.notImp}> { data.current.humidity } </td>
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