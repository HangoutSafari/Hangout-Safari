<script>
  import { image_path } from "./../../create/store.js";
  import Map from "$lib/components/eventPage/Map.svelte";
  import FormAddress from "$lib/components/form/FormAddress.svelte";
  import FormDate from "$lib/components/form/FormDate.svelte";
  import FormDescription from "$lib/components/form/FormDescription.svelte";
  import FormImage from "$lib/components/form/FormImage.svelte";
  import FormTime from "$lib/components/form/FormTime.svelte";
  import FormTitle from "$lib/components/form/FormTitle.svelte";
  import { lat, long } from "$lib/components/form/store.js";
  import { address } from "../../create/store.js";
  export let data;
  const event = {
    title: data.title,
    date: data.date,
    time_start: data.time_start,
    time_end: data.time_end,
    description: data.description,
    address: data.address,
    street: data.address.split(", ")[0],
    city: data.address.split(", ")[1],
    image: data.image_path,
  };
  let addressValue = "";
  let longValue;
  let latValue;
  image_path.set(event.image);
  address.set(event.address);
  address.subscribe(async (value) => {
    const promise = await fetch(
      `https://geocode.xyz/${value}?geoit=json&auth=180705050001809255650x22389&region=NL`
    );

    const response = promise.json();
    const geoData = await response;
    lat.set(geoData.latt);
    long.set(geoData.longt);
    addressValue = $address;
    latValue = $lat;
    longValue = $long;
  });
</script>

<form
  class="w-[80%] mx-auto my-2 py-8"
  method="POST"
  enctype="multipart/form-data"
>
  <h1 class="text-2xl font-bold mb-10">Edit the event: {event.title}</h1>

  <div
    class="w-[90%] md:grid md:grid-cols-3 md:grid-rows-5 md:gap-x-8 md:gap-y-8 flex flex-col gap-4 mx-auto"
  >
    <FormTitle class="2xl:w-[350px]" value={event.title} />
    <FormTime
      id="time-start"
      class="2xl:w-[350px]"
      value={event.time_start}
      name="time_start"
    />
    <FormTime
      id="time-end"
      class="2xl:w-[350px]"
      value={event.time_end}
      name="time_end"
    />

    <FormDescription
      class="row-span-1 2xl:w-[350px]"
      value={event.description}
    />
    <FormAddress
      class="2xl:w-[350px] relative"
      value={event.street}
      cityName={event.city}
    />
    <FormDate class="2xl:w-[350px]" value={event.date} />

    <Map class="min-h-[200px] 2xl:min-h-[0] min-w-full row-span-3 col-span-2" />
    <FormImage class="2xl:w-[350px] row-span-2 row-start-3" />
    <input type="hidden" name="address" bind:value={addressValue} />
    <input type="hidden" name="lat" bind:value={latValue} />
    <input type="hidden" name="long" bind:value={longValue} />
    <input type="hidden" name="host_id" bind:value={data.user.id} />
    <input type="hidden" name="image_path" bind:value={$image_path} />
    <div
      class="flex justify-start xl:ml-8 items-center md:col-span-1 xs:row-start-5"
    >
      <a
        href="/events/{data.id}"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 md:py-3 md:px-7 rounded-xl transition duration-300 ease-in-out hover:scale-110"
      >
        Cancel
      </a>
      <button
        type="submit"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 md:py-3 md:px-7 rounded-xl ml-4 xl:ml-10 transition duration-300 ease-in-out hover:scale-110"
      >
        Edit
      </button>
    </div>
  </div>
</form>
