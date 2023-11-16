export const load = async (serverLoadEvent) => {
    try {
      const { fetch } = serverLoadEvent;
      const res = await fetch(`http://localhost:3010/animals`);
      const items = await res.json();
      return { items };
    } catch (error) {
      return {
        error,
      };
    }
  };
  
import { error } from '@sveltejs/kit';


export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);

	if (!post) throw error(404);

	return {
		post
	};
}