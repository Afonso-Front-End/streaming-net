import { ContainerListaEpisodios, Dropdown, DropdownList, DropdownListItem, Button } from "../../StreamingStyle/StreamingStyle"
import { BsCollectionPlay } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StreamingEpisodi = ({ mediaCurrent, setCurrentEpisode }) => {
    const [isOpenLista, setIsOpenLista] = useState(false)
    const dropdownRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSelectEpisodeo = (item) => {
        const encodedTitle = encodeURIComponent(item.episodeTitle);
        navigate(`/video/${item.id}/${encodedTitle}`, {
            state: { item, mediaCurrent },
        });
        setCurrentEpisode(item.episodePath)
    }

    const handleListaEpisodios = () => {
        setIsOpenLista(!isOpenLista);
    }

    return (
        <ContainerListaEpisodios>
            <Button>
                <FaThList size={32} onClick={handleListaEpisodios} />
            </Button>
            <Dropdown ref={dropdownRef} >
                {isOpenLista && (
                    <DropdownList>
                        {mediaCurrent && mediaCurrent.arquivo.map((item, index) => (
                            //  onClick={() => handleSelectEpisodeo(item.episodePath)} 
                            <DropdownListItem key={index} onClick={() => handleSelectEpisodeo(item)}>
                                <p>{item.id} {item.episodeTitle}</p>
                                {/* <Link
                                    to={`/video/${item.id}/${encodeURIComponent(item.episodeTitle)}`}
                                    key={index}
                                    state={{item, mediaCurrent }}

                                ></Link> */}
                            </DropdownListItem>
                        ))}
                    </DropdownList>
                )}
            </Dropdown>
        </ContainerListaEpisodios>
    )
}
export default StreamingEpisodi;