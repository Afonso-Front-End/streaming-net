import React, { useState } from "react";
import { ContainerControls, AreaControls, PlayOpacity, ContainerButton, AreaControlsLeft, AreaControlsRight } from "../StreamingStyle/StreamingStyle";
import PlayButton from "../StreamingControls/components/PlayButton";
import PauseButton from "../StreamingControls/components/PauseButton";

// import ModallListTemp from "../../MediaGallery/components/ModallListTemp";
import FullscreenButton from "../StreamingControls/components/FullscreenButton";
import StreamingEpisodi from "./StreamingEpisodi/StreamingEpisodi";


const StreamingControls = ({ onPlay, onPause, onNext, onPrev, isPlaying, onToggleFullscreen, mediaCurrent, temporadas, setCurrentEpisode, currentEpisode }) => {

    return (
        <ContainerControls>
            <PlayOpacity >
                {isPlaying ? (
                    <PauseButton onPause={onPause} />
                ) : (
                    <PlayButton onPlay={onPlay} />
                )}
            </PlayOpacity>
            <AreaControls>
                <AreaControlsLeft>
                    {isPlaying ? (
                        <ContainerButton>
                            <PauseButton onPause={onPause} />
                        </ContainerButton>
                    ) : (
                        <ContainerButton>
                            <PlayButton onPlay={onPlay} />
                        </ContainerButton>
                    )}
                </AreaControlsLeft>
                <AreaControlsRight>

                    <StreamingEpisodi
                        currentEpisode={currentEpisode}
                        setCurrentEpisode={setCurrentEpisode}
                        mediaCurrent={mediaCurrent}
                    >
                    </StreamingEpisodi>

                    <FullscreenButton onToggleFullscreen={onToggleFullscreen} />
                </AreaControlsRight>
            </AreaControls>
        </ContainerControls>
    );
};

export default StreamingControls;
