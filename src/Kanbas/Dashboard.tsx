import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/1234/Home">
                        <img src="/images/reactjs.jpg" width={200}/>
                        <div>
                            <h5>
                                CS1234 React JS
                            </h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course-name">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/2600/Home">
                        <img src="/images/algorithm-formulation.webp" width={200}/>
                        <div>
                            <h5>
                                CS2600
                            </h5>
                            <p className="wd-dashboard-title">
                                Algorithms in Practice
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/2700/Home">
                        <img src="/images/ai.jpg" width={200}/>
                        <div>
                            <h5>
                                CS2700
                            </h5>
                            <p className="wd-dashboard-title">
                                Foundations of Artificial Intelligence
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/2830/Home">
                        <img src="/images/cs.jpg" width={200}/>
                        <div>
                            <h5>
                                CS2830
                            </h5>
                            <p className="wd-dashboard-title">
                                Advanced Computer Science
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/2850/Home">
                        <img src="/images/ml.webp" width={200}/>
                        <div>
                            <h5>
                                CS2850
                            </h5>
                            <p className="wd-dashboard-title">
                                Introduction to Machine Learning
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/2900/Home">
                        <img src="/images/dl.png" width={200}/>
                        <div>
                            <h5>
                                CS2900
                            </h5>
                            <p className="wd-dashboard-title">
                                Introduction to Deep Learning
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/3050/Home">
                        <img src="/images/qc.jpg" width={200}/>
                        <div>
                            <h5>
                                CS3050
                            </h5>
                            <p className="wd-dashboard-title">
                                Introduction to Quantum Computing
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/3410/Home">
                        <img src="/images/cc.jpeg" width={200}/>
                        <div>
                            <h5>
                                CS3410
                            </h5>
                            <p className="wd-dashboard-title">
                                Cloud Computing
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
                <div className="wd-dashboard-course">
                    <Link className="wd-dashboard-course-link"
                          to="/Kanbas/Courses/2700/Home">
                        <img src="/images/se.jpg" width={200}/>
                        <div>
                            <h5>
                                CS4310
                            </h5>
                            <p className="wd-dashboard-title">
                                Foundation of Software Engineering
                            </p>
                            <button> Go</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
