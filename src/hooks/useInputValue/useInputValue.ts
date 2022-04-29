import { ChangeEvent, useCallback, useState } from 'react';

import { UseInputValueReturn } from 'hooks/useInputValue/types';

export const useInputValue = (value: string | number): UseInputValueReturn => {
  const [valueInput, setValueInput] = useState(value);

  const pattern = '[0-9]*';

  const handleValueChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      if (pattern) {
        return setValueInput((validate: number) =>
          event.target.validity.valid ? event.target.value : validate,
        );
      }
      return setValueInput(event.currentTarget.value);
    },
    [valueInput],
  );

  return { valueInput, handleValueChange };
};
