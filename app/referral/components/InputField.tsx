'use client';
import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface Props {
  label: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export default function InputField({ label, type = 'text', register, error }: Props) {
  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
  return (
    <div>
      <label htmlFor={inputId} className="block text-gray-700 mb-1">{label}</label>
      <input
        id={inputId}
        type={type}
        {...register}
        className={`mt-1 block w-full border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md p-2`}
      />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}