export default {
  name: 'siteContent',
  type: 'document',
  title: 'Site content',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'thanks',
      title: 'Thank you message',
      type: 'string'
    },
  ],

  initialValue: {
    title: '5km run for Cancer Research',
    thanks: 'Thanks for your support!'
  }
}
