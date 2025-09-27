import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  headintTitle: {
    id: 'learner-dash.headingTitle',
    description: 'Welcome message',
    defaultMessage: 'Welcome, {userName}!',
  },
  courseUpdateBannerTitle: {
    id: 'learner-dash.courseUpdateBannerTitle',
    description: 'Course update banner title',
    defaultMessage: 'Upcoming Deadlines',
  },
  loadingSR: {
    id: 'learner-dash.loadingSR',
    description: 'Page loading screen-reader text',
    defaultMessage: 'Loading...',
  },
  errorMessage: {
    id: 'learner-dash.error-page-message',
    defaultMessage: 'If you experience repeated failures, please email support at {supportEmail}',
    description: 'Error page message',
  },
  pageTitle: {
    id: 'learner-dash.title',
    description: 'Page title: Learner Home',
    defaultMessage: 'Learner Home',
  },
  profile: {
    id: 'learning.navigation.profile.label',
    defaultMessage: 'Profile',
    description: 'The accessible label for profile navigation',
  },
  logOut: {
    id: 'learning.navigation.logOut.label',
    defaultMessage: 'Log out',
    description: 'The accessible label for log out navigation',
  },
  home: {
    id: 'learning.navigation.home.label',
    defaultMessage: 'Home',
    description: 'The accessible label for home navigation',
  },
  courses: {
    id: 'learning.navigation.courses.label',
    defaultMessage: 'Courses',
    description: 'The accessible label for courses navigation',
  },
  discover: {
    id: 'learning.navigation.discover.label',
    defaultMessage: 'Discover',
    description: 'The accessible label for discover navigation',
  },
  ongoingCourses: {
    id: 'learner-dash.insight.ongoingCourses',
    defaultMessage: 'Ongoing courses',
    description: 'The accessible label for ongoing courses',
  },
  completedCourses: {
    id: 'learner-dash.insight.completedCourses',
    defaultMessage: 'Completed courses',
    description: 'The accessible label for completed courses',
  },
  hoursLearned: {
    id: 'learner-dash.insight.hoursLearned',
    defaultMessage: 'Hours learned',
    description: 'The accessible label for hours learned',
  },
  streakDays: {
    id: 'learner-dash.insight.streakDays',
    defaultMessage: 'Streak (days)',
    description: 'The accessible label for streak days',
  },
});

export default messages;
