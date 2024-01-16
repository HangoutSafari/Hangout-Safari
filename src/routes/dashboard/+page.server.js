export const load = async (serverLoadEvent) => {
    try {
      const { fetch } = serverLoadEvent;
    //   let res = await fetch(`http://localhost:3010/users/dashboards/865d3935-4316-49cc-b672-beb8413b542a/`);
    //   const users = await res.json();

      let res = await fetch(`http://localhost:3010/users/dashboards/`);
      const users = await res.json();

      return { users };
    } catch (error) {
        return {
            error,
        };
    }
};  