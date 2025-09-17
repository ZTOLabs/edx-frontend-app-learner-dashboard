import CoursesPanel from 'containers/CoursesPanel';
import hooks from 'containers/Dashboard/hooks';
import React from 'react';

const Courses = () => {
  hooks.useInitializeDashboard();
  return <div><CoursesPanel /></div>;
};
export default Courses;
