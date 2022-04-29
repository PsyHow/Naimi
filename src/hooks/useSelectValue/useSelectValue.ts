import { ChangeEvent, useCallback, useState } from 'react';

import { UseSelectValueReturn } from 'hooks/useSelectValue/types';
import { IUni } from 'store/types';

export const useSelectValue = (
  value: IUni | boolean,
  options: IUni[],
): UseSelectValueReturn => {
  const [valueSelect, setValueSelect] = useState({
    booleanValue: value as boolean,
    city: value as IUni,
  });

  const handleCityChange = useCallback(
    (event: ChangeEvent<HTMLSelectElement>): void => {
      const option = +event.currentTarget.value;
      const currentOption = options.filter(item => item.id === option)[0];

      if (typeof value === 'boolean') {
        setValueSelect({ ...valueSelect, booleanValue: !valueSelect.booleanValue });
      }
      if (typeof value !== 'boolean') {
        setValueSelect({ ...valueSelect, city: currentOption });
      }
    },
    [valueSelect],
  );

  return { valueSelect, handleCityChange };
};
