import styles from './TracksList.module.css'
import clsx from "clsx";
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
    const className = clsx({
        [styles.track]: true,
        [styles.selected]: isSelected,
    })
    return (
        <li className={className} key={track.id} >
            <div onClick={handleClick}>
                {track.attributes.title}
            </div>
            <audio src={track.attributes.attachments[0].url} controls>

            </audio>
        </li>
    )

}
