import Layout from "../Layout/Layout";
import {Routes, Route} from "react-router-dom";
import BackToTopBtn from "../Component/BackToTopBtn/BackToTopBtn";
import HomePage from "../Pages/Public/Home";

const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
            <BackToTopBtn />
        </Layout>
    );
};

export default PublicRoutes;
