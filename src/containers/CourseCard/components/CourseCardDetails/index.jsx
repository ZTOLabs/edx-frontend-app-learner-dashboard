import React from 'react';
import PropTypes from 'prop-types';

import useCardDetailsData from './hooks';
import './index.scss';

export const CourseCardDetails = ({ cardId }) => {
  const {
    accessMessage,
    courseNumber,
  } = useCardDetailsData({ cardId });

  return (
    <span className="tw-text-sm tw-font-normal tw-text-gray-500 tw-w-full tw-truncate tw-line-clamp-1 hover:tw-no-underline" data-testid="CourseCardDetails">
      {accessMessage || courseNumber}
    </span>
  );
};

CourseCardDetails.propTypes = {
  cardId: PropTypes.string.isRequired,
};

CourseCardDetails.defaultProps = {};

export default CourseCardDetails;
