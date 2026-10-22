import {defineField, defineType} from 'sanity'
export const doctor = defineType({
  name:'doctor', title:'Doctors', type:'document',
  fields:[
    defineField({name:'name',title:'Name',type:'string',validation:r=>r.required()}),
    defineField({name:'photo',title:'Photo',type:'image',options:{hotspot:true},fields:[{name:'alt',title:'Alt Text',type:'string'}]}),
    defineField({name:'fullBio',title:'Full Biography',type:'array',of:[{type:'block'}]}),
  ],
  preview:{select:{title:'name',media:'photo'}}
})
