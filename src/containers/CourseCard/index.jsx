import React from 'react';
import PropTypes from 'prop-types';

import { Card } from '@openedx/paragon';

import { cn } from 'shared/lib/utils';
import CourseCardImage from './components/CourseCardImage';
import CourseCardMenu from './components/CourseCardMenu';
import CourseCardActions from './components/CourseCardActions';
import CourseCardDetails from './components/CourseCardDetails';
import CourseCardTitle from './components/CourseCardTitle';

import './CourseCard.scss';

export const CourseCard = ({
  cardId,
}) => (
  <div id={cardId} data-testid="CourseCard">
    <Card className={cn(
      'tw-bg-white/70 tw-border tw-border-solid tw-border-white tw-h-full',
      'tw-rounded-2xl tw-p-2 tw-pb-4',
      'tw-flex tw-flex-col tw-gap-4',
      'tw-shadow-none',
    )}
    >
      <CourseCardImage cardId={cardId} orientation="horizontal" />

      <Card.Header
        size="sm"
        className="!tw-pl-3 !tw-p-0 tw-flex tw-flex-row tw-gap-2"
        title={<CourseCardTitle cardId={cardId} />}
        subtitle={
          <CourseCardDetails cardId={cardId} />
              }
        actions={<CourseCardMenu cardId={cardId} />}
      />
      <div className="tw-flex tw-flex-row tw-gap-4">
        {/* <CourseCardBanners cardId={cardId} /> */}
        {/* <CourseCardActions cardId={cardId} /> */}
      </div>
    </Card>
  </div>
);
CourseCard.propTypes = {
  cardId: PropTypes.string.isRequired,
};

export default CourseCard;
