import { ProgressBar } from '@openedx/paragon';
import { useIntl } from '@edx/frontend-platform/i18n';
import React from 'react';
import { cn } from 'shared/lib/utils';
import messages from '../../messages';

const CourseProgressBar = ({ progressBar }: { progressBar: string }) => {
  const { formatMessage } = useIntl();
  // TODO: remove this once we have the progress from the API
  // const { progress } = reduxHooks.useCardCourseRunData(cardId);
  const progress = progressBar;
  return (
    <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-between">
      <span className="tw-font-medium tw-text-xs tw-text-gray-700 tw-block">
        {formatMessage(messages.progress, { progress })}
      </span>
      <ProgressBar
        now={progress}
        className={cn(
          'tw-h-[6px] tw-w-full',
          'tw-border-none tw-bg-brand-100 tw-rounded-[100px]',
        )}
      />
    </div>
  );
};

export default CourseProgressBar;
