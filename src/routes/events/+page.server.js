// export const load = async (serverLoadEvent) => {
//   try {
//     const { fetch } = serverLoadEvent;
//     const res = await fetch(`http://localhost:3010/animals`);
//     const items = await res.json();
//     return { items };
//   } catch (error) {
//     return {
//       error,
//     };
//   }
// };
export const load = async (serverLoadEvent) => {
    try {
      const { fetch } = serverLoadEvent;
  
      const res = await fetch(`http://localhost:3010/events/auth/full`, {
          credentials: "include"  
      });
  
      const events = await res.json();
      return { events };
  
    } catch (error) {
      return {
        error,
      };
    }
  };
