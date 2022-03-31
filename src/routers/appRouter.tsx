import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { LoginScreen } from '../components/login/loginScreen';
import { DashboardRouter } from './dashboardRouter';
import { PrivateRoute } from './privateRoute';
import { PublicRoute } from './publicRoute';


export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />
                <Route path="/*" element={
                    <PrivateRoute>
                        <DashboardRouter />
                    </PrivateRoute>

                } />
            </Routes>
        </BrowserRouter>
    );
};
