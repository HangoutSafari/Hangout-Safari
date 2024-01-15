export const load = async (serverLoadEvent) => {
  try {
    const { fetch } = serverLoadEvent;

    const res = await fetch(`http://localhost:3010/animals/auth/full`, {
        credentials: "include"  
    });

    const animals = await res.json();
    return { animals };

  } catch (error) {
    return {
      error,
    };
  }
};