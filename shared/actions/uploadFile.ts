'use server';

import { strapi } from 'shared/api';

export async function uploadFile(formData: FormData) {
  try {
    await strapi.deleteHeader('Content-Type').post('/api/upload', formData).resolve();
  } catch (error) {
    console.error(error);
  }
}
