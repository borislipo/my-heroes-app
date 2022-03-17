import { Route, BrowserRouter, Routes } from 'react-router-dom';

import { LoginScreen } from '../components/login/loginScreen';
import { DashboardRouter } from './dashboardRouter';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<LoginScreen />} />
                <Route path="/*" element={<DashboardRouter />} />
            </Routes>
        </BrowserRouter>
    );
};
