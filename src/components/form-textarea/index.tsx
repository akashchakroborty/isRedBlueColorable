import React, { ChangeEvent } from 'react';
import { GroupContainer, FormTextareaContainer, FormTextareaLabel } from './form-textarea.styles';

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({
  label,
  handleChange,
  value = '',
  ...otherProps
}) => {
  return (
    <GroupContainer>
      <FormTextareaContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormTextareaLabel className={`${value.length ? 'shrink' : ''}`}>{label}</FormTextareaLabel>
      ) : null}
    </GroupContainer>
  );
};

FormTextarea.defaultProps = {
  value: '',
};

export default FormTextarea;
