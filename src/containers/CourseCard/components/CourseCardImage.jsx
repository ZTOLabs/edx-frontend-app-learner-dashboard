import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';

import { Badge } from '@openedx/paragon';

import track from 'tracking';
import { reduxHooks } from 'hooks';
import verifiedRibbon from 'assets/verified-ribbon.png';
import { cn } from 'shared/lib/utils';
import useActionDisabledState from './hooks';

import messages from '../messages';
import { getCourseRunFromCourseId } from '../../../utils';

const { courseImageClicked } = track.course;

const fallbackImageSrc = 'https://placehold.co/600x400';

export const CourseCardImage = ({ cardId }) => {
  const { formatMessage } = useIntl();
  const { bannerImgSrc } = reduxHooks.useCardCourseData(cardId);
  const { name: providerName } = reduxHooks.useCardProviderData(cardId);
  const { homeUrl, courseId } = reduxHooks.useCardCourseRunData(cardId);
  const courseRun = getCourseRunFromCourseId(courseId);

  const { isVerified } = reduxHooks.useCardEnrollmentData(cardId);
  const { disableCourseTitle } = useActionDisabledState(cardId);
  const handleImageClicked = reduxHooks.useTrackCourseEvent(courseImageClicked, cardId, homeUrl);

  const [imageError, setImageError] = useState(false);

  const imageSrc = useMemo(
    () => (imageError || !bannerImgSrc ? fallbackImageSrc : bannerImgSrc),
    [imageError, bannerImgSrc],
  );

  const badges = [providerName, courseRun].filter(Boolean);

  const image = (
    <>
      <img
          // object-fit: cover ensures the image covers the entire container while maintaining aspect ratio
        className="tw-w-full tw-h-full tw-object-cover"
        src={imageSrc}
        alt={formatMessage(messages.bannerAlt)}
        onError={() => {
          setImageError(true);
        }}
      />
      {
        isVerified && (
          <span
            className="course-card-verify-ribbon-container"
            title={formatMessage(messages.verifiedHoverDescription)}
          >
            <Badge as="div" variant="success" className="w-100">
              {formatMessage(messages.verifiedBanner)}
            </Badge>
            <img src={verifiedRibbon} alt={formatMessage(messages.verifiedBannerRibbonAlt)} />
          </span>
        )
      }
    </>
  );
  return (
    <>
      {
        disableCourseTitle
          ? (<div className="tw-h-[144px] tw-w-full tw-rounded-[8px] tw-relative tw-overflow-hidden tw-flex tw-items-center tw-justify-center">{image}</div>)
          : (
            <a
              className="tw-h-[144px] tw-w-full tw-rounded-[8px] tw-relative tw-overflow-hidden tw-flex tw-items-center tw-justify-center"
              href={homeUrl}
              onClick={handleImageClicked}
              tabIndex="-1"
            >
              {image}
            </a>
          )
      }
      <BadgesList badges={badges} />
    </>
  );
};

CourseCardImage.defaultProps = {};

CourseCardImage.propTypes = {
  cardId: PropTypes.string.isRequired,
};

const BadgesList = ({ badges }) => (
  <div className="tw-absolute tw-top-0 tw-left-0 tw-p-5 tw-flex tw-flex-row tw-gap-1">
    {badges.map((badge) => (
      <div className={cn(
        'tw-bg-[#101828] tw-bg-opacity-60 tw-px-[6px] tw-py-[2px] tw-rounded-[6px]',
        'tw-backdrop-blur-[8px]',
      )}
      >
        <span className="tw-text-gray-200 tw-font-medium tw-text-xs tw-truncate tw-line-clamp-1">{badge}</span>
      </div>
    ))}
  </div>
);

BadgesList.propTypes = {
  badges: PropTypes.arrayOf(PropTypes.string).isRequired,
};

BadgesList.defaultProps = {};

export default CourseCardImage;
