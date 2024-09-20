export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><b>Assignment Name</b></label>
            <p><input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
        </p>
            <br />
            <table>
                <div>
                    <tr>
                        <td align="right" valign="top">
                            <label htmlFor="wd-points">Points</label>
                        </td>
                        <td>
                            <input id="wd-points" value={100}/>
                        </td>
                    </tr>
                </div>
                <p>
                    <label htmlFor="wd-group"> Assignment Group: </label>
                    <select id="wd-select-one-group-genre">
                        <option value="Assignment">Assignments</option>
                        <option value="Quizzs">Quizzs</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="wd-display-grade-as"> Display Grade as: </label>
                    <select id="wd-select-one-grade-type">
                        <option value="Percentage">Percentage</option>
                        <option value="Letter Grade">Letter Grade</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="wd-submission-type"> Submission Type: </label>
                    <select id="wd-select-one-submision-type">
                        <option value="Online">Online</option>
                    </select>
                </p>
                <p>
                    <label>Online Entry Options</label><br/>

                    <input type="checkbox" name="check-entry-options" id="wd-chkbox-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>

                    <input type="checkbox" name="check-entry-options" id="wd-chkbox-website-url"/>
                    <label htmlFor="wd-website-url">Website Url</label><br/>

                    <input type="checkbox" name="check-entry-options" id="wd-chkbox-media-recording"/>
                    <label htmlFor="wd-media-recordings">Media Recording</label><br/>

                    <input type="checkbox" name="check-entry-options" id="wd-chkbox-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                    <input type="checkbox" name="check-entry-options" id="wd-chkbox-file-upload"/>
                    <label htmlFor="wd-file-upload">File Upload</label>
                </p>
                <p>
                    <label htmlFor="wd-assign-to">Assign Assign to</label><br/>
                    <td>
                        <input id="wd-assign-to" value={"Everyone"}/>
                    </td>
                </p>
                <p>

                    <label htmlFor="wd-due-date"> Due </label>
                    <div>
                        <input type="date"
                               id="wd-due-date"
                               value="2024-05-13"/>
                    </div>
                </p>
                <div>
                    <label htmlFor="wd-available-from"> Available from </label>
                    <label htmlFor="wd-available-until"> Until </label>
                </div>
                <div>
                    <input type="date"
                           id="available-from"
                           value="2024-05-06"/>

                    <input type="date"
                           id="available-until"
                           value="2024-05-20"/>
                </div>
                <div>
                    <td align="right" valign="bottom">
                        <button id="wd-cancel">Cancel</button>
                        <button id="wd-save">Save</button>
                    </td>
                </div>
            </table>
        </div>
    );
}
