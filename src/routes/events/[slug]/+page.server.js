import { error } from "@sveltejs/kit";

async function getAnimals() {
  try {
    const res = await fetch(`http://localhost:3010/animals`);
    const items = await res.json();
    return { items };
  } catch (error) {
    return {
      error,
    };
  }
}

export async function load({ params }) {
  const data = await getAnimals();

  let animal = {};
  const animals = data.items;

  for (let i = 0; i < animals.length; i++) {
    if (animals[i].id == params.slug) {
      animal = {
        id: animals[i].id,
        name: animals[i].name,
        Specie: animals[i].Specie,
      };
    }
  }
  if (!animal) throw error(404);

  return {
    animal,
  };
}
