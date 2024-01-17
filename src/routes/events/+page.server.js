export const load = async (serverLoadEvent) => {
  try {
    const { fetch } = serverLoadEvent;
    let res = await fetch(`http://localhost:3010/events/free/categories`);
    const categories = await res.json();

     res = await fetch(`http://localhost:3010/events/free/`);
    const events = await res.json();

    return { categories,events };
  } catch (error) {
    return {
      error,
    };
  }
};