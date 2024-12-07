import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (

    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link to={`/Kanbas/Account/${link}`}
          className={`list-group-item border border-0
        ${pathname.includes(link) ? "active" : " text-danger"}`}>
          {link} </Link>
      ))}
      {currentUser  &&  currentUser.role === "FACULTY" &&(
        <Link to={`/Kanbas/Account/Users`} className={`list-group-item border border-0
          ${pathname.includes("Users") ? "active" : " text-danger"}`}> Users </Link>)}

    </div>


  );
}

