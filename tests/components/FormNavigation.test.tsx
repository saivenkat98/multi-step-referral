import React from 'react';
import { render, screen } from '@testing-library/react';
import FormNavigation from '@/app/referral/components/FormNavigation';

//Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    back: jest.fn(),
  }),
}));

describe('FormNavigation Component', () => {
  test('renders Next button', () => {
    render(<FormNavigation />);
    expect(screen.getByText(/next/i)).toBeInTheDocument();
  });

  test('renders Back button when showBack is true', () => {
    render(<FormNavigation showBack={true} />);
    expect(screen.getByText(/back/i)).toBeInTheDocument();
  });
});