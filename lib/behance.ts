import Parser from 'rss-parser';

export type BehanceProject = {
  title: string;
  link: string;
  pubDate: string;
  image: string;
  description: string;
};

export async function getBehanceProjects(username: string): Promise<BehanceProject[]> {
  const parser = new Parser();
  const feedUrl = `https://www.behance.net/feeds/user?username=${username}`;

  try {
    const feed = await parser.parseURL(feedUrl);
    
    return feed.items.map(item => {
      // The image is usually inside the content/description as an HTML tag: <img src='...' />
      // We can extract it using a regex
      const imgMatch = item.content?.match(/src='([^']+)'/);
      const image = imgMatch ? imgMatch[1] : '';

      // Clean the description by removing HTML tags
      const cleanDescription = item.contentSnippet || item.content?.replace(/<[^>]+>/g, '').trim() || '';

      return {
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate || '',
        image,
        description: cleanDescription,
      };
    });
  } catch (error) {
    console.error('Error fetching Behance projects:', error);
    return [];
  }
}
