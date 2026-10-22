import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'lakeForestEndodontics',
  title: 'Lake Forest Endodontics',
  projectId: 'h0i5f2pn',
  dataset: 'production',
  basePath: '/',
  plugins: [structureTool({structure}), visionTool()],
  schema: {types: schemaTypes},
})