import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import DashboardRoutes from "./Routes/DashboardRoutes";
import AppThemeProvider from "./Contexts/AppThemeProvider";
import PublicRoutes from "./Routes/PublicRoutes";

function App() {
    return (
        <AppThemeProvider >
            <Router>
                <Routes>
                    <Route path="/*" element={<PublicRoutes />} />
                    <Route path="/dashboard/*" element={<DashboardRoutes />} />
                </Routes>
            </Router>
        </AppThemeProvider>
    );
}

export default App;
