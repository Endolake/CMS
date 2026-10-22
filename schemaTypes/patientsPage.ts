import {defineField, defineType} from 'sanity'
export const patientsPage = defineType({name:'patientsPage', title:'For Patients', type:'document', fields:[
  defineField({name:'eyebrow',title:'Hero Small Heading',type:'string'}), defineField({name:'headline',title:'Headline',type:'string'}), defineField({name:'intro',title:'Introduction',type:'text',rows:4}),
  defineField({name:'body',title:'Patient Information',type:'array',of:[{type:'block'}]}),
  defineField({name:'faqsEyebrow',title:'FAQ Small Heading',type:'string'}), defineField({name:'faqs',title:'FAQs',type:'array',of:[{type:'object',fields:[{name:'question',title:'Question',type:'string'},{name:'answer',title:'Answer',type:'text',rows:4}]}]}),
  defineField({name:'ctaEyebrow',title:'Bottom CTA Small Heading',type:'string'}), defineField({name:'ctaHeadline',title:'Bottom CTA Headline',type:'string'}), defineField({name:'ctaButtonText',title:'Bottom CTA Button Text',type:'string'}),
  defineField({name:'metaDescription',title:'SEO Description',type:'text',rows:3})
]})
