import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'my-blog-sanity',

  projectId: 't1cl28s8',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
