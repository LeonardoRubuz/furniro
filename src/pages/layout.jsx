import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function Layout() {
    return ( 
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
     );
}

export default Layout;