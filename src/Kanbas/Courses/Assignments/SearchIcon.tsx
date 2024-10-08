import {FaSearch} from "react-icons/fa";

export default function SearchIcon() {
    return (
        <span className="me-1 position-relative">
      <FaSearch style={{ top: "2px" }}
                     className="text-success me-1 position-absolute fs-5" />
      <FaSearch className="text-white me-1 fs-6" />
    </span>


    );}