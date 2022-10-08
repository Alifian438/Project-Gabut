import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/home";
import Detail from "../pages/detail";
import Login from "../pages/login";
import Nav from "./nav";
import Post from "../component/Post";
import Product from "../component/Product";



function Router() {
  return (
   <>
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:id" element={<Detail/>}>
                <Route path="post" element={<Post/>}/>
                <Route path="product" element={<Product/>}/>
            </Route>
            <Route path="/login" element={<Login/>}/>

     
        </Routes>
      
      </BrowserRouter>
   </>
  );
}

export default Router;
