import { cn } from 'shared/lib/utils';

export interface InsightData {
  id: string;
  icon: React.ReactNode;
  iconBg: string;
  label: string;
  value: string;
}

interface InsightItemProps {
  insight: InsightData;
  className?: string;
}

const InsightItem: React.FC<InsightItemProps> = ({
  insight,
  className,
}: InsightItemProps) => {
  const {
    icon, label, value, iconBg,
  } = insight;

  return (
    <div
      className={cn(
        'tw-flex tw-flex-col tw-gap-4',
        'tw-rounded-2xl tw-px-6 tw-py-4',
        'tw-bg-white',
        className,
      )}
    >
      <div className={cn(
        'tw-flex tw-items-center tw-justify-center',
        'tw-rounded-[100px] tw-w-8 tw-h-8',
        iconBg,
      )}
      >
        {icon}
      </div>
      <div className="tw-flex tw-flex-col tw-gap-2">
        <span className="tw-text-sm tw-font-normal tw-text-gray-700">
          {label}
        </span>
        <span className="tw-text-xl tw-font-semibold tw-text-gray-900">
          {value}
        </span>
      </div>
    </div>
  );
};

export default InsightItem;
