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
                    <select id="wd-select-one-genre">
                    <option value="Assignments">Assignments</option>
                    </select>
                </td>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">
                    <label htmlFor="wd-type">Submission Type</label>
                </td>
                <td>
                    <select id="wd-select-one-genre">
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
                
                <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
                <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
                <label htmlFor="wd-chkbox-drama">Drama</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
                <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

                <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
                <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
            </tr>
            <br />
            <tr>
                <td align="right" valign="top">Assign</td>
                Assign to
            </tr>
            <tr>
                <td></td>
                <td>
                    <input id="wd-name" value="Everyone" />
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
                <input type="date"/><br/>
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
                <input type="date"/><br/>
                </td>
                <td>
                <input type="date"/><br/>
                </td>
            </tr>
           
        </table>
        <hr ></hr>
        <button >Cancel</button>
        <button>Save</button>
      </div>
  );}
  