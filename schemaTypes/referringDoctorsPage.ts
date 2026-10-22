import {defineField, defineType} from 'sanity'
export const referringDoctorsPage = defineType({name:'referringDoctorsPage', title:'For Referring Doctors', type:'document', fields:[
  defineField({name:'eyebrow',title:'Hero Small Heading',type:'string'}), defineField({name:'headline',title:'Headline',type:'string'}), defineField({name:'intro',title:'Introduction',type:'text',rows:4}),
  defineField({name:'body',title:'Referral Information',type:'array',of:[{type:'block'}]}), defineField({name:'contactButtonText',title:'Contact Button Text',type:'string'}),
  defineField({name:'referralEyebrow',title:'Digital Referral Small Heading',type:'string'}), defineField({name:'referralHeadline',title:'Digital Referral Headline',type:'string'}), defineField({name:'referralText',title:'Digital Referral Text',type:'text',rows:4}), defineField({name:'referralButtonText',title:'Referral Button Text',type:'string'}),
  defineField({name:'referralPdf',title:'Referral Form PDF',type:'file',options:{accept:'application/pdf'},description:'Upload or replace the current referral form PDF. The website download link updates automatically after you publish.'}), defineField({name:'contactEmail',title:'Referral Contact Email',type:'string'}), defineField({name:'contactPhone',title:'Referral Phone',type:'string'}), defineField({name:'contactLabel',title:'Referral Contact Label',type:'string'}),
  defineField({name:'metaDescription',title:'SEO Description',type:'text',rows:3})
]})
