import { forwardRef, useState } from "react";
import { PreviewModalPlayerContainer, PreviewModalPlayerContent, PreviewModalClosebtn, PreviewModalInfo } from "./DetailsStyle/DetailsStyle";
import { AiOutlineClose } from "react-icons/ai";

import Wallpaper from "./Wallpaper/wallpaper";
// import ModalInfo from "./components/ModalInfo";
// import ModallListTemp from "./components/ModallListTemp";
// import ModallListEpisode from "./components/ModallListEpisode";

const Details = forwardRef(({ mediaCurrent, setMediaCurret, setMediaDetailsVisibleModal }, ref) => {

    const [selectedTemporada, setSelectedTemporada] = useState(mediaCurrent.temporadas[0]);
    const [dataInfo, setDataInfo] = useState(mediaCurrent)


    const Closed = () => {
        setMediaDetailsVisibleModal(false)
    }

    const handleTemporadaSelect = (temporada) => {
        setSelectedTemporada(temporada);
    };

    return (
        <PreviewModalPlayerContainer ref={ref}>
            <PreviewModalPlayerContent>

                {/* <PreviewModalClosebtn onClick={() => Closed()}>
                    <AiOutlineClose size={22} color="#FDFDFD" />
                </PreviewModalClosebtn> */}

                <Wallpaper mediaCurrent={mediaCurrent} />

                <PreviewModalInfo>

                    {/* <ModalInfo
                        mediaCurrent={selectedTemporada}
                        dataInfo={dataInfo}
                    /> */}

                    {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 0rem 0.5rem 2rem" }}>
                        <h5>Episodios</h5>
                        <ModallListTemp
                            mediaCurrent={mediaCurrent}
                            onTemporadaSelect={handleTemporadaSelect}
                        />
                    </div> */}

                    {/* <ModallListEpisode
                        mediaCurrent={selectedTemporada}
                        temporadas={mediaCurrent}
                    /> */}
                </PreviewModalInfo>

            </PreviewModalPlayerContent>
        </PreviewModalPlayerContainer>
    )
})
export default Details;