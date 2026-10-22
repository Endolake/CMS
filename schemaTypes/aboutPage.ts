import {defineField, defineType} from 'sanity'
export const aboutPage = defineType({name:'aboutPage', title:'About Page', type:'document', fields:[
  defineField({name:'eyebrow',title:'Hero Small Heading',type:'string'}), defineField({name:'headline',title:'Hero Headline',type:'string'}), defineField({name:'intro',title:'Hero Introduction',type:'text',rows:4}),
  defineField({name:'approachEyebrow',title:'Approach Small Heading',type:'string'}), defineField({name:'approachHeadline',title:'Approach Headline',type:'string'}), defineField({name:'approachBody',title:'Approach Text',type:'text',rows:4}),
  defineField({name:'approachBullets',title:'Approach Bullet Points',type:'array',of:[{type:'string'}]}),
  defineField({name:'philosophyEyebrow',title:'Philosophy Small Heading',type:'string'}), defineField({name:'philosophyHeadline',title:'Philosophy Headline',type:'string'}), defineField({name:'philosophyBody',title:'Philosophy Text',type:'text',rows:4}), defineField({name:'philosophyLinkText',title:'Philosophy Link Text',type:'string'}),
  defineField({name:'doctorEyebrow',title:'Doctor Section Small Heading',type:'string'}),
  defineField({name:'metaDescription',title:'SEO Description',type:'text',rows:3}),
]})
