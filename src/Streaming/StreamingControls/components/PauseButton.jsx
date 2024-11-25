import React from "react";
import { IoMdPause } from "react-icons/io";
import { Button } from "../../StreamingStyle/StreamingStyle";

const PauseButton = ({ onPause }) => {
    return (
        <Button onClick={onPause} aria-label="Pause">
            <IoMdPause size={40} />
        </Button>
    );
};

export default PauseButton;
