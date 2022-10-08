import { Link } from "react-router-dom";




function Router() {
  return (
   <>
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
        </nav>
   </>
  );
}

export default Router;
