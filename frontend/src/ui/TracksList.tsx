import {TrackItem} from "./TrackItem.tsx";
import {useTracks} from "../bll/useTracks.tsx";
import styles from './TracksList.module.css'

export type TrackListItemOutput = {
    id: string;
    attributes: {
        title: string | null;
        attachments: Array<{url: string}>;
    }
}
type Props = {
    selectedTrackId: string| null;
    onTrackSelect: (id: string | null) => void;
}


export function TracksList({selectedTrackId, onTrackSelect}:Props) {
    const {tracks} = useTracks();

    if (tracks === null) {
        return (
            <div>
                <h1>Треки</h1>
                <span>loading...</span>
            </div>
        )
    }
    if ( tracks.length === 0 ) {
        return (
            <div>
                <h1>Треки</h1>
                <span>No tracks found.</span>
            </div>

        )
    }

    const handleResetClick = ()=>{
        onTrackSelect?.(null)
    }
    const handleClick=(trackId: string)=> {
        onTrackSelect?.(trackId)
    }
    return (
        <div>
            <button onClick={handleResetClick}>Reset</button>
            <hr/>
            <ul className={styles.tracks}>
                {tracks.map((track)=>{

                    return (
                        <TrackItem
                            key={track.id}
                            track={track}
                            isSelected={track.id === selectedTrackId}
                            onSelect={handleClick}></TrackItem>
                    )
                })
                }
            </ul>
        </div>

    )
}


