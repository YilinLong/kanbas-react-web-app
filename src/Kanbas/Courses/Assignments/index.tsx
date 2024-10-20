import {BsGripVertical, BsPlus} from "react-icons/bs";
import {CiSearch} from "react-icons/ci";
import {FaSearch} from "react-icons/fa";
import "./index.css";
import {Search, useParams} from "react-router";
import {FaPlus} from "react-icons/fa6";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {IoCaretDownOutline, IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import {MdAssignment} from "react-icons/md";
import * as db from "../../Database";
import {courses} from "../../Database";
import {Link} from "react-router-dom";
export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div>
            <div>
           <div id="wd-assignments">
                <input id="wd-search-assignment"
                       className='search-input wd-search'
                       placeholder="Search..."/>
                <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-right"
                        type="button">
                    <BsPlus/>
                    Group
                </button>
                <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1 float-right"
                        type="button">
                    <BsPlus/>
                    Assignment
                </button>
            </div>
            <ul id="wd-assignments-title" className="list-group rounded-0">
                        <div className="list-group-item p-0 fs-5 border-gray">
                            <div className="p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                <IoCaretDownOutline className="me-2" />
                                Assignments
                                <div className="float-end">
                                    <span className="percent-input">40% of Total</span>
                                    <BsPlus />
                                    <IoEllipsisVertical className="fs-4" />
                                </div>
                            </div>
                        </div>
                            {assignments
                                .filter((assignment: any) => assignment.course === cid)
                                .map((assignment: any) => (
                            <ul className="list-group rounded-0">
                                <li className="wd-lesson wd-green list-group-item p-3 ps-1">
                                    <ul className="wd-grid-row">
                                        <Link
                                            to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                            className="wd-assignment-link"
                                        >
                                            {assignment.title}
                                        </Link>
                                    </ul>
                                    <div className="wd-grid-row">
                                        <BsGripVertical className="fs-2" />
                                        <MdAssignment className="fs-2" />
                                        <span className="red-words">Multiple modules | </span>
                                        <span className="assignment-details2">
                                            <b>Not Available Until</b> {assignment.available_from} |
                        </span>
                                        <LessonControlButtons />
                                    </div>
                                    <div className="wd-grid-row assignment-details">
                                        <b>Due</b> {assignment.due_date} | {assignment.points}
                                    </div>
                                </li>
                            </ul>
                    ))
                }
            </ul>
            </div>
        </div>);
}
