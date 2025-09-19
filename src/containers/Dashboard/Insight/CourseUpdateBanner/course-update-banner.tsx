import React from 'react';
import { cn } from 'shared/lib/utils';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from 'messages';
import './course-update-banner.scss';
import { Button } from 'shared/Components/ui/button';
import { XClose } from '@untitledui/icons';
import clockImage from '../../../../assets/images/clock.png';

const FAKE_DATA = [
  {
    id: 1,
    content: 'The course <a href="#">“AI for Educators: From Literacy to Practical Application”</a> will end on September 10, 2025',
  },
  {
    id: 2,
    content: 'You have a Homework due on August 25, 2025 <a href="#">(Generative AI for Journalism)</a>',
  },
];

const CourseUpdateBanner = ({ onClose }: { onClose: () => void }) => {
  const { formatMessage } = useIntl();

  // TODO: Replace with actual data from backend when it's available
  // const { updates }= useCourseUpdateBannerData();

  return (
    <div className={cn(
      'tw-bg-[linear-gradient(0deg,#FFEBDB_0%,rgba(255,235,219,0)_100%)] course-update-banner',
      'tw-p-6 tw-pr-[128px] tw-rounded-2xl',
      'tw-flex tw-flex-col tw-gap-3',
      'tw-relative',
    )}
    >
      <div className="tw-absolute tw-top-0 tw-right-0 !tw-cursor-pointer">
        <Button variant="link" size="icon" className="tw-size-6 tw-border-none tw-bg-transparent" onClick={onClose}>
          <XClose />
        </Button>
      </div>
      <h3 className="tw-text-md tw-font-semibold tw-text-gray-900 tw-mb-0">
        {formatMessage(messages.courseUpdateBannerTitle)}
      </h3>
      <ul className="tw-flex tw-flex-col tw-gap-[6px] tw-m-0 tw-pl-6">
        {FAKE_DATA.map(item => (
          <li
            key={item.id}
            className="tw-text-sm tw-text-gray-700 !tw-mb-0 course-update-content"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        ))}
      </ul>
      <img src={clockImage} alt="Course update banner icon" className="tw-absolute tw-bottom-0 tw-right-0" />
    </div>
  );
};

export default CourseUpdateBanner;
