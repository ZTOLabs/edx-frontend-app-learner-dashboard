import React from 'react';

interface ClockStopwatchSolidIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ClockStopwatchSolidIcon: React.FC<ClockStopwatchSolidIconProps> = ({
  size = 20,
  ...props
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 1C9.44772 1 9 1.44772 9 2C9 2.55228 9.44772 3 10 3H11V4.052C6.22334 4.5517 2.5 8.59103 2.5 13.5C2.5 18.7467 6.75329 23 12 23C17.2467 23 21.5 18.7467 21.5 13.5C21.5 8.59103 17.7767 4.5517 13 4.052V3H14C14.5523 3 15 2.55228 15 2C15 1.44772 14.5523 1 14 1H10ZM13 9.5C13 8.94772 12.5523 8.5 12 8.5C11.4477 8.5 11 8.94772 11 9.5V13.5C11 13.8513 11.1843 14.1768 11.4855 14.3575L13.9855 15.8575C14.4591 16.1416 15.0733 15.9881 15.3575 15.5145C15.6416 15.0409 15.4881 14.4267 15.0145 14.1425L13 12.9338V9.5Z"
      fill="currentColor"
    />
    <path
      d="M18.122 3.3847C18.5125 2.9942 19.1457 2.9942 19.5362 3.3847L21.0362 4.8847C21.4267 5.2752 21.4267 5.9084 21.0362 6.2989 20.6457 6.6894 20.0125 6.6894 19.622 6.2989L18.122 4.7989C17.7315 4.4084 17.7315 3.7752 18.122 3.3847ZM5.878 3.3847C6.2685 3.7752 6.2685 4.4084 5.878 4.7989L4.378 6.2989C3.9875 6.6894 3.3543 6.6894 2.9638 6.2989 2.5733 5.9084 2.5733 5.2752 2.9638 4.8847L4.4638 3.3847C4.8543 2.9942 5.4875 2.9942 5.878 3.3847Z"
      fill="currentColor"
    />
  </svg>
);

export default ClockStopwatchSolidIcon;
