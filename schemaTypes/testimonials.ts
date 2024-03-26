import {defineField, defineType} from 'sanity'

export const testimonials = defineType  ({
    name: 'testimonials',
    title: 'Testimonials',
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
            name: 'testimonial1',
            title: 'Testimonial1',
            type: 'string',
        }),
        defineField({
            name: 'testimonial2',
            title: 'Testimonial2',
            type: 'string',
        }),
        defineField({
            name: 'testimonial1Title',
            title: 'Testimonial1Title',
            type: 'string',
        }),
        defineField({
            name: 'testimonial2Title',
            title: 'Testimonial2Title',
            type: 'string',
        }),
    ],
  });