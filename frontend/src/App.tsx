import {useState} from "react";

const tracks = [
    {id: 1, title: "Песня 1", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"},
    {id: 2, title: "Песня 2", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"}
]

export function App() {
    const [selectedTrackId, setSelectedTrackId] = useState(null);
    if ( tracks.length == 0 ) {
        return <span>No tracks found.</span>
    }

    return (
    <>
        <h1>Music player</h1>
        <button onClick={()=>{
            setSelectedTrackId(null);
        }}>Сбросить выделение</button>
        <ul>
            {tracks.map((tracks)=>{
                return (
                    <li key={tracks.id} style={{border:tracks.id === selectedTrackId ?  "1px solid yellow" : "none"                                                   }}   >
                        <div onClick={()=> {
                            setSelectedTrackId(tracks.id)
                        }}>
                            {tracks.title}
                        </div>
                        <audio src={tracks.url} controls={true}>

                        </audio>
                    </li>
                )
            })
            }
        </ul>

    </>
  )
}

