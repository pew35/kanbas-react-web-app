import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlusLg } from "react-icons/bs";
export default function WeekControlButtons() {
  return (
    <div className="float-end">
      <div className="flex-container">
      <div className="form-control rounded-pill ">40% of Total</div>
      <BsPlusLg/>
      <IoEllipsisVertical className="fs-4" />
      </div>
    </div>
);}