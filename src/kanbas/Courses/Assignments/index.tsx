import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import WeekControlButtons from "./WeekControlButtons";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { GrNotes } from "react-icons/gr";
import { Link } from "react-router-dom";
export default function Assignments() {
    return (
        <div id="wd-assignments">
            <AssignmentControls/><br /><br /><br /><br />
            
            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                    <BsGripVertical className="me-2 fs-3" />
                    
                    ASSIGNMENTS
                    <WeekControlButtons/>
                    </div>
                <ul className="wd-lessons list-group rounded-0">
                    <li className="wd-lesson list-group-item p-3 ps-1">
                        <Link to ="/Kanbas/Courses/1234/Assignments/123"
                            className=" d-flex flex-row me-2 text-black bg-white">
                        <BsGripVertical className=" fs-3" />
                        <GrNotes className=" text-success fs-3" />
                        <div > A1 
                            <br/>
                            <span className="wd-fg-color-red">Multiple Modules</span> | Not available until MAy 6 at 12:00am | Due May  13 at 11:59pm| 100 pts
                        </div>
                    
                    <AssignmentControlButtons /></Link></li>
                    <li className="wd-lesson list-group-item p-3 ps-1">
                    <Link to ="/Kanbas/Courses/1234/Assignments/123"
                            className=" d-flex flex-row me-2 text-black bg-white">
                        <BsGripVertical className=" fs-3" />
                        <GrNotes className=" text-success fs-3" />
                        <div> A2
                            <br/>
                            <span className="wd-fg-color-red">Multiple Modules</span> | Not available until MAy 6 at 12:00am | Due May  13 at 11:59pm| 100 pts
                        </div>
                  
                    <AssignmentControlButtons /></Link></li>
                    <li className="wd-lesson list-group-item p-3 ps-1">
                    <Link to ="/Kanbas/Courses/1234/Assignments/123"
                            className=" d-flex flex-row me-2 text-black bg-white">
                        <BsGripVertical className=" fs-3" />
                        <GrNotes className=" text-success fs-3" />
                        <div> A3 
                            <br/>
                            <span className="wd-fg-color-red">Multiple Modules</span> | Not available until MAy 6 at 12:00am | Due May  13 at 11:59pm| 100 pts
                        </div>
                   
                    <AssignmentControlButtons /></Link></li>
                </ul>
                </li>
                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary"> 
                    <BsGripVertical className="me-2 fs-3" />
                    Projects <WeekControlButtons/></div>
                <ul className="wd-lessons list-group rounded-0">
                    <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />
                    <GrNotes className="text-success  me-2 fs-3 "/>
                    P1 <AssignmentControlButtons /></li>
                    <li className="wd-lesson list-group-item p-3 ps-1"> 
                    <BsGripVertical className="me-2 fs-3" />
                    <GrNotes className="text-success  me-2 fs-3 "/>
                    P2 <AssignmentControlButtons /></li>
                    <li className="wd-lesson list-group-item p-3 ps-1"> 
                    <BsGripVertical className="me-2 fs-3" />
                    <GrNotes className="text-success  me-2 fs-3 "/>
                    P3 <AssignmentControlButtons /></li>
                </ul>
                </li>
            </ul> </div>
            
            

  );}
  
  