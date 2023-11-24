export const load = async (serverLoadEvent) => {
  try {
    return "";
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
