import {defineField, defineType} from 'sanity'
export const servicesPage = defineType({name:'servicesPage', title:'Services Page', type:'document', fields:[
  defineField({name:'eyebrow',title:'Hero Small Heading',type:'string'}), defineField({name:'headline',title:'Hero Headline',type:'string'}), defineField({name:'intro',title:'Hero Introduction',type:'text',rows:4}), defineField({name:'learnMoreText',title:'Service Link Text',type:'string'}), defineField({name:'metaDescription',title:'SEO Description',type:'text',rows:3})
]})
