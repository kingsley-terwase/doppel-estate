import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardRoutes from "./Routes/DashboardRoutes";
import AppThemeProvider from "./Contexts/AppThemeProvider";
import PublicRoutes from "./Routes/PublicRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <AppThemeProvider >
            <Router>

                {/* ToastContainer sits here — outside Routes so it persists across
                every page/route change without remounting */}
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    pauseOnHover
                />

                <Routes>
                    <Route path="/*" element={<PublicRoutes />} />
                    <Route path="/dashboard/*" element={<DashboardRoutes />} />
                </Routes>
            </Router>
        </AppThemeProvider>
    );
}

export default App;
