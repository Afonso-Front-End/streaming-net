import { Button } from "../../StreamingStyle/StreamingStyle";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
const FullscreenButton  = ({ onToggleFullscreen }) => {
    return (

        <Button onClick={onToggleFullscreen} aria-label="Fullscreen">
            <MdFullscreen size={50} />
        </Button >

    )
}

export default FullscreenButton ;