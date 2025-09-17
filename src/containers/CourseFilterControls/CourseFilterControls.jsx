import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from '@edx/frontend-platform/i18n';

import {
  Button,
  Form,
  Icon,
  IconButton,
  ModalPopup,
  useToggle,
} from '@openedx/paragon';

import { reduxHooks } from 'hooks';

import { cn } from 'shared/lib/utils';
import { ChevronDown, FilterLines } from '@untitledui/icons';
import FilterForm from './components/FilterForm';
import SortForm from './components/SortForm';
import useCourseFilterControlsData from './hooks';
import messages from './messages';

import './index.scss';

export const CourseFilterControls = ({
  sortBy,
  setSortBy,
  filters,
}) => {
  const { formatMessage } = useIntl();

  const SortOptions = useMemo(() => [
    {
      label: formatMessage(messages.sortLastEnrolled),
      value: 'enrolled',
    },
    {
      label: formatMessage(messages.sortTitle),
      value: 'title',
    },
  ], [formatMessage]);

  const hasCourses = reduxHooks.useHasCourses();
  const {
    isOpen,
    open,
    close,
    target,
    setTarget,
    targetSort,
    setTargetSort,
    handleFilterChange,
    handleSortChange,
  } = useCourseFilterControlsData({
    filters,
    setSortBy,
  });
  const [isOpenSort, toggleOpenSort, toggleCloseSort] = useToggle(false);

  return (
    <div className="tw-flex tw-flex-row tw-gap-3">
      <div id="course-filter-controls-sort-button">
        <Button
          ref={setTargetSort}
          variant="outline-primary"
          iconAfter={ChevronDown}
          onClick={toggleOpenSort}
          disabled={!hasCourses}
          className={cn(
            'tw-bg-white tw-rounded-[100px] tw-px-[14px] tw-py-[10px]',
            'tw-border tw-border-solid tw-border-gray-300',
            'tw-shadow-xs',
            'tw-text-gray-700 tw-text-sm tw-font-semibold',
            'after:tw-hidden',
          )}
        >
          {SortOptions.find(option => option.value === sortBy)?.label}
        </Button>
        <Form>
          <ModalPopup
            positionRef={targetSort}
            isOpen={isOpenSort}
            onClose={toggleCloseSort}
            placement="bottom-end"
          >
            <div
              id="course-filter-controls-card"
              className="bg-white p-3 rounded shadow d-flex flex-row"
            >
              <div className="filter-form-col text-left m-1">
                <SortForm {...{ sortBy, handleSortChange }} />
              </div>
            </div>
          </ModalPopup>
        </Form>
      </div>

      <div id="course-filter-controls-filter-button">
        <IconButton
          className={cn(
            'tw-bg-white tw-rounded-[100px] tw-px-[14px] tw-py-[10px]',
            'tw-border tw-border-solid tw-border-gray-300',
            'tw-shadow-xs',
            'tw-text-gray-700 tw-text-sm tw-font-semibold',
            'after:tw-hidden',
            '!tw-w-10 !tw-h-10',
          )}
          src={FilterLines}
          ref={setTarget}
          iconAs={Icon}
          onClick={open}
          variant="outline-primary"
        />
        <Form>
          <ModalPopup
            positionRef={target}
            isOpen={isOpen}
            onClose={close}
            placement="bottom-end"
          >
            <div
              id="course-filter-controls-card"
              className="bg-white p-3 rounded shadow d-flex flex-row"
            >
              <div className="filter-form-col">
                <FilterForm {...{ filters, handleFilterChange }} />
              </div>
            </div>
          </ModalPopup>
        </Form>
      </div>
    </div>
  );
};
CourseFilterControls.propTypes = {
  sortBy: PropTypes.string.isRequired,
  setSortBy: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CourseFilterControls;
