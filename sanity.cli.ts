import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {projectId: 'h0i5f2pn', dataset: 'production'},
  deployment: {autoUpdates: true},
})