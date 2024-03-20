import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection("posts");
  return rss({
    title: 'SOTO',
    description: 'Portfolio of ZZH',
    site: zzhgo.com,
    items: posts.map((post) => ({
      title: post.data.title,
      date: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}