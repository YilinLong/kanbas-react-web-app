import {BsGripVertical, BsPlus} from "react-icons/bs";
import {CiSearch} from "react-icons/ci";
import {FaSearch} from "react-icons/fa";
import "./index.css";
import {Search} from "react-router";
import {FaPlus} from "react-icons/fa6";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import {IoCaretDownOutline, IoEllipsisVertical} from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import {MdAssignment} from "react-icons/md";
export default function Assignments() {
    return (
        <div>
            <div>
            <div id="wd-assignments">
                <FaSearch/>
                <input id="wd-search-assignment"
                       className='search-input'
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
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3"/>
                        <IoCaretDownOutline className="me-2"/>
                        Assignments
                        <div className="float-end">
                            <span className = 'percent-input'> 40% of Total </span>
                            <BsPlus/>
                            <IoEllipsisVertical className="fs-4"/>
                        </div>
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <MdAssignment/>
                            <a className="wd-assignment-link"
                               href="#/Kanbas/Courses/1234/Assignments/123">
                                A1
                            </a>
                            <p><span className="red-words">Multiple modules </span>
                                <span
                                    className='assignment-details2'>| <b>Not Available Until</b> May 6 at 12:00am | </span>
                            </p>
                            <p><span className='assignment-details'> <b>Due</b> May 13 11:59pm | 100pts</span></p>
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <MdAssignment/>
                            <a className="wd-assignment-link"
                               href="#/Kanbas/Courses/1234/Assignments/123">
                                A2
                            </a>
                            <p><span className="red-words">Multiple modules </span>
                                <span
                                    className='assignment-details2'>| <b>Not Available Until</b> May 13 at 12:00am | </span>
                            </p>
                            <p><span className='assignment-details'> <b>Due</b> May 20 11:59pm | 100pts</span></p>
                            <LessonControlButtons/>
                        </li>
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3"/>
                            <MdAssignment/>
                            <a className="wd-assignment-link"
                               href="#/Kanbas/Courses/1234/Assignments/123">
                                A3
                            </a>
                            <p><span className="red-words">Multiple modules </span>
                                <span
                                    className='assignment-details2'>| <b>Not Available Until</b> May 20 at 12:00am | </span>
                            </p>
                            <p><span className='assignment-details'> <b>Due</b> May 27 11:59pm | 100pts</span></p>
                            <LessonControlButtons/>
                        </li>
                    </ul></li>
                    </ul>
            </div>
        </div>);
}

{/*    <h3 id="wd-assignments-title">*/
}
{/*        ASSIGNMENTS 40% of Total <button>+</button>*/
}
{/*    </h3>*/}
        {/*    <ul id="wd-assignment-list">*/}
        {/*        <li className="wd-assignment-list-item">*/}
        {/*            <a className="wd-assignment-link"*/}
        {/*               href="#/Kanbas/Courses/1234/Assignments/123">*/}
        {/*                A1 - ENV + HTML*/}
        {/*            </a>*/}
        {/*            <div>Multiple Modules | <b>Not Available Until</b> May 6 at 12:00am |*/}
        {/*                <p><b>Due</b> May 13 11:59pm | 100pts</p>*/}
        {/*            </div>*/}
        {/*        </li>*/}
        {/*        <li className="wd-assignment-list-item">*/}
        {/*            <a className="wd-assignment-link"*/}
        {/*               href="#/Kanbas/Courses/1234/Assignments/123">*/}
        {/*                A2 - CSS + BOOTSTRAP*/}
        {/*            </a>*/}
        {/*            <div>Multiple Modules | <b>Not Available Until</b> May 13 at 12:00am |*/}
        {/*                <p><b>Due</b> May 20 11:59pm | 100pts</p>*/}
        {/*            </div>*/}
        {/*        </li>*/}
        {/*        <li className="wd-assignment-list-item">*/}
        {/*            <a className="wd-assignment-link"*/}
        {/*               href="#/Kanbas/Courses/1234/Assignments/123">*/}
        {/*                A3 - JAVASCRIPT + REACT*/}
        {/*            </a>*/}
        {/*            <div>Multiple Modules | <b>Not Available Until</b> May 20 at 12:00am |*/}
        {/*                <p><b>Due</b> May 27 11:59pm | 100pts</p>*/}
        {/*            </div>*/}
        {/*        </li>*/}
        {/*    </ul>*/}
        {/*</div>*/}

//     );
// }
