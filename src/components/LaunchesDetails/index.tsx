import React, { useEffect } from "react"
import { useLaunchProfileQuery } from "./../../generated/graphql"
import { DisplayLaunchDetails } from "./DisplayLaunchDetails"
interface OwnProps {
    id: number
}
export const LaunchDetailsContainer = ({ id }: OwnProps) => {
    const { loading, error, data, refetch } = useLaunchProfileQuery({ variables: { id: String(id) } })
    useEffect(() => {
        refetch();
    }, [id]);
    if (loading)
        return <h4>Loading</h4>

    if (error || !data)
        return <h4>Error</h4>

    if (data) {
        // console.log(data)
    }
    return (
        <div>
            <DisplayLaunchDetails data={data} />
        </div>
    )
}