import {defineField, defineType} from 'sanity'
export const practiceSettings = defineType({
  name: 'practiceSettings', title: 'Practice & Site Settings', type: 'document',
  groups: [
    {name:'branding', title:'Branding'}, {name:'contact', title:'Contact'},
    {name:'navigation', title:'Navigation'}, {name:'footer', title:'Footer & SEO'}
  ],
  fields: [
    defineField({name:'practiceName', title:'Practice Name', type:'string', group:'branding', initialValue:'Lake Forest Endodontics', validation:r=>r.required()}),
    defineField({name:'logo', title:'Logo', type:'image', group:'branding', options:{hotspot:true}, fields:[{name:'alt', title:'Alt Text', type:'string'}]}),
    defineField({name:'brandMarkText', title:'Fallback Logo Mark (when no image)', type:'string', group:'branding', initialValue:'LF'}),
    defineField({name:'doctorName', title:'Doctor Name', type:'string', group:'branding', initialValue:'Raven Wang, DDS'}),
    defineField({name:'phone', title:'Phone', type:'string', group:'contact'}),
    defineField({name:'email', title:'Email', type:'string', group:'contact'}),
    defineField({name:'address', title:'Address', type:'text', rows:3, group:'contact'}),
    defineField({name:'googleMapsUrl', title:'Google Maps URL (Open in Google Maps → link)', type:'url', group:'contact'}),
    defineField({name:'appointmentUrl', title:'Appointment URL', type:'url', group:'contact'}),
    defineField({name:'hours', title:'Office Hours', type:'array', group:'contact', of:[{type:'object', fields:[
      {name:'day', title:'Day', type:'string'}, {name:'hours', title:'Hours', type:'string'}
    ]}]}),
    defineField({name:'officePhoto', title:'Primary Office Photo', type:'image', group:'contact', options:{hotspot:true}, fields:[{name:'alt', title:'Alt Text', type:'string'}]}),
    defineField({name:'navAbout', title:'About Label', type:'string', group:'navigation', initialValue:'ABOUT'}),
    defineField({name:'navServices', title:'Services Label', type:'string', group:'navigation', initialValue:'SERVICES'}),
    defineField({name:'navPatients', title:'Patients Label', type:'string', group:'navigation', initialValue:'PATIENTS'}),
    defineField({name:'navReferring', title:'Referring Doctors Label', type:'string', group:'navigation', initialValue:'REFERRING DOCTORS'}),
    defineField({name:'navContact', title:'Contact Label', type:'string', group:'navigation', initialValue:'CONTACT'}),
    defineField({name:'navAppointment', title:'Appointment Button Label', type:'string', group:'navigation', initialValue:'REQUEST APPOINTMENT →'}),
    defineField({name:'footerCopyright', title:'Footer Copyright Text', type:'string', group:'footer', description:'Use {year} and {practice} as placeholders.', initialValue:'© {year} {practice}. All rights reserved.'}),
    defineField({name:'footerContactLabel', title:'Footer Contact Label', type:'string', group:'footer', initialValue:'Contact'}),
    defineField({name:'footerPrivacyLabel', title:'Footer Privacy Label', type:'string', group:'footer', initialValue:'Privacy'}),
    defineField({name:'privacyUrl', title:'Privacy Page URL', type:'string', group:'footer'}),
    defineField({name:'defaultMetaDescription', title:'Default SEO Description', type:'text', rows:3, group:'footer'}),
  ],
})
