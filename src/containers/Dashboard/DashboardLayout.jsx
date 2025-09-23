import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getAuthenticatedUser } from '@edx/frontend-platform/auth';

import Insight from './Insight';

import messages from '../../messages';

export const columnConfig = {
  courseList: {
    withSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 8, offset: 0 },
    },
    noSidebar: {
      lg: { span: 12, offset: 0 },
      xl: { span: 12, offset: 0 },
    },
  },
  sidebar: {
    lg: { span: 12, offset: 0 },
    xl: { span: 4, offset: 0 },
  },
};

export const DashboardLayout = ({ children }) => {
  const intl = useIntl();
  const { username } = getAuthenticatedUser();

  return (
    <Container fluid size="xl" className="!tw-px-0 tw-flex tw-flex-col tw-gap-8 tw-h-full">
      <SubHeader title={intl.formatMessage(messages.headintTitle, { userName: username })} />
      <Insight />
      <div className="tw-flex-1">
        {children}
      </div>
    </Container>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const SubHeader = ({ title }) => (
  <header className="sub-header">
    <h2 className="tw-mb-0 tw-font-medium tw-text-4xl tw-leading-[44px] tw-text-gray-900 tw-tracking-[-0.72px]">
      {title}
    </h2>
  </header>
);

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DashboardLayout;
