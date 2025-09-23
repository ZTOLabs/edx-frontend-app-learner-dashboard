import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';

import track from 'tracking';
import { reduxHooks } from 'hooks';
import { Icon, IconButtonWithTooltip } from '@openedx/paragon';
import { cn } from 'shared/lib/utils';
import { ArrowUpRight } from '@untitledui/icons';
import useActionDisabledState from '../hooks';
import messages from './messages';

export const ViewCourseButton = ({ cardId }) => {
  const { formatMessage } = useIntl();
  const { homeUrl } = reduxHooks.useCardCourseRunData(cardId);
  const { disableViewCourse } = useActionDisabledState(cardId);

  const handleClick = reduxHooks.useTrackCourseEvent(
    track.course.enterCourseClicked,
    cardId,
    homeUrl,
  );
  return (
    <IconButtonWithTooltip
      tooltipContent={formatMessage(messages.viewCourse)}
      tooltipPlacement="bottom"
      src={ArrowUpRight}
      iconAs={Icon}
      iconClassNames="!tw-size-5"
      disabled={disableViewCourse}
      onClick={handleClick}
      className={
        cn(
          '!tw-size-8 tw-w-8',
          'tw-border tw-border-solid tw-border-gray-300',
          'tw-rounded-[8px]',
          'hover:!tw-bg-brand-600 hover:!tw-text-white',
          'focus:!tw-bg-transparent',
          'active:!tw-border-transparent',
        )
      }
    />
  );
};
ViewCourseButton.propTypes = {
  cardId: PropTypes.string.isRequired,
};
export default ViewCourseButton;
