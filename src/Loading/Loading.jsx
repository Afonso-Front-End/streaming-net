import FetchMediaGallery from "../Api/FetchGallery";
import { ContainerLoadind } from "./LoadingStyle/LoadingStyle";

const Loading = () => {
    const { error, removeLoading } = FetchMediaGallery();

    return (
        <ContainerLoadind>
            {error ? (
                <p>{error}</p> 
            ) : (
                !removeLoading && <p>carregando</p>
            )}
        </ContainerLoadind>
    );
};

export default Loading;
