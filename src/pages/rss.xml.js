import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection("blog");
  return rss({
    title: 'SOTO',
    description: 'Portfolio of ZZH',
    site: 'https://www.zzhgo.com',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  })
}