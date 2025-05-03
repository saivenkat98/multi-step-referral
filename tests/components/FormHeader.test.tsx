import React from 'react';
import { render, screen } from '@testing-library/react';
import FormHeader from '@/app/referral/components/FormHeader';

//Mock `useRouter`
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

//Mock `useReferral`
jest.mock('@/context/ReferralContext', () => ({
  useReferral: () => ({
    resetFormData: jest.fn(),
  }),
}));

describe('FormHeader Component', () => {
  test('renders title', () => {
    render(<FormHeader title="Patient Info" />);
    expect(screen.getByText('Patient Info')).toBeInTheDocument();
  });
});