import { useLocation } from "react-router-dom";
import HeaderPage from "../Component/Header";
import FooterPage from "../Component/Footer";
import ScrollToTop from "../Component/ScrollToTop/ScrollToTop";


function Layout({ children }) {
  const location = useLocation();

  const noLayoutRoutes = ["/login", "/verify-email", "/sign-up", "/otp"];

  const hideLayout = noLayoutRoutes.includes(location.pathname);
  return (
    <>
      <ScrollToTop />
      {!hideLayout && <HeaderPage />}
      {children}
      {!hideLayout && <FooterPage />}
    </>
  );
}

export default Layout;
