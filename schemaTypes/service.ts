import {defineField, defineType} from 'sanity'
export const service = defineType({
  name: 'service', title: 'Service', type: 'document',
  fields: [
    defineField({name: 'title', title: 'Service Name', type: 'string', validation: r => r.required()}),
    defineField({name: 'slug', title: 'URL Slug', type: 'slug', options: {source: 'title'}, validation: r => r.required()}),
    defineField({name: 'shortDescription', title: 'Short Description', type: 'text', rows: 3}),
    defineField({name: 'icon', title: 'Homepage Icon', type: 'image', options: {accept: 'image/svg+xml,image/png,image/webp'}, fields: [{name: 'alt', title: 'Alt Text', type: 'string'}]}),
    defineField({name: 'image', title: 'Service Image', type: 'image', options: {hotspot: true},
      fields: [{name: 'alt', title: 'Alt Text', type: 'string'}]}),
    defineField({name: 'body', title: 'Page Content', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'order', title: 'Display Order', type: 'number'}),
    defineField({name: 'active', title: 'Show on Website', type: 'boolean', initialValue: true}),
  ],
})