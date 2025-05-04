import { CollectionConfig } from 'payload';
import { MyRelationshipField } from './Join';
import { lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: ({defaultFeatures}) => [
          ...defaultFeatures,
          FixedToolbarFeature({
            
          })
        ],
      }),
    },
    MyRelationshipField,
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
  ],
}

