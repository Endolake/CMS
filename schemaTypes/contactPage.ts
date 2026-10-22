import {defineField, defineType} from 'sanity'
export const contactPage = defineType({name:'contactPage', title:'Contact Page', type:'document', fields:[
  defineField({name:'eyebrow',title:'Hero Small Heading',type:'string'}), defineField({name:'headline',title:'Hero Headline',type:'string'}), defineField({name:'intro',title:'Hero Introduction',type:'text',rows:4}),
  defineField({name:'officeHeadline',title:'Office Section Headline',type:'string'}), defineField({name:'mapsLinkText',title:'Maps Link Text',type:'string'}),
  defineField({name:'formNotice',title:'Form Notice',type:'text',rows:4}), defineField({name:'nameLabel',title:'Name Label',type:'string'}), defineField({name:'phoneLabel',title:'Phone Label',type:'string'}), defineField({name:'emailLabel',title:'Email Label',type:'string'}), defineField({name:'reasonLabel',title:'Reason Label',type:'string'}), defineField({name:'messageLabel',title:'Message Label',type:'string'}), defineField({name:'submitText',title:'Submit Button Text',type:'string'}), defineField({name:'successText',title:'Success Message',type:'text',rows:3}),
  defineField({name:'metaDescription',title:'SEO Description',type:'text',rows:3})
]})
