import {defineField, defineType} from 'sanity'

export const banner = defineType  ({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
        }),
        defineField({
            name: 'smallTitle',
            title: 'SmallTitle',
            type: 'string',
        }),
        defineField({
            name: 'largeTitle',
            title: 'largeTitle',
            type: 'string',
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'string',
        }),
    ],
  });