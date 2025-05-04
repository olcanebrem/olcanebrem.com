// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { BlocksFeature, lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical';
import { Categories } from './collections/Join';
import { richTextExample } from './fields/customRichTextEditor';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor({
    features: ({defaultFeatures}) => [
      ...defaultFeatures,
      BlocksFeature({
        blocks: [
        ],
      }),
      FixedToolbarFeature()
    ],
  }),
  collections: [
    Users,
    Media,
    Posts,
    Categories,
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ]
})
