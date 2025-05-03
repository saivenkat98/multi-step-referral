'use client';

import Image from 'next/image';
import React from 'react';
import { useReferral } from '../../../context/ReferralContext';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react'; // install if not already: `npm install lucide-react`

interface Props {
  title: string;
}

export default function FormHeader({ title }: Props) {
  const router = useRouter();
  const { resetFormData } = useReferral();


  const handleClose = () => {
    resetFormData();        // Clear form context
    router.push('/');
  };

  return (
    <header className="bg-wk-indigo text-white px-6 py-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-3">
        <Image
          src="/wekare360_logo.png"
          alt="Wekare Logo"
          width={36}
          height={36}
          className="rounded-full"
        />
        <span className="text-lg font-semibold">{title}</span>
      </div>

      {/* Close button to go back to home */}
      <button
        onClick={handleClose}
        aria-label="Close and return to homepage"
        className="text-white hover:text-gray-200 transition"
      >
        <X className="w-6 h-6" />
      </button>
    </header>
  );
}
