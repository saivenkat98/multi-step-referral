import React from 'react';
import { render, screen } from '@testing-library/react';
import InputField from '@/app/referral/components/InputField';
import { useForm } from 'react-hook-form';

function Wrapper() {
  const { register } = useForm();
  return (
    <InputField label="Name" register={register('name')} />
  );
}

test('renders input field with label', () => {
  render(<Wrapper />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
});