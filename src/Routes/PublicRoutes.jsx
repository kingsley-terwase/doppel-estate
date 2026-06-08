import Layout from "../Layout/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import BackToTopBtn from "../Component/BackToTopBtn/BackToTopBtn";
import HomePage from "../Pages/Public/Home";
import Properties from "../Pages/Public/Properties";
import Contact from "../Pages/Public/Contact";
import Login from "../Pages/Public/Login";
import Signup from "../Pages/Public/Signup";
import BlogPage from "../Pages/Public/Blog";
import SingleBlogPage from "../Pages/Public/SingleBlogPage";
import AboutUsPage from "../Pages/Public/AboutUs";
import PropertyDetail from "../Pages/Public/PropertyDetail";
import OtpVerification from '../Pages/Public/OtpVerification'
const PublicRoutes = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/blogs/:id" element={<SingleBlogPage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/verifyOtp" element={<OtpVerification />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/property/:id" element={<PropertyDetail />} />
            </Routes>
            <BackToTopBtn />
        </Layout>
    );
};

export default PublicRoutes;
