import {defineField, defineType} from 'sanity'
export const office = defineType({
  name: 'office', title: 'Office & Photos', type: 'document',
  fields: [
    defineField({name: 'headline', title: 'Headline', type: 'string'}),
    defineField({name: 'description', title: 'Description', type: 'text', rows: 4}),
    defineField({name: 'photos', title: 'Office Photos', type: 'array', of: [{type: 'image', options: {hotspot: true},
      fields: [{name: 'alt', title: 'Alt Text', type: 'string'}, {name: 'caption', title: 'Caption', type: 'string'}]}]}),
  ],
})