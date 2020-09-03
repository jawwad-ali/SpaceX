import React from "react"
import { useLaunchesInfoQuery } from "./../../generated/graphql"
import { DisplayMission, OwnProps } from "./DisplayMission"

export const LaunchContainer = (props: OwnProps) => {

    const { loading, error, data } = useLaunchesInfoQuery();

    if (loading)
        return <h4>Loading</h4>

    if (error || !data)
        return <h4>Error</h4>

    if (data) {
        // console.log(data)
    }
    return (
        <div>
            <DisplayMission data={data} {...props} />
        </div>
    )
}