import 'dotenv/config';
import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to fix path issues in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'tjg5r53z',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2026-05-06',
});

async function uploadProduct(productData, fileName) {
  try {
    // Construct absolute path to the 'public' folder
    const imagePath = path.join(process.cwd(), 'public', fileName);

    if (!fs.existsSync(imagePath)) {
      throw new Error(`File not found at: ${imagePath}`);
    }

    console.log(`Uploading: ${productData.title}...`);

    // 1. Upload the image file to Sanity
    const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
      filename: path.basename(imagePath),
    });

    // 2. Create the product document with the image reference
    const doc = {
      _type: 'product',
      title: productData.title,
      category: productData.category,
      description: productData.description,
      price: productData.price,
      images: [
        {
          _type: 'image',
          asset: { _type: 'reference', _ref: imageAsset._id },
        },
      ],
      specifications: productData.specs,
    };

    const result = await client.create(doc);
    console.log(`✅ Success! Product created with ID: ${result._id}`);
  } catch (error) {
    console.error(`❌ Failed for ${productData.title}:`, error.message);
  }
}

/**
 * UPLOAD YOUR PRODUCTS HERE
 * Since your files are in the 'public' folder, 
 * just provide the exact filename (e.g., 'light.jpg')
 */

// 1. The Infinity Gold Chandelier
uploadProduct({
  title: 'Infinity Halo Chandelier',
  category: 'chandelier',
  description: 'Ultra-modern infinity loop chandelier with a brushed gold finish.',
  price: 1200,
  specs: {
    material: 'Aluminum & Acrylic',
    finish: 'Brushed Gold',
    dimensions: '120cm x 40cm',
    colorTemperature: '3000K'
  }
}, 'light.jpg'); // Matches the file in your public folder

// 2. Add another one from your 'sth' images
uploadProduct({
  title: 'Modern Geometric Wall Sconce',
  category: 'wall-light',
  description: 'Luxury minimalist wall lighting with unique shadow patterns.',
  price: 350,
  specs: {
    material: 'Steel',
    finish: 'Matte Black',
    dimensions: '20cm x 20cm',
    colorTemperature: '2700K'
  }
}, 'sth (1).jpg');