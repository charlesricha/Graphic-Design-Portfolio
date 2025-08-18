'use server';

import { getDesignFeedback } from '@/ai/flows/design-feedback';
import { z } from 'zod';

const schema = z.object({
  designBrief: z.string().min(10, { message: 'Design brief must be at least 10 characters long.' }),
});

export async function handleDesignFeedback(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    designBrief: formData.get('designBrief'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Invalid input.',
      errors: validatedFields.error.flatten().fieldErrors,
      feedback: null,
    };
  }

  try {
    const result = await getDesignFeedback({ designBrief: validatedFields.data.designBrief });
    return {
      message: 'Success',
      feedback: result.feedback,
      errors: null,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An unexpected error occurred while getting feedback. Please try again later.',
      feedback: null,
      errors: null,
    };
  }
}
