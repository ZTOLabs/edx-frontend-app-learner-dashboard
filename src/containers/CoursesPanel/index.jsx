import React from 'react';

import { useIntl } from '@edx/frontend-platform/i18n';

import { reduxHooks } from 'hooks';
import CourseListSlot from 'plugin-slots/CourseListSlot';
import NoCoursesViewSlot from 'plugin-slots/NoCoursesViewSlot';

import StatefulButtonWrapper from 'shared/Components/StatefulButtonWrapper';
import { useNavigate } from 'react-router';
import CourseFilterControls from 'containers/CourseFilterControls';
import SearchFieldWrapper from 'shared/Components/SearchFieldWrapper';
import PropTypes from 'prop-types';
import { useCourseListData } from './hooks';

import messages from './messages';

import './index.scss';

/**
 * Renders the list of CourseCards, as well as the controls (CourseFilterControls) for modifying the list.
 * Also houses the NoCoursesView to display if the user hasn't enrolled in any courses.
 * @returns List of courses as CourseCards or empty state
*/
export const CoursesPanel = ({ isFeatured = false }) => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();
  const hasCourses = reduxHooks.useHasCourses();
  const courseListData = useCourseListData();

  if (isFeatured) {
    return (
      <div className="tw-flex tw-flex-col tw-gap-6">
        <div className="tw-flex tw-justify-between tw-items-center">
          <h3 className="tw-font-semibold tw-text-lg tw-text-gray-900 tw-m-0">
            {formatMessage(messages.myCourses)}
          </h3>
          <div className="tw-flex tw-gap-2">
            <StatefulButtonWrapper
              className="!tw-w-auto"
              variant="link"
              size="sm"
              disabled={false}
              onClick={() => navigate('/courses')}
              labels={{ default: formatMessage(messages.allCoursesBtnText) }}
            />
          </div>
        </div>
        {hasCourses ? <CourseListSlot courseListData={courseListData} /> : <NoCoursesViewSlot />}
      </div>
    );
  }

  return (
    <div className="tw-flex tw-flex-col tw-gap-8">
      <h3 className="tw-font-semibold tw-text-2xl tw-text-gray-900 tw-m-0">
        {formatMessage(messages.myCourses)}
      </h3>
      <div className="tw-flex tw-justify-between tw-items-center">
        {hasCourses && (
        <div className="tw-flex tw-justify-center tw-w-[398px]">
          <SearchFieldWrapper
            value={courseListData.searchOptions.searchTerm}
            onChange={courseListData.searchOptions.setSearchTerm}
            onSubmit={courseListData.searchOptions.setSearchTerm}
            className="tw-max-w-md"
          />
        </div>
        )}
        <div className="tw-flex tw-gap-2">
          <div className="course-filter-controls-container">
            <CourseFilterControls {...courseListData.filterOptions} />
          </div>
        </div>
      </div>
      {hasCourses ? <CourseListSlot courseListData={courseListData} /> : <NoCoursesViewSlot />}
    </div>
  );
};

CoursesPanel.propTypes = {
  isFeatured: PropTypes.bool,
};

export default CoursesPanel;
