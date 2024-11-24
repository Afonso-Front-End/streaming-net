import { PreviewModalWrapper } from "../DetailsStyle/DetailsStyle"
const Wallpaper = ({ mediaCurrent, }) => {
    return (
        <PreviewModalWrapper
            style={{ backgroundImage: `url(${mediaCurrent.image})` }}>
        </PreviewModalWrapper>
    )
}
export default Wallpaper;