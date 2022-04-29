import { hasPhoto, hasReview, isVerified } from 'store/reducers/service';

export interface ChecboxProps {
  stateValue: boolean;
  actionCreator: (value: boolean) => CheckboxActionTypes;
  label: string;
}

type CheckboxActionTypes =
  | ReturnType<typeof hasPhoto>
  | ReturnType<typeof isVerified>
  | ReturnType<typeof hasReview>;
