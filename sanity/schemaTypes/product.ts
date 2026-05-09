export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Chandelier', value: 'chandelier' },
          { title: 'Pendant Light', value: 'pendant' },
          { title: 'Wall Light', value: 'wall-light' },
          { title: 'Drop Light', value: 'Drop-light' },
          { title: 'LED Neon Strip', value: 'led-strip' },
        ],
      },
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'specifications',
      title: 'Specifications',
      type: 'object',
      fields: [
        { name: 'material', title: 'Material', type: 'string' },
        { name: 'finish', title: 'Finish', type: 'string' }, // e.g., Gold, Matte Black, Copper
        { name: 'dimensions', title: 'Dimensions', type: 'string' },
        { name: 'colorTemperature', title: 'Color Temperature', type: 'string' }, // e.g., 3000K Warm White
      ],
    },
  ],
};