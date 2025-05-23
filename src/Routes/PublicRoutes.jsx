import Layout from "../Layout/Layout";
import {Routes, Route} from "react-router-dom";
import BackToTopBtn from "../Component/BackToTopBtn/BackToTopBtn";
import HomePage from "../Pages/Public/Home";
import Properties from "../Pages/Public/Properties";
import Contact from "../Pages/Public/Contact";
import Login from "../Pages/Public/Login";
import Signup from "../Pages/Public/Signup";
import BlogPage from "../Pages/Public/Blog";
import SingleBlogPage from "../Pages/Public/SingleBlogPage";
import AboutUsPage from "../Pages/Public/AboutUs";
const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/blogs/:id" element={<SingleBlogPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
            <BackToTopBtn />
        </Layout>
    );
};

export default PublicRoutes;
