import React from "react"
import { LaunchProfileQuery } from "./../../generated/graphql"
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    data: LaunchProfileQuery
}

const DisplayLaunchDetails: React.FC<Props> = ({ data }) => {
    if (!data.launch) {
        return <div>No launch available</div>;
    }


    const className = 'LaunchProfile';

    return (
        <div className="LaunchProfile">
            <div className={`${className}__status`}>
                <span>Flight {data.launch.flight_number} </span>
            </div>

            <h1 className={`${className}__title`}> {data.launch.mission_name} </h1>

            <ul className="rocketName-Type">
                <span>Rocket Name:</span>
                <li> {data.launch.rocket?.rocket_name} </li>

                <span className="missionStatus">Mission Status: </span>
                <li>
                    {data.launch.launch_success ? (
                        <span className={`${className}__success`}>Success</span>
                    ) : (
                            <span className={`${className}__failed`}>Failed</span>
                        )}
                </li>

                <span className="RcType">Rocket Type:</span>
                <li> {data.launch.rocket?.rocket_type} </li>


            </ul>

            <div className="mt-3">
                <p className={`${className}__description`}>{data.launch.details}</p>
            </div>
            {!!data.launch.links && !!data.launch.links.flickr_images && (
                <div className={`${className}__image-list`}>
                    {data.launch.links.flickr_images.map(image =>
                        image ? <img src={image} className={`${className}__image`} key={image} alt="Source" /> : null,
                    )}
                </div>
            )}
        </div>
    );
};

export { DisplayLaunchDetails };