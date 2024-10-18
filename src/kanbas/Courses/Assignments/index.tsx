import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import WeekControlButtons from "./WeekControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GrNotes } from "react-icons/gr";
import { Link, useLocation, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments.filter((assignment: any) => assignment.course === cid);
    const { pathname } = useLocation();
    return (
        <div id="wd-assignments">
            <AssignmentControls /><br /><br /><br /><br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />

                        ASSIGNMENTS
                        <WeekControlButtons />
                    </div>

                    {assignments && (
                        <ul className="list-group rounded-0">
                            {assignments.map((assignment: any) => (

                                <li className=" list-group-item p-3 ps-1">

                                    <div className='row'>


                                        <div className='col-auto' style={{ margin: "auto" }}>
                                            <BsGripVertical style={{ verticalAlign: "middle", marginRight: "10px" }} />
                                            <GrNotes className=" text-success fs-3" />
                                        </div>
                                        <div className='col wd-fg-color-gray ps-0 ms-2'>
                                            <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                                className=" nav-link d-flex flex-row me-2 text-black bg-white">

                                                {assignment.title}
                                            </Link>
                                            <span className="wd-fg-color-red">Multiple Modules</span>
                                            {`| Not available until ${assignment.available} | Due ${assignment.due}| ${assignment.points} pts`}

                                        </div>
                                        <div className="col-auto" style={{ margin: "auto"}}>
                                            <AssignmentControlButtons />
                                        </div>




                                    </div>
                                </li>
                            ))}

                        </ul>
                    )}





                </li>
            </ul> </div>


    );
}

<div id="wd-assignments">
    <AssignmentControls /><br /><br /><br /><br />

    <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                Projects <WeekControlButtons /></div>
            <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <GrNotes className="text-success  me-2 fs-3 " />
                    P1 <AssignmentControlButtons /></li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <GrNotes className="text-success  me-2 fs-3 " />
                    P2 <AssignmentControlButtons /></li>
                <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <GrNotes className="text-success  me-2 fs-3 " />
                    P3 <AssignmentControlButtons /></li>
            </ul>
        </li>
    </ul> </div>

