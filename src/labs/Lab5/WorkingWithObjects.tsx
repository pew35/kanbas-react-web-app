import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "CS101",
        name: "Introduction to Computer Science",
        description: "This module covers the basics of computer science.",
        course: "Computer Science"

    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    return (
        <div id="wd-working-with-objects">

            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />


            <h4>Retrieving Properties score</h4>
            <a id="wd-retrieve-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}> update score</a>

            <input className="form-control w-75" id="wd-assignment-score"
                defaultValue={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: Number(e.target.value) })} />
            <hr />
            <h4>Retrieving Properties completely</h4>
            <input id="wd-retrieve-assignment-completed"
                className="checkbox mb-2"
                type="checkbox"
                onChange={(e) =>
                    setAssignment({ ...assignment, completed: e.target.checked })} />
            update completed
            <a id="wd-retrieve-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/complete`}>
                update completed</a>
            <hr />
            <h4>Retrieving Properties module</h4>
            <a id="wd-retrieve-module"
                className="btn btn-primary me-2"
                href={`${MODULE_API_URL}`}> Get module</a>

            <a id="wd-retrieve-module-name"
                className="btn btn-primary me-3"
                href={`${MODULE_API_URL}/name`}> Get module name</a>
                <hr/>

        </div>
    );
}
