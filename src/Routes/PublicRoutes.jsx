import Layout from "../Layout/Layout";
import {Routes, Route} from "react-router-dom";
import BackToTopBtn from "../Component/BackToTopBtn/BackToTopBtn";
import HomePage from "../Pages/Public/Home";
import Properties from "../Pages/Public/Properties";
import Contact from "../Pages/Public/Contact";
import Login from "../Pages/Public/Login";
import Signup from "../Pages/Public/Signup";

const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <BackToTopBtn />
        </Layout>
    );
};

export default PublicRoutes;
