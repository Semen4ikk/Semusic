import {useEffect, useState} from "react";



export function App() {
    // const apiKey = process.env.API_KEY;
    const [selectedTrackId, setSelectedTrackId] = useState(null);
    const [tracks, setTracks] = useState(null);
    const [selectedTrack, setSelectedTrack] = useState(null);

    useEffect(() => {

        fetch(
            'https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                //'api-key': apiKey
            }
        }).then(res => res.json())
            .then(json => setTracks(json.data))


    }, [])



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


    return (
    <div>
        <h1>Music player</h1>
        <button onClick={()=>{
            setSelectedTrackId(null);
            setSelectedTrack(null);
        }}>сбросить выделения</button>
        <div style={{
            display: 'flex',
            gap: '40px',
        }}>
            <ul>
                {tracks.map((track)=>{
                    return (
                        <li key={track.id} style={{border:track.id === selectedTrackId ?  "1px solid yellow" : "none"                                                   }}   >
                            <div onClick={()=> {
                                setSelectedTrackId(track.id)

                                fetch(
                                    'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/'+track.id, {
                                        headers: {
                                            'api-key': '7ec66a93-321a-48d7-9ba4-86caf43f2b0b'
                                        }
                                    }).then(res => res.json())
                                    .then(json => setSelectedTrack(json.data))

                            }}>
                                {track.attributes.title}
                            </div>
                            <audio src={track.attributes.attachments[0].url} controls>

                            </audio>
                        </li>
                    )
                })
                }
            </ul>
            <div>
                <h2>Details</h2>
                {!selectedTrack && !selectedTrackId && "Track is not selected"}
                {!selectedTrack && selectedTrackId && "Loading..."}
                {selectedTrack && selectedTrackId && selectedTrack.id !== selectedTrackId && "Loading..."}
                { selectedTrack && <div>
                    <h3>{selectedTrack.attributes.title}</h3>
                    <p>
                        <h4>Lyrics</h4>
                        {selectedTrack.attributes.lyrics ?? 'No lyrics found.'}
                    </p>


                </div>
                }
            </div>
        </div>
    </div>
  )
}

