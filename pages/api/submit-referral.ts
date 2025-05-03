/**
 * @swagger
 * /api/submit-referral:
 *   post:
 *     summary: Submit referral form data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patient:
 *                 type: object
 *               referral:
 *                 type: object
 *               additionalInfo:
 *                 type: object
 *     responses:
 *       200:
 *         description: Referral submitted successfully
 */

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const referral = req.body;
    console.log('Referral received:', referral);
    return res.status(200).json({ message: 'Referral submitted successfully' });
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}