import PropTypes from 'prop-types';

import './index.scss';
import { useCardCourseRunData } from 'data/redux/hooks';
import { useIntl } from '@edx/frontend-platform/i18n';
import { formatToDate } from '../../../../utils';
import messages from './messages';

export const CourseCardDetails = ({ cardId }) => {
  const { formatMessage } = useIntl();
  const { endDate } = useCardCourseRunData(cardId);
  const formattedEndDate = endDate ? formatToDate(endDate, 'DD/MM/YYYY') : 'N/A';

  return (
    <span className="tw-text-sm tw-font-normal tw-text-gray-500 tw-w-full tw-truncate tw-line-clamp-1 hover:tw-no-underline" data-testid="CourseCardDetails">
      {formatMessage(messages.endDate, { endDate: formattedEndDate })}
    </span>
  );
};

CourseCardDetails.propTypes = {
  cardId: PropTypes.string.isRequired,
};

CourseCardDetails.defaultProps = {};

export default CourseCardDetails;
