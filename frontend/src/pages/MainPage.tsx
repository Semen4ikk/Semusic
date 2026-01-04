import {TracksList} from "../ui/TracksList.tsx";
import {TrackDetail} from "../ui/TrackDetail.tsx";
import {useState} from "react";

export function MainPage(){

    const [trackId, setTrackId] = useState<null|string>(null)
    const handleTrackSelect = (id: null | string):void=>{
        setTrackId(id)
    }
    return (
        <>
            <div style={{display: "flex", gap: '40px'}}>
                <TracksList
                    selectedTrackId={trackId}
                    onTrackSelect={handleTrackSelect}/>
                <TrackDetail trackId={trackId}/>
            </div>
        </>
    )
}