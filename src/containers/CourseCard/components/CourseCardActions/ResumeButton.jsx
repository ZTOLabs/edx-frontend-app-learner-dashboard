import React from 'react';
import PropTypes from 'prop-types';

import { useIntl } from '@edx/frontend-platform/i18n';

import track from 'tracking';
import { reduxHooks } from 'hooks';
import { ArrowUpRight } from '@untitledui/icons';
import { Icon, IconButtonWithTooltip } from '@openedx/paragon';
import { cn } from 'shared/lib/utils';
import useActionDisabledState from '../hooks';
import messages from './messages';

export const ResumeButton = ({ cardId }) => {
  const { formatMessage } = useIntl();
  const { resumeUrl } = reduxHooks.useCardCourseRunData(cardId);
  const execEdTrackingParam = reduxHooks.useCardExecEdTrackingParam(cardId);
  const { disableResumeCourse } = useActionDisabledState(cardId);

  const handleClick = reduxHooks.useTrackCourseEvent(
    track.course.enterCourseClicked,
    cardId,
    resumeUrl + execEdTrackingParam,
  );
  return (
    <IconButtonWithTooltip
      tooltipContent={formatMessage(messages.resume)}
      tooltipPlacement="top"
      src={ArrowUpRight}
      iconAs={Icon}
      iconClassNames="!tw-size-5"
      disabled={disableResumeCourse}
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
ResumeButton.propTypes = {
  cardId: PropTypes.string.isRequired,
};
export default ResumeButton;
