'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  showBack?: boolean;
}

export default function FormNavigation({ showBack = true }: Props) {
  const router = useRouter();

  return (
    <div className="flex justify-between mt-8">
      {showBack ? (
        <button
          type="button"
          className="px-5 py-2 rounded-md bg-white text-wk-navy border hover:bg-gray-100"
          onClick={() => router.back()}
        >
          Back
        </button>
      ) : <div></div>}

      <button
        type="submit"
        className="px-6 py-2 rounded-md text-white bg-wk-indigo hover:bg-indigo-800"
      >
        Next
      </button>
    </div>
  );
}