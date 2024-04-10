import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import PageNotFound from "../PageNotFound/PageNotFound";

import Landing from "../Landing/Landing";

function Routing(): JSX.Element {

    return (

        <Routes>

            {/* ----------------- None-User / User Routes --------------------*/}

            {/* <Route path="/Landing" element={<Landing />} /> */}
            <Route path="/Home" element={<Home />} />

            <Route path="/" element={<Navigate to="/Landing" />} />
            <Route path="*" element={<PageNotFound />} />

        </Routes> 

    );
}

export default Routing;
