import {defineField, defineType} from 'sanity'

export const why = defineType  ({
    name: 'why',
    title: 'Why',
    type: 'document',
    fields: [
        defineField({
            name: 'image1',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'image2',
            title: 'Image2',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'image3',
            title: 'Image3',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'title1',
            title: 'Title1',
            type: 'string',
        }),
        defineField({
            name: 'title2',
            title: 'Title2',
            type: 'string',
        }),
        defineField({
            name: 'title3',
            title: 'Title3',
            type: 'string',
        }),
        defineField({
            name: 'text1',
            title: 'Text1',
            type: 'string',
        }),
        defineField({
            name: 'text2',
            title: 'Text2',
            type: 'string',
        }),
        defineField({
            name: 'text3',
            title: 'Text3',
            type: 'string',
        }),
    ],
  });