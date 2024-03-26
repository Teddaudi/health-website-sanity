import {defineField, defineType} from 'sanity'

export const whatWeDo = defineType  ({
    name: 'whatWeDo',
    title: 'WhatWeDo',
    type: 'document',
    fields: [
        defineField({
            name: 'image1',
            title: 'Image1',
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
            name: 'title',
            title: 'Title',
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
    ],
  });