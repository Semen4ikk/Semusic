import {useEffect, useState} from "react";
import {getTracks} from "../dal/api.ts";
import type {TrackListItemOutput} from "../ui/TracksList.tsx";

export function useTracks(){
    const [tracks, setTracks] = useState<null|Array<TrackListItemOutput>>(null);
    useEffect(() => {


        getTracks().then(json => setTracks(json.data))
    }, [])

    return {tracks};
}