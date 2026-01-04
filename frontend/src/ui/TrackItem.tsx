
type Props = {
    isSelected: boolean;
    onSelect: (trackId: string) => void;
    track: {
        id: string;
        attributes: {
            title: string | null;
            attachments: Array<{url: string}>;
        }
    }
}

export function TrackItem({track, isSelected,onSelect }: Props) {
    const handleClick = () => {onSelect?.(track.id);}
    return (
        <li key={track.id} style={{
            border: isSelected ? "1px solid yellow" : "none"
        }}>
            <div onClick={handleClick}>
                {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls>

            </audio>
        </li>
    )

}
