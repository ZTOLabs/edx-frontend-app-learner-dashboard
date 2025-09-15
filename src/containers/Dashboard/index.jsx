import React from 'react';

import { reduxHooks } from 'hooks';
import { RequestKeys } from 'data/constants/requests';
import CoursesPanel from 'containers/CoursesPanel';

import LoadingView from './LoadingView';
import DashboardLayout from './DashboardLayout';
import hooks from './hooks';
import './index.scss';

export const Dashboard = () => {
  hooks.useInitializeDashboard();
  const initIsPending = reduxHooks.useRequestIsPending(RequestKeys.initialize);

  return (
    <div id="dashboard-content" data-testid="dashboard-content" className="tw-h-full">
      {initIsPending
        ? (<LoadingView />)
        : (
          <DashboardLayout>
            <CoursesPanel isFeatured />
          </DashboardLayout>
        )}
    </div>
  );
};

export default Dashboard;
