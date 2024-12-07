import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import WeekControlButtons from "./WeekControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GrNotes } from "react-icons/gr";
import { Link, useLocation, useParams } from "react-router-dom";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import * as assignmentClient from "./client";
import * as coursesClient from "../client";
import { format } from 'date-fns';
import {
    setAssignments,
    deleteAssignment,
} from "./reducer";
import { FaTrash } from "react-icons/fa";
import DeleteDialog from "./DeleteDialog";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = useSelector(
        (state: any) => state.assignmentsReducer.assignments
    );
    const dispatch = useDispatch();
    const fetchAssignments = async () => {
        const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };
    useEffect(() => {
        fetchAssignments();
    }, []);


    const removeAssignment = async (assignmentId: string) => {
        console.log("removeAssignment");
        console.log(assignmentId);
        await assignmentClient.deleteAssignment(assignmentId);
        dispatch(deleteAssignment(assignmentId));
    };
    const date = (date: string) =>{
        if (date === null) return "NALL";
        return format(new Date(date), 'MMMM do h:mm a');
    }

   
    return (
        <div id="wd-assignments">
            <AssignmentControls cid={cid} />
            <br />
            <br />
            <br />
            <br />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS
                        <WeekControlButtons />
                    </div>
                    {assignments && (
                        <ul className="list-group rounded-0">
                            {assignments
                                .filter(
                                    (assignment: any) =>
                                        assignment.course === cid
                                )
                                .map((assignment: any) => (
                                    <li className=" list-group-item p-3 ps-1">
                                        <div className="row">
                                            <div
                                                className="col-auto"
                                                style={{ margin: "auto" }}
                                            >
                                                <BsGripVertical
                                                    style={{
                                                        verticalAlign: "middle",
                                                        marginRight: "10px",
                                                    }}
                                                />
                                                <GrNotes className=" text-success fs-3" />
                                            </div>
                                            <div className="col wd-fg-color-gray ps-0 ms-2">
                                                <Link
                                                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                                                    className=" nav-link d-flex flex-row me-2 text-black bg-white"
                                                >
                                                    {assignment.title}
                                                </Link>
                                                <span className="wd-fg-color-red">
                                                    Multiple Modules
                                                </span>
                                                {` | Due ${date(assignment.due)} | ${assignment.points} pts`}
                                            </div>
                                            <div
                                                className="col-auto"
                                                style={{ margin: "auto" }}
                                            >
                                                <AssignmentControlButtons />
                                                <FaTrash
                                                    className="text-danger me-3 "
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#delete-modal-${assignment._id}`}
                                                />
                                            </div>
                                        </div>
                                        <DeleteDialog
                                            dialogTitle="Are you sure to delete："
                                            assignmentName={assignment.title}
                                            assignmentId={assignment._id}
                                            deleteAssignment={(assignmentID) =>
                                                removeAssignment(assignmentID)
                                            }
                                        />
                                    </li>
                                ))}
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
}
