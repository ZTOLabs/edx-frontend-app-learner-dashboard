import {
  ClipboardCheck,
  ClockStopwatch,
  File02,
  Lightning01,
} from '@untitledui/icons';
import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { cn } from 'shared/lib/utils';
import { CourseData } from 'shared/types/course';
import InsightItem, { InsightData } from './CardItem/card-item';
import CourseUpdateBanner from './CourseUpdateBanner/course-update-banner';

interface InsightProps {
  className?: string;
}

interface AppState {
  app: {
    courseData: Record<string, CourseData>;
  };
}

const Insight: React.FC<InsightProps> = ({
  className,
}) => {
  const courseData = useSelector((state: AppState) => state.app.courseData);
  const courses = Object.values(courseData || {});

  // TODO: Replace with actual initial state from backend
  const [isCourseUpdateBannerOpen, setIsCourseUpdateBannerOpen] = useState(true);

  const handleCloseCourseUpdateBanner = () => {
    setIsCourseUpdateBannerOpen(false);
  };

  // Calculate insights from actual course data
  const completedCourses = courses.filter(
    (course) => course.enrollment?.isPassing,
  ).length;

  // Ongoing courses: enrolled but not completed/passed
  const ongoingCourses = courses.filter(
    (course) => course.enrollment?.isEnrolled && !course.courseRun?.isArchived && !course.enrollment?.isPassing,
  ).length;

  const dynamicInsights: InsightData[] = useMemo(() => [
    {
      id: 'ongoing-courses',
      icon: <File02 className="tw-text-blueLight-600 tw-size-4" />,
      iconBg: 'tw-bg-blueLight-100',
      label: 'On Going Courses',
      value: ongoingCourses.toString(),
    },
    {
      id: 'completed-courses',
      icon: <ClipboardCheck className="tw-text-brand-600 tw-size-4" />,
      iconBg: 'tw-bg-brand-100',
      label: 'Completed',
      value: completedCourses.toString(),
    },
    {
      id: 'hours-learned',
      icon: <ClockStopwatch className="tw-text-teal-600 tw-size-4" />,
      iconBg: 'tw-bg-teal-100',
      label: 'Hours Learned',
      // TODO: Replace with actual hours learned
      value: '0',
    },
    {
      id: 'streak-days',
      icon: <Lightning01 className="tw-text-orange-600 tw-size-4" />,
      iconBg: 'tw-bg-orange-100',
      label: 'Streak(Days)',
      // TODO: Replace with actual streak days
      value: '0',
    },
  ], [completedCourses, ongoingCourses]);

  return (
    <div className="tw-flex tw-flex-col tw-gap-4">
      {isCourseUpdateBannerOpen && <CourseUpdateBanner onClose={handleCloseCourseUpdateBanner} />}
      <div className={cn('tw-grid tw-grid-cols-4 tw-gap-4', className)}>
        {dynamicInsights.map((insight) => (
          <InsightItem
            key={insight.id}
            insight={insight}
          />
        ))}
      </div>
    </div>
  );
};

export default Insight;
