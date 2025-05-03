'use client';

import { useForm } from 'react-hook-form';
import { useReferral, ReferralDetails } from '../../../context/ReferralContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import FormNavigation from '../components/FormNavigation';
import Stepper from '../components/Stepper';
import FormCard from '../components/FormCard';
import FormHeader from '../components/FormHeader';
import InputField from '../components/InputField';
import specialties from '../data/specialties.json';
import { motion } from 'framer-motion';


export default function ReferralDetailsStep() {
  const { formData, updateFormData } = useReferral();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReferralDetails>({
    defaultValues: formData.referral || {},
  });

  useEffect(() => {
    reset(formData.referral || {});
  }, [formData.referral, reset]);

  const onSubmit = (data: ReferralDetails) => {
    updateFormData({ referral: data });
    router.push('/referral/step3-additional-info');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-green-100 p-6">
      <FormHeader title="Referral Details" />

      <FormCard>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Stepper currentStep={2} />

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            <InputField
              label="Reason"
              type="textarea"
              register={register('reason', {
                required: 'Reason is required',
                minLength: {
                  value: 50,
                  message: 'Reason must be at least 50 characters',
                },
              })}
              error={errors.reason}
            />

            <div>
              <label className="block font-medium text-wk-navy mb-1">Specialty</label>
              <select
                {...register('specialty', { required: 'Specialty is required' })}
                className="w-full p-2 border rounded-md"
                defaultValue=""
              >
                <option value="" disabled>Select a specialty</option>
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
              {errors.specialty && (
                <p className="text-red-500 text-sm">{errors.specialty.message}</p>
              )}
            </div>
            <FormNavigation />
          </form>
        </motion.div>
      </FormCard>
    </div>
  );
}