export interface CourseData {
  courseRun?: {
    isArchived?: boolean;
  };
  enrollment?: {
    isEnrolled?: boolean;
    hasStarted?: boolean;
    isPassing?: boolean;
  };
  analytics?: {
    timeSpent?: number; // Hours spent learning
    sessionsCount?: number;
    lastActivity?: string;
  };
  progress?: {
    timeSpent?: number; // Alternative location for time data
    percentage?: number;
    completedSections?: number;
  };
}
