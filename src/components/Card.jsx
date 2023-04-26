import React from "react";

export default function Card(props) {
    return (
        <div>
            <div className="card">
                <img className="card--img" src={props.item.photolink}/>
                <div className="card--text">
                    <div className="card--details">
                        <img className="card--details--marker" src="./marker.svg"/>
                        <p className="card--details--country">{props.item.country}</p>
                        <a className="card--details--maplink" href={props.item.maplink}>View on Google Maps</a>
                    </div>
                    <h1 className="card--place">{props.item.place}</h1>
                    <p className="card--dates">{props.item.dates}</p>
                    <p className="card--description">{props.item.description}</p>
                </div>
            </div>
            <hr/>
        </div>

        
    )
}