import * as React from "react";

import { useWeatherContext } from "Context/WeatherContext";

import styles from "./styles.module.css";

interface IProps {
    populateWeatherData(): Promise<void>,
}

export default function DailyTempControls(props: IProps) {
    const {currentZipcode, setCurrentZipcode, isFahrenheit, setFahrenheit, savedZipcodes} = useWeatherContext();

    const checkEnter = async (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            await props.populateWeatherData();
        }
    }

    const clickSavedZipcode = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentZipcode(e.target.value);
    }

    return <div className="d-flex justify-content-between">
        <section>
            <input placeholder={"Enter Zipcode"} value={currentZipcode} onChange={(e) => setCurrentZipcode(e.target.value)} onKeyPress={checkEnter} />
            <button className="btn-primary mx-2" onClick={() => props.populateWeatherData()}>Fetch</button>
        </section>
        <section>
            <label className="mx-2">Last 5 (unique) searches</label>
            <select className={styles.zipcodes} onChange={clickSavedZipcode}>
            {
                savedZipcodes.map((e,i) => <option key={"o"+i} value={e}>{e}</option>)
            }
            </select>
        </section>
        <section>
            <label className="mx-2 font-weight-bold">Toggle Fahrenheit</label>
            <input className="mx-2" type="checkbox" onChange={() => setFahrenheit(!isFahrenheit)} checked={isFahrenheit}/>
        </section>
    </div>
}