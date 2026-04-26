import axios from "axios";
import https from "https";

const API_URL = process.env.WORDPRESS_API_URL as string;

if (!API_URL) {
  throw new Error("Missing WORDPRESS_API_URL in environment.");
}

export type WpRendered = {
  rendered: string;
};

export type WpPost = {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: WpRendered;
  excerpt: WpRendered;
  content: WpRendered;
  featured_media: number;
  _embedded?: any; 
};

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

async function wpFetch<T>(endpoint: string): Promise<T> {
  const response = await axios.get<T>(`${API_URL}${endpoint}`, {
    httpsAgent,
     headers: {
      "Cache-Control": "no-cache",
    },
  });

  return response.data;
}

export async function getPosts(): Promise<WpPost[]> {
  return wpFetch<WpPost[]>("/posts?per_page=10&_embed");
}

export async function getPostBySlug(slug: string) {
  const posts = await wpFetch<any[]>(
    `/posts?slug=${encodeURIComponent(slug)}&_embed`
  );

  console.log("BLOG FETCH:", slug, posts);

  return posts.length ? posts[0] : null;
}