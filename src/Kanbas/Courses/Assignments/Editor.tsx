import {Link} from "react-router-dom";
import "./index.css";
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <div className='wd-grid-row'>
                <input id="wd-name" className='wd-assignments-editor form-control' value="A1 - ENV + HTML"/><br/><br/>
            </div>
            <div className='wd-grid-row mb-4'>
            <textarea className='form-control wd-description' id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
            </div>
            <div className='wd-grid-row mb-4'>
                <div className='col wd-grid-col-half-page float-end'>
                    <input type='text' id="wd-points" className='form-control' value={100}/>
                </div>
                <div className='col'>
                    <label htmlFor="wd-points" className='col-form-label mb-4 me-2 float-end'> Points </label>
                </div>
            </div>
            <div className='wd-grid-row mb-4'>
                <div className='col wd-grid-col-half-page float-end'>
                    <select className='form-select' id="wd-select-one-group-genre">
                        <option value="Assignment">Assignments</option>
                        <option value="Quizzs">Quizzs</option>
                    </select></div>
                <label htmlFor="wd-group" className='col-form-label mb-4 me-2  float-end'> Assignment Group </label>
            </div>
            <div className='wd-grid-row mb-4'>
                <div className='col wd-grid-col-half-page float-end'>
                    <select className='form-select' id="wd-select-one-grade-type">
                        <option value="Percentage">Percentage</option>
                        <option value="Letter Grade">Letter Grade</option>
                    </select></div>
                <label htmlFor="wd-display-grade-as" className='col-form-label mb-4 me-2  float-end'>
                    Display Grade as </label>
            </div>
            <div className='wd-grid-row mb-4'>
                <div className='col square-container float-end'>

                    <select id="wd-select-one-submision-type" className='form-select mb-4'>
                        <option value="Online">Online</option>
                    </select>
                    <legend className='col-form-label'><b>Online Entry Options</b></legend>
                    <div className='mb-4'>
                        <input type="checkbox" name="check-entry-options" id="wd-chkbox-text-entry"
                               className='form-check-input'/>
                        <label htmlFor="wd-text-entry" className='form-check-label'>Text Entry</label>
                    </div>
                    <div className='mb-4'>
                        <input type="checkbox" name="check-entry-options" id="wd-chkbox-website-url"
                               className='form-check-input'/>
                        <label htmlFor="wd-website-url" className='form-check-label'>Website Url</label>
                    </div>
                    <div className='mb-4'>
                        <input type="checkbox" name="check-entry-options" id="wd-chkbox-media-recording"
                               className='form-check-input'/>
                        <label htmlFor="wd-media-recordings" className='form-check-label'>Media Recording</label>
                    </div>
                    <div className='mb-4'>
                        <input type="checkbox" name="check-entry-options" id="wd-chkbox-student-annotation"
                               className='form-check-input'/>
                        <label htmlFor="wd-student-annotation" className='form-check-label'>Student Annotation</label>
                    </div>
                    <div className='mb-4'>
                        <input type="checkbox" name="check-entry-options" id="wd-chkbox-file-upload"
                               className='form-check-input'/>
                        <label htmlFor="wd-file-upload" className='form-check-label'>File Upload</label>
                    </div>
                </div>
                <label htmlFor="wd-submission-type" className='col-form-label mb-4 me-2  float-end'> Submission
                    Type </label>
            </div>
            <div className='wd-grid-row mb-4'>
                <div className='mb-4 square-container float-end'>
                    <div className='mb-4'>
                        <label htmlFor="wd-assign-to" className='form-label'><b>Assign to</b></label>
                        <input id="wd-assign-to" className='form-control ' style={{width: '200%;'}} value={"Everyone"}/>
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="wd-due-date"> <b>Due</b> </label>
                        <div>
                            <input type="date"
                                   id="wd-due-date"
                                   value="2024-05-13" className='form-control' style={{width: '300px'}}/>
                        </div>
                    </div>
                    <div className='mb-4 row'>
                        <div className='mb-4 col'>
                            <label htmlFor="wd-available-from" className=''> <b>Available from</b> </label>
                            <input type="date"
                                   id="available-from"
                                   value="2024-05-06" className='form-control' style={{width: '300px'}}/>
                        </div>
                        <div className='mb-4 col'>
                            <label htmlFor="wd-available-until" className=''> <b>Until </b></label>
                            <input type="date"
                                   id="available-until"
                                   value="2024-05-20" className='form-control' style={{width: '300px'}}/>
                        </div>
                    </div>
                </div>
                <label htmlFor="wd-submission-type" className='col-form-label mb-4 me-2  float-end'> Assign </label>
            </div>
            <div className='wd-grid-row mb-4'>
            <hr className="solid black; width: 80%; margin: 20px;"/>
        </div>
            <div className="wd-grid-row">
                <div className='col float-end'>
                    <a href="http://localhost:3000/Kanbas/Dashboard/Assignments#/Kanbas/Courses/1234/Assignments"
                       id="wd-cancel" className="me-2">
                        <button id="wd-cancel" className='btn btn-secondary'>Cancel</button> </a>

                    <a href="http://localhost:3000/Kanbas/Dashboard/Assignments#/Kanbas/Courses/1234/Assignments"
                       id="wd-save">
                        <button id="wd-save" className='btn btn-danger'>Save</button>
                                </a>
                </div>
            </div>
        </div>


    );
}
