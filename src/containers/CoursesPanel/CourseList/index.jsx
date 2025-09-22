import React from 'react';
import PropTypes from 'prop-types';

import { Pagination } from '@openedx/paragon';
import {
  ActiveCourseFilters,
} from 'containers/CourseFilterControls';
import CourseCard from 'containers/CourseCard';

import { useIsCollapsed } from './hooks';

const progressBarMapping = {
  'card-0': '30',
  'card-1': '60',
  'card-2': '90',
  'card-3': '100',
};

export const CourseList = ({ courseListData, maxItem }) => {
  const {
    filterOptions, setPageNumber, numPages, showFilters, visibleList,
  } = courseListData;
  const isCollapsed = useIsCollapsed();

  const courseList = visibleList.visibleList || visibleList;

  const limitedCourseList = maxItem ? courseList.slice(0, maxItem) : courseList;

  const visibleListWithProgressBar = limitedCourseList.map(({ cardId }) => ({
    cardId,
    progressBar: progressBarMapping[cardId],
  }));

  return (
    <>
      {showFilters && (
        <div id="course-list-active-filters-container">
          <ActiveCourseFilters {...filterOptions} />
        </div>
      )}
      <div className="tw-grid tw-grid-cols-3 tw-gap-4">
        {visibleListWithProgressBar.map(({ cardId, progressBar }) => (
          <CourseCard key={cardId} cardId={cardId} progressBar={progressBar} />
        ))}
        {numPages > 1 && (
          <Pagination
            variant={isCollapsed ? 'reduced' : 'secondary'}
            paginationLabel="Course List"
            className="mx-auto mb-2"
            pageCount={numPages}
            onPageSelect={setPageNumber}
          />
        )}
      </div>
    </>
  );
};

export const courseListDataShape = PropTypes.shape({
  showFilters: PropTypes.bool.isRequired,
  visibleList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filterOptions: PropTypes.shape().isRequired,
  numPages: PropTypes.number.isRequired,
  setPageNumber: PropTypes.func.isRequired,
});

CourseList.propTypes = {
  courseListData: courseListDataShape,
  maxItem: PropTypes.number,
};

export default CourseList;
