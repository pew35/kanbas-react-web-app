import { Link } from "react-router-dom";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={80} rows={10}>
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <br />
        <table>
            <tr>
                <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
                </td>
                <td>
                <input id="wd-points" value={100} />
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                    <select id="wd-Assignments">
                    <option value="wd-Assignments">Assignments</option>
                    </select>
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-display-grade-as">Display Drade as</label>
                </td>
                <td>
                    <select id="wd-percentage">
                    <option value="wd-percentage">percentage</option>
                    </select>
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-Online">
                    <option value="Online">Online</option>
                    </select>
                </td>
            </tr>
            <br />
            <tr>
                <td></td>
                online entry Options   
            </tr>
            <tr>
                <td></td>
                
                <input type="checkbox" name="check-genre" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" name="check-genre" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" name="check-genre" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox" name="check-genre" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">Assign</td>
                Assign to
            </tr>
            <tr>
                <td></td>
                <td>
                    <input id="wd-assign-to" value="Everyone" />
                </td>
            </tr>
            <br />
            <tr>
                <td ></td>
                Due
            </tr>
            <tr>
                <td></td>
                <td>
                <input id = "wd-due-date" type="date"/>
                </td>
            </tr>
            <br />
            <tr>
                <td></td>
                <td>
                Available from:
                </td>
                <td>
                Until
                </td>
            </tr>
            <tr>
                <td></td>
                <td>
                <input id ="wd-available-from" type="date"/>
                </td>
                <td>
                <input id = "wd-available-until" type="date"/>
                </td>
            </tr>
            
           
        </table>
        <hr ></hr>
        <table>
            <tr>
                <td></td>
                <td></td>
                <td><button>Cancel</button></td>
                <td><button>Save</button></td>
                <Link to="/Kanbas/Courses/1234/Assignments">back</Link>
            </tr>
        </table>
        
      </div>
  );}
  