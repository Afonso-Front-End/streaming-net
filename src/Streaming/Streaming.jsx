// import { useRef, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { ContainerPlay, ContentPlay, Video, Source } from "../Streaming/StreamingStyle/StreamingStyle";

import StreamingControls from "../Streaming/StreamingControls/StreamingControls.jsx";
import useStreaming from "../Streaming/useStreaming/useStreaming.js";
const Streaming = () => {
    const { videoRef, setCurrentEpisode, currentEpisode, isPlaying, handlePlay, handlePause, handleToggleFullscreen, temporadas, mediaCurrent, } = useStreaming()
    return (
        <ContainerPlay>
            <ContentPlay>
                <Video ref={videoRef}>
                    <Source src={currentEpisode} />
                </Video>
                <StreamingControls
                    onPlay={handlePlay}
                    onPause={handlePause}
                    isPlaying={isPlaying}
                    onToggleFullscreen={handleToggleFullscreen}
                    mediaCurrent={mediaCurrent}
                    currentEpisode={currentEpisode}
                    setCurrentEpisode={setCurrentEpisode}
                    // onNext={handleNext}
                    // onPrev={handlePrev}
                    // temporadas={temporadas}
                />

            </ContentPlay>
        </ContainerPlay>
    )
}
export default Streaming;