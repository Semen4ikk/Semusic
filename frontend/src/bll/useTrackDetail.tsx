import {useEffect, useState} from "react";
import {getTrack, type GetTrackDetailOutputData} from "../dal/api.ts";

export function useTrackDetail(trackId: string| null){
    const [selectedTrack, setSelectedTrack] = useState<null | GetTrackDetailOutputData>(null)

    useEffect(()=>{
        if(!trackId){
            setSelectedTrack(null)
            return;
        }
        const promise = getTrack(trackId)

        promise.then(json => setSelectedTrack(json.data))
    },[trackId])

    return {selectedTrack}
}