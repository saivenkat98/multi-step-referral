import React from 'react';
import { render, screen } from '@testing-library/react';
import Stepper from '@/app/referral/components/Stepper';

describe('Stepper Component', () => {
  test('renders correct step as active', () => {
    render(<Stepper currentStep={2} />);
    expect(screen.getByText('2')).toHaveClass('bg-wk-indigo');
  });
});