import fs from 'fs';
import imagekit from './imagekit.js';

export const uploadImage = async (image, width, attr, updatedData) => {
  if (!image || !updatedData) return;

  try {
    const buffer = fs.readFileSync(image.path);

    const response = await imagekit.upload({
      file: buffer,
      fileName: image.originalname,
    });

    const url = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: 'auto' },
        { format: 'webp' },
        { width: width },
      ],
    });

    return (updatedData[attr] = url);
  } catch (error) {
    console.error(`Failed to upload ${attr}:`, error.message);
    return null;
  }
};
