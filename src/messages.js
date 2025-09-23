import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
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
});

export default messages;
