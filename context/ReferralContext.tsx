'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

export interface PatientDetails {
  name: string;
  dob: string;
  contact: string;
}

export interface ReferralDetails {
  specialty: string;
  reason: string;
  notes?: string;
}

export interface AdditionalInfo {
  documents?: FileList | null;
  comments?: string;
}

export interface ReferralFormData {
  patient: PatientDetails;
  referral: ReferralDetails;
  additionalInfo: AdditionalInfo;
}

interface ReferralContextProps {
  formData: Partial<ReferralFormData>;
  updateFormData: (data: Partial<ReferralFormData>) => void;
  resetFormData: () => void;
}

const ReferralContext = createContext<ReferralContextProps | undefined>(undefined);

export const ReferralProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<Partial<ReferralFormData>>({});

  const updateFormData = (data: Partial<ReferralFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const resetFormData = () => setFormData({});

  return (
    <ReferralContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </ReferralContext.Provider>
  );
};

export const useReferral = () => {
  const context = useContext(ReferralContext);
  if (!context) {
    throw new Error('useReferral must be used within a ReferralProvider');
  }
  return context;
};