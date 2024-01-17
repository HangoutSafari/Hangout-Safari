export async function load({ params }) {
  try {
    let res = await fetch(`http://localhost:3010/events/free/${params.slug}`);
    const event = await res.json();
    return event;
  } catch (error) {
    return { error };
  }
}
