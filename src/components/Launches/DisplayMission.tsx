import React from "react"
import { LaunchesInfoQuery } from "./../../generated/graphql"
import "./Style.css"

export interface OwnProps {
    handleIdChange: (newId: number) => void
}
interface Props extends OwnProps {
    data: LaunchesInfoQuery
}
export const DisplayMission: React.FC<Props> = ({ data, handleIdChange }) => {
    return (
        <div className="LaunchList ">
            <h1 className="missionheading">Missions</h1>
            <ul className="LaunchList__list ">
                {
                    data.launches?.map((launchObj, ind) => {
                        return (
                            <li
                                className="LaunchList__item"
                                key={ind}
                                onClick={() => handleIdChange(launchObj?.flight_number!)}
                            >
                                {launchObj?.mission_name}

                            </li>)
                    })
                }
            </ul>
        </div>

    )
}