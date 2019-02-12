import React from 'react';
import weatherpic from './partly_cloudy.png';

interface ImyProps {
    date: string;
    maxtemp: string;
    mintemp: string;
    childen?: JSX.Element[] | JSX.Element
}

const WeatherCard: React.SFC<ImyProps> = (props: any) => {

    return (
        <div className="contatiner">
        <div className="row">
            <div className="border rounded w-auto px-4 m-2 mx-4">
                <u><p className="text-center m-0">{props.date}</p></u>
                <img className="mx-auto d-block" src={weatherpic} />
                <div>
                    <p className="text-center" style={{color:'gray'}}>{props.maxtemp}°C  |  {props.mintemp}°C</p>
                </div>
            </div>
            </div>
        </div>
    )

}
export default WeatherCard;