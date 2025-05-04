import { lexicalEditor } from '@payloadcms/richtext-lexical'

const appearanceOptions = {
  default: {
    label: 'Default',
    value: 'default',
  },
  primary: {
    label: 'Primary Button',
    value: 'primary',
  },
  secondary: {
    label: 'Secondary Button',
    value: 'secondary',
  },
}



// Example Rich Text Field Configuration
export const richTextExample = {
  name: 'content',
  type: 'richText',
  required: true,
  editor: lexicalEditor(),
}
