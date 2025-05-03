'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Stepper from '../components/Stepper';
import InputField from '../components/InputField';
import FormNavigation from '../components/FormNavigation';
import FormHeader from '../components/FormHeader';
import FormCard from '../components/FormCard';
import { useReferral } from '../../../context/ReferralContext';
import { useEffect } from 'react';

type FormValues = {
  name: string;
  dob: string;
  contact: string;
};

export default function Step1PatientDetails() {
  const router = useRouter();
  const { formData, updateFormData } = useReferral();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    defaultValues: formData.patient || {},
  });

  useEffect(() => {
    reset(formData.patient || {});
  }, [formData.patient, reset]);

  const onSubmit = (data: FormValues) => {
    updateFormData({ patient: data });
    router.push('/referral/step2-referral-details');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-green-100 p-6">
      {/* Header */}
      <FormHeader title="Patient Info" />

      {/* Main Card */}
      <FormCard>
        <Stepper currentStep={1} />
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputField
            label="Name"
            register={register('name', {
              required: 'Name is required',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Only letters and spaces allowed',
              },
            })}
            error={errors.name}
          />

          <InputField
            label="Date of Birth"
            type="date"
            register={register('dob', {
              required: 'Date of Birth is required',
              validate: (value) => {
                const birthDate = new Date(value);
                const oneYearAgo = new Date();
                oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
                return birthDate <= oneYearAgo || 'Date of birth must be at least 1 year ago';
              },
            })}
            error={errors.dob}
          />

          <InputField
            label="Contact"
            type="tel"
            register={register('contact', {
              required: 'Contact is required',
              pattern: {
                value: /^\d{10}$/,
                message: 'Enter a valid 10-digit phone number',
              },
            })}
            error={errors.contact}
          />

          <FormNavigation showBack={false} />
        </form>
      </FormCard>
    </div>
  );
}