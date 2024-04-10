import Footer from "../Footer/Footer";
import Routing from "../Routing/Routing";
import "./Layout.css";


function Layout(): JSX.Element {

    return (
        
        <div className="Layout">

            <div className="mainContent">
                
                <Routing />
                
            </div>

            <Footer />

        </div>
    );
}

export default Layout;
