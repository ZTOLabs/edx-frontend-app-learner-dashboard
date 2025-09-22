import { ProgressBar } from '@openedx/paragon';
import React from 'react';
import { cn } from 'shared/lib/utils';

const CourseProgressBar = () => {
  // TODO: remove this once we have the progress from the API
  // const { progress } = reduxHooks.useCardCourseRunData(cardId);
  const progress = 30;
  return (
    <div className="tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-between">
      <span className="tw-font-medium tw-text-xs tw-text-gray-700 tw-block">
        Progress: {progress}%
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
