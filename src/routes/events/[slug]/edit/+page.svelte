<script>
  import Map from "$lib/components/eventPage/Map.svelte";
  import FormAddress from "$lib/components/form/FormAddress.svelte";
  import FormDate from "$lib/components/form/FormDate.svelte";
  import FormDescription from "$lib/components/form/FormDescription.svelte";
  import FormImage from "$lib/components/form/FormImage.svelte";
  import FormTime from "$lib/components/form/FormTime.svelte";
  import FormTitle from "$lib/components/form/FormTitle.svelte";

  const event = {
    title: "Food Lovers",
    date: "2023-12-15",
    time_start: "13:30",
    time_end: "15:30",
    description: "An event where you can try all kinds of food!",
    address: "Middelburg",
    image: "/images/FoodAndDrinkDesignColour.svg",
  };
</script>

<div class="w-[80%] mx-auto my-2 py-8">
  <h1 class="text-2xl font-bold mb-10">Edit the event: {event.title}</h1>

  <div
    class="w-[90%] md:grid md:grid-cols-3 md:grid-rows-5 md:grid-flow-row md:gap flex flex-col gap-4 -8 mx-auto"
  >
    <FormTitle class="2xl:w-[350px]" value={event.title} />
    <FormTime id="time-start" class="2xl:w-[350px]" value={event.time_start} />
    <FormTime id="time-end" class="2xl:w-[350px]" value={event.time_end} />

    <FormDescription
      class="row-span-2 2xl:w-[350px]"
      value={event.description}
    />

    <FormAddress class="2xl:w-[350px]" value={event.address} />
    <FormDate class="2xl:w-[350px]" value={event.date} />

    <Map class="min-h-[200px] 2xl:min-h-[0] min-w-full row-span-3 col-span-2" />
    <FormImage class="2xl:w-[350px] row-span-2" value={event.image} />
  </div>
</div>
