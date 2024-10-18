import { Link, useLocation } from "react-router-dom";
export default function AccountNavigation() {
  const links = ["Signin","Signup","Profile"]
  const { pathname } = useLocation();
  return (
    
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link)=>(
        <Link to={`/Kanbas/Account/${link}`}
        className={`list-group-item border border-0
        ${pathname.includes(link) ? "active" : " text-danger"}`}> 
        {link} </Link>
      ))}
    </div>
    

);}

