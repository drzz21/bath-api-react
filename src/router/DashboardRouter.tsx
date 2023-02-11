import { Routes,Route,Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { ProfileSettings } from '../pages/ProfileSettings';

export const DashboardRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/settings" element={<ProfileSettings />} />

			<Route path="/*" element={<Navigate to="/" />} />
		</Routes>
	);
};