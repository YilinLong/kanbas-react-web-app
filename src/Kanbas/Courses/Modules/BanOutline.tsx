import {IoBanOutline} from "react-icons/io5";


export default function BanOutline() {
    return (
        <span className="me-1 position-relative">
      <IoBanOutline style={{ top: "2px" }}
                     className="text-success me-1 position-absolute fs-5" />
      <IoBanOutline className="text-white me-1 fs-6" />
    </span>
    );}