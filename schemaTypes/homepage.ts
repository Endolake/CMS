import {defineField, defineType} from 'sanity'
export const homepage = defineType({
  name:'homepage', title:'Homepage', type:'document',
  groups:[{name:'hero',title:'Hero'},{name:'services',title:'Services Section'},{name:'cards',title:'Patients & Referring Cards'},{name:'contact',title:'Contact Strip'},{name:'seo',title:'SEO'}],
  fields:[
    defineField({name:'kicker', title:'Hero Small Heading', type:'string', group:'hero'}),
    defineField({name:'headline', title:'Hero Main Headline', type:'string', group:'hero'}),
    defineField({name:'intro', title:'Hero Introduction', type:'text', rows:4, group:'hero'}),
    defineField({name:'heroImage', title:'Hero Image', type:'image', group:'hero', options:{hotspot:true}, fields:[{name:'alt',title:'Alt Text',type:'string'}]}),
    defineField({name:'primaryButtonText', title:'Primary Button Text', type:'string', group:'hero'}),
    defineField({name:'primaryButtonUrl', title:'Primary Button URL', type:'string', group:'hero'}),
    defineField({name:'secondaryButtonText', title:'Secondary Button Text', type:'string', group:'hero'}),
    defineField({name:'secondaryButtonUrl', title:'Secondary Button URL', type:'string', group:'hero'}),
    defineField({name:'servicesEyebrow', title:'Services Small Heading', type:'string', group:'services', initialValue:'SPECIALIZED ENDODONTIC CARE'}),
    defineField({name:'servicesHeadline', title:'Services Section Headline', type:'string', group:'services', initialValue:'Focused expertise for your natural teeth.'}),
    defineField({name:'serviceLearnMoreText', title:'Service Card Link Text', type:'string', group:'services', initialValue:'Learn more →'}),
    defineField({name:'patientsEyebrow', title:'Patients Card Small Heading', type:'string', group:'cards', initialValue:'PATIENTS'}),
    defineField({name:'patientsLinkText', title:'Patients Card Link Text', type:'string', group:'cards', initialValue:'Learn More →'}),
    defineField({name:'referringEyebrow', title:'Referring Card Small Heading', type:'string', group:'cards', initialValue:'REFERRAL PARTNERS'}),
    defineField({name:'referringLinkText', title:'Referring Card Link Text', type:'string', group:'cards', initialValue:'Learn More →'}),
    defineField({name:'locationLabel', title:'Location Label', type:'string', group:'contact', initialValue:'Location'}),
    defineField({name:'callLabel', title:'Call Label', type:'string', group:'contact', initialValue:'Call'}),
    defineField({name:'hoursLabel', title:'Hours Label', type:'string', group:'contact', initialValue:'Hours'}),
    defineField({name:'metaDescription', title:'SEO Description', type:'text', rows:3, group:'seo'}),
  ]
})
