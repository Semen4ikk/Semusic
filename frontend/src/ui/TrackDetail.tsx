import {useTrackDetail} from "../bll/useTrackDetail.tsx";
import styles from "./TrackDetail.module.css"
type Props = {
    trackId: string | null;
}
export function TrackDetail({trackId}:Props){
    const {selectedTrack} = useTrackDetail(trackId);

    return (
        <div className={styles.track}>
            <h2>Details</h2>
            {!selectedTrack && !trackId && "Track is not selected"}
            {!selectedTrack && trackId && "Loading..."}
            {selectedTrack && trackId && selectedTrack.id !== trackId && "Loading..."}
            { selectedTrack && <div>
                <h3>{selectedTrack.attributes.title}</h3>
                <p>
                    <h4>Lyrics</h4>
                    {selectedTrack.attributes.lyrics ?? 'No lyrics found.'}
                </p>


            </div>
            }
        </div>
    )
}