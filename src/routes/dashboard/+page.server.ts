export const load = async (serverLoadEvent) => {
    try {
        const { fetch } = serverLoadEvent;
        const userId = 1;

        let res = await fetch(`http://localhost:3012/users/${userId}`);
        const currentUser = await res.json();
        res = await fetch(`http://localhost:3012/users/${userId}/animals`);
        const userAnimals = await res.json();
        res = await fetch(`http://localhost:3012/users/${userId}/friends`);
        const userFriends = await res.json();
        res = await fetch(`http://localhost:3012/users/${userId}/events`)
        const userEvents = await res.json();
        return {
            currentUser,
            userAnimals,
            userFriends,
            userEvents,
        };
    } catch (error) {
        return {
            error,
        };
    }
};