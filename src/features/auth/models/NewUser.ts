import { RegisterFormField } from './RegisterFormField';

export type NewUser = Omit<RegisterFormField, 'confirmPassword'>;
