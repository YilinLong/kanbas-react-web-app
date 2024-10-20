import {Link, useLocation, useParams} from "react-router-dom";
import {AiOutlineDashboard} from "react-icons/ai";
import {LiaBookSolid, LiaCogSolid} from "react-icons/lia";
import {IoCalendarOutline} from "react-icons/io5";
import {FaInbox} from "react-icons/fa6";
import * as db from "../Database";
import "./index.css";
export default function CoursesNavigation() {
    const { cid } = useParams();
    const location = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            <ul className="list-group">
                {links.map((link) => (
                    <li key={link} className="list-group-item text-danger border border-0">
                        <Link
                            to={`/Kanbas/Courses/${cid}/${link}`}
                            className={location.pathname.includes(link) ? "wd-black text-black" : ""}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    );
}
