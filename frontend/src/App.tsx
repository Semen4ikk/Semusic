function App() {
    const tracks = [
        {id: 1, title: "Песня 1", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"},
        {id: 2, title: "Песня 2", url: "https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3"}
    ]


  return (
    <>
        <h1>Music player</h1>
        <ul>
            {tracks.map((tracks)=>{
                return (
                    <li key={tracks.id}>
                        <div>
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

export default App
