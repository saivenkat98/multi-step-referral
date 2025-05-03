import { ReferralFormData } from '@/types/referral';

export async function submitReferral(data: ReferralFormData): Promise<boolean> {
    try {
      const res = await fetch('/api/submit-referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      return res.ok;
    } catch (error) {
      console.error('API Error:', error);
      return false;
    }
  }  