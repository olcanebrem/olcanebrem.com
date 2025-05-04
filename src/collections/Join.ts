import type { Field, CollectionConfig } from 'payload'

// Relationship field to link posts to a category
export const MyRelationshipField: Field = {
  name: 'category',
  type: 'relationship',
  relationTo: 'categories',
  required: false,
  hasMany: false,
}

// Optional join field to show related posts
export const MyJoinField: Field = {
  name: 'relatedPosts',
  type: 'relationship',
  relationTo: 'posts',
  hasMany: true,
}

// Categories Collection Configuration
export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: 'Category',
    plural: 'Categories',
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
    },
    {
      name: 'color',
      type: 'select',
      options: [
        { label: 'Red', value: 'red' },
        { label: 'Blue', value: 'blue' },
        { label: 'Green', value: 'green' },
        { label: 'Yellow', value: 'yellow' },
      ],
    },
    MyJoinField,
  ],
}