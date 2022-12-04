import React, { ChangeEvent } from 'react';
import CustomButton from '../custom-button';
import FormTextarea from '../form-textarea';
import { FormContainer, TitleContainer } from './form.styles';

interface FormComponentProps {
  handleChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  value?: string;
}

const FormComponent: React.FC<FormComponentProps> = ({ value, handleChange, handleSubmit }) => {
  return (
    <FormContainer>
      <TitleContainer>Find if Graph is red blue colorable.</TitleContainer>
      <form onSubmit={handleSubmit}>
        <FormTextarea
          name="graphTextarea"
          value={value}
          id="graphTextarea"
          title="minimum 3 characters and maximum 250 characters."
          minLength={3}
          // maxLength={250}
          rows={6}
          handleChange={handleChange}
          required
          label="Is Red Blue Colorable?"
        />
        <CustomButton type="submit">check?</CustomButton>
      </form>
    </FormContainer>
  );
};

FormComponent.defaultProps = {
  value: '',
};

export default FormComponent;
