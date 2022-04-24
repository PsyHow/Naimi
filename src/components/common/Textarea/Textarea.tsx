import { ChangeEvent, FC, memo, useState } from 'react';

import { useDispatch } from 'react-redux';

import styles from './styles/textarea.module.scss';

import { TextareaProps } from 'components/common/Textarea/types';

export const Textarea: FC<TextareaProps> = memo(({ stateValue, actionCreator }) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState<string>(stateValue);

  const handleValueChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    const option = event.currentTarget.value;

    setValue(option);
  };

  const handleChangeBlur = (): void => {
    dispatch(actionCreator(value));
  };

  return (
    <textarea
      className={styles.textarea}
      onBlur={handleChangeBlur}
      value={value}
      onChange={handleValueChange}
    />
  );
});
