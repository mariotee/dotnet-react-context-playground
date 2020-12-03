import * as React from "react";

import { useWeatherContext } from "Context/WeatherContext";

interface IProps {
    populateWeatherData(): Promise<void>,
}



export default (props: IProps) => {
    const {currentZipcode, setCurrentZipcode, isFahrenheit, setFahrenheit} = useWeatherContext();

    const checkEnter = async (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            await props.populateWeatherData();
        }
    }

    return <React.Fragment>
        <h1>Weather</h1>
        <div className="d-flex justify-content-between">
            <section>
                <input placeholder={"Enter Zipcode"} value={currentZipcode} onChange={(e) => setCurrentZipcode(e.target.value)} onKeyPress={checkEnter} />
                <button className="btn-primary mx-2" onClick={props.populateWeatherData}>Fetch</button>
            </section>
            <section>
                <label className="mx-2 font-weight-bold">Toggle Fahrenheit</label>
                <input className="mx-2" type="checkbox" onChange={() => setFahrenheit(!isFahrenheit)} checked={isFahrenheit}/>
            </section>
        </div>
    </React.Fragment>
}