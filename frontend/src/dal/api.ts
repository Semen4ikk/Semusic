export type GetTrackDetailOutputData = {
    id: string;
    attributes: {
        title: string | null;
        lyrics: string | null;
    }
}

export const getTracks = ()=> {
    const promise  = fetch(
        'https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': '7ec66a93-321a-48d7-9ba4-86caf43f2b0b'
            }
        }).then(res => res.json())
    return promise
}

export const getTrack = (trackId: string)=> {
    const promise:Promise<{data: GetTrackDetailOutputData}> = fetch(

        'https://musicfun.it-incubator.app/api/1.0/playlists/tracks/'+trackId, {
            headers: {
                'api-key': '7ec66a93-321a-48d7-9ba4-86caf43f2b0b'
            }
        }).then(res => res.json())
    return promise;
}