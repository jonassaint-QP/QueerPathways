import postsData from './posts-data.json';

export interface Post {
  id: string;
  title: string;
  description: string;
  url: string;
  pillar: 'presence' | 'architecture' | 'advocacy' | 'sovereignty';
  pubDate: string;
  tags: string[];
}

export const posts: Post[] = postsData as Post[];
export const getSortedPosts = () => [...posts].sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
export const getPostsByPillar = (pillar: Post['pillar']) => posts.filter(p => p.pillar === pillar);
