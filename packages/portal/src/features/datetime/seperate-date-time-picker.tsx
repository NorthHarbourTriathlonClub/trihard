import { Input } from '@nextui-org/react';
import { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';
import { IOptions } from 'tailwind-datepicker-react/types/Options';
import * as H from '@/utils/helpers';

export const options: IOptions = {
  title: 'Demo Title',
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  clearBtnText: 'Clear',
  minDate: new Date('2023-01-01'),
  maxDate: new Date('2030-01-01'),
  theme: {
    background: 'bg-gray-700 dark:bg-gray-800',
    todayBtn: '',
    clearBtn: '',
    icons: '',
    text: '',
    disabledText: 'bg-red-500',
    input: '',
    inputIcon: '',
    selected: '',
  },
  icons: {
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  datepickerClassNames: 'top-12',
  defaultDate: new Date('2022-01-01'),
  language: 'en',
  disabledDates: [],
  weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  inputNameProp: 'date',
  inputIdProp: 'date',
  inputPlaceholderProp: 'Select Date',
  inputDateFormatProp: {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  },
};

export type SeperateDateTimePickerProps = {
  label: string;
}
const SeperateDateTimePicker = (props: SeperateDateTimePickerProps) => {
  const {label} = props;
  const [show, setShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleChange = (selectedDate: Date) => {
    setSelectedDate(selectedDate);
  };
  const handleClose = (state: boolean) => {
    setShow(state);
  };

  return (
    <div>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      >
        <div>
          <Input
            label={label}
            onFocus={() => setShow(true)}
            value={H.formatDateToYYYYMMDDWithDay(selectedDate)}
            readOnly
          />
        </div>
      </Datepicker>
    </div>
  );
};

export default SeperateDateTimePicker;
