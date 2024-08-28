import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET() {
  const posts = await getCollection("blog");
  return rss({
    title: 'SOTO',
    description: 'Blog posts from SOTO',
    site: 'https://www.zzhgo.com',
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
    })),
    customData: `<language>en-us</language>`,
  })
}