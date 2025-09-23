import React from 'react';
import PropTypes from 'prop-types';

import track from 'tracking';
import { reduxHooks } from 'hooks';
import { Link } from 'react-router-dom';
import useActionDisabledState from './hooks';

const { courseTitleClicked } = track.course;

export const CourseCardTitle = ({ cardId }) => {
  const { courseName } = reduxHooks.useCardCourseData(cardId);
  const { homeUrl } = reduxHooks.useCardCourseRunData(cardId);
  const handleTitleClicked = reduxHooks.useTrackCourseEvent(
    courseTitleClicked,
    cardId,
    homeUrl,
  );
  const { disableCourseTitle } = useActionDisabledState(cardId);

  return (disableCourseTitle ? (
    <span className="tw-text-sm tw-font-semibold tw-text-gray-900 tw-w-fit tw-truncate tw-line-clamp-1 hover:tw-no-underline tw-max-w-full" data-testid="CourseCardTitle">{courseName}</span>
  ) : (
    <Link
      className="tw-text-sm tw-font-semibold tw-text-gray-900 tw-w-fit tw-truncate tw-line-clamp-1 hover:tw-no-underline tw-max-w-full"
      to={homeUrl}
      onClick={handleTitleClicked}
    >
      {courseName}
    </Link>
  ));
};

CourseCardTitle.propTypes = {
  cardId: PropTypes.string.isRequired,
};

CourseCardTitle.defaultProps = {};

export default CourseCardTitle;
