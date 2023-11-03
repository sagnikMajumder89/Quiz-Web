import Header from "./components/boilerplate/Header"
import Footer from "./components/boilerplate/Footer"
import { Outlet } from "react-router-dom"
export default function Layout() {

return (<>

    <Header></Header>
    <Outlet />
    <Footer></Footer>

</>)
}