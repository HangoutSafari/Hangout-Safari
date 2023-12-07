export const load = async (serverLoadEvent) => {
  try {
    const { fetch } = serverLoadEvent;
    const res = await fetch(`http://msanimals:3013/animals`);
    const items = await res.json();
    return { items };
  } catch (error) {
    return {
      error,
    };
  }
};
