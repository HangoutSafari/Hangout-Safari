import { c as create_ssr_component, d as each, e as escape, a as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import "ol/proj.js";
const ParticipantsLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="inline-flex items-center justify-center px-15 py-2.5 bg-white rounded-2xl font-bold text-3xl shadow-[0_4px_6px_rgba(117,106,106,0.8)] text-gray-800 w-full">PARTICIPANTS
</div>`;
});
const DescriptionLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="description-label inline-flex items-center justify-center px-20 py-2.5 bg-white rounded-2xl font-bold text-3xl shadow-[0_4px_6px_rgba(117,106,106,0.8)] text-gray-800 w-full">DESCRIPTION
</div>`;
});
const Participants = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let participants = [
    { name: "Amy Johnson" },
    { name: "Amy Johnson" },
    { name: "Amy Johnson" },
    { name: "Amy Johnson" },
    { name: "Amy Johnson" }
  ];
  return `<div class="bg-white rounded-2xl shadow-[0_4px_6px_rgba(117,106,106,0.8)] p-7 w-full h-full">${each(participants, (participant) => {
    return `<div class="bg-[#f0f0f0] rounded-md flex items-center mb-2.5"><div class="w-10 h-10 rounded-full bg-blue-500 mr-2.5"></div>
            <span class="text-sm font-bold text-gray-800">${escape(participant.name)}</span>
        </div>`;
  })}</div>`;
});
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { address = "Achter de Houttuinen 50, 4331 NJ Middelburg (Honney PIE Coffe)" } = $$props;
  let { description = "Join us for a gathering to discuss a diverse array of foods, from local delights to global flavors. Let's celebrate our love for culinary exploration and share our passion for all things delicious!" } = $$props;
  if ($$props.address === void 0 && $$bindings.address && address !== void 0)
    $$bindings.address(address);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  return `<div class="description-box bg-[#f9f9f9] rounded-2xl shadow-[0_4px_6px_rgba(117,106,106,0.8)] p-10 m-2.5 w-full min-h-[250px]"><p class="address font-bold mb-5">${escape(address)}</p>
    <p class="description leading-7 text-justify mt-2.5">${escape(description)}</p></div>`;
});
const TitleLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="title-label inline-flex items-center justify-center px-16 py-3 bg-white rounded-full font-bold text-3xl shadow-[0_4px_6px_rgba(117,106,106,0.8)] text-gray-800">FOOD LOVERS
</div>`;
});
const JoinButton_svelte_svelte_type_style_lang = "";
const css = {
  code: ".join-btn.svelte-17xudv1:hover{background-image:linear-gradient(to right, #e63900, #ff7c00)}.join-btn.svelte-17xudv1:active{background-image:linear-gradient(to right, #cc3300, #e66a00)}",
  map: null
};
const JoinButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<button class="join-btn bg-gradient-to-r from-[#f34439] to-[#ff8d07] rounded-full text-white px-14 py-3 font-bold text-xl uppercase cursor-pointer shadow-[0_4px_6px_rgba(117,106,106,0.8)] transition-all duration-300 ease-in-out svelte-17xudv1">JOIN
</button>`;
});
const HostLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_attribute(
    "class",
    `lg:py-6 lg:px-12 py-2 px-6 bg-white rounded-3xl font-bold lg:text-3xl text-lg text-[#333333] 
  flex justify-center items-center gap-6 shadow-[0_2px_4px_rgba(117,106,106,0.8)] 
  after:content-[''] after:inline-block lg:after:w-[60px] after:w-10 lg:after:h-[60px] after:h-10 after:bg-[#0000ff] after:rounded-full
  ${$$props.class}`,
    0
  )}>HOST
</div>`;
});
const TimeData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { date = "27/11/2023" } = $$props;
  let { startTime = "12:00" } = $$props;
  let { endTime = "14:00" } = $$props;
  if ($$props.date === void 0 && $$bindings.date && date !== void 0)
    $$bindings.date(date);
  if ($$props.startTime === void 0 && $$bindings.startTime && startTime !== void 0)
    $$bindings.startTime(startTime);
  if ($$props.endTime === void 0 && $$bindings.endTime && endTime !== void 0)
    $$bindings.endTime(endTime);
  return `<div${add_attribute(
    "class",
    `flex items-center justify-center gap-2 bg-white rounded-xl
    shadow-[0_2px_4px_rgba(117,106,106,0.8)]
    py-4 px-8 text-[#333] w-full
    ${$$props.class}`,
    0
  )}><div class="font-bold">${escape(date)}</div>
    <div class="separator w-[4px] h-full bg-[#ff4500] py-3"></div>
    <div class="font-bold">${escape(startTime)} - ${escape(endTime)}</div></div>`;
});
const MapLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="map-label inline-flex items-center justify-center px-20 py-2.5 bg-white rounded-2xl font-bold text-3xl shadow-[0_4px_6px_rgba(117,106,106,0.8)] text-gray-800 w-full">MAP
</div>`;
});
const TimeLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div${add_attribute("class", `${$$props.class} inline-flex items-center justify-center px-10 py-2.5 bg-white rounded-2xl font-bold text-3xl shadow-[0_4px_6px_rgba(117,106,106,0.8)] text-gray-800 w-full`, 0)}>TIME
</div>`;
});
const Map_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let target;
  return `<head><link rel="stylesheet" href="../node_modules/ol/ol.css"></head>
<div${add_attribute("class", `w-full h-full rounded-3xl overflow-hidden lg:[&>.ol-viewport]:!overflow-hidden [&>.ol-viewport]:!overflow-visible ${$$props.class}`, 0)}${add_attribute("this", target, 0)}><div id="popup"></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="min-h-screen flex flex-col lg:mt-0 mt-4"><div class="flex flex-grow bg-[url('/images/FoodAndDrinkDesignColour.svg')] bg-center flex-col items-center justify-center w-full relative"><div class="flex flex-col items-center gap-5 mt-60 mb-8 lg:mb-0">${validate_component(TitleLabel, "TitleLabel").$$render($$result, {}, {}, {})}
            ${validate_component(JoinButton, "JoinButton").$$render($$result, {}, {}, {})}</div>
        ${validate_component(HostLabel, "HostLabel").$$render(
    $$result,
    {
      class: "absolute bottom-[-20%] translate-y-[-80%] left-0 ml-4 mm:ml-12"
    },
    {},
    {}
  )}</div>
    <div class="flex flex-col lg:flex-row flex-3 w-full items-stretch justify-center bg-[#f2f2f2] sm:mt-4"><div class="flex flex-col items-center justify-start p-4 gap-3 flex-1 mt-9 ml-0 lg:ml-7 mm:mt-2 xs:mt-10">${validate_component(ParticipantsLabel, "ParticipantsLabel").$$render($$result, {}, {}, {})}
            ${validate_component(Participants, "Participants").$$render($$result, {}, {}, {})}</div>
        <div class="flex flex-col items-center justify-start p-4 gap-1 flex-1 mt-9 xs:mt-1">${validate_component(DescriptionLabel, "DescriptionLabel").$$render($$result, { class: "w-full" }, {}, {})}
            ${validate_component(Description, "Description").$$render($$result, { class: "w-full mb-6 sm:mb-4" }, {}, {})}
            <div class="block sm:hidden w-full h-4"></div>
            <div class="flex flex-col sm:flex-row justify-center items-stretch gap-3 w-full">${validate_component(TimeLabel, "TimeLabel").$$render(
    $$result,
    {
      class: "w-full text-center sm:basis-2/6 sm:text-left"
    },
    {},
    {}
  )}
                ${validate_component(TimeData, "TimeData").$$render(
    $$result,
    {
      class: "w-full text-center sm:basis-4/6 sm:text-left"
    },
    {},
    {}
  )}</div></div>        
        <div class="flex flex-col items-center justify-start self-stretch p-4 gap-3 flex-1 mt-9 mr-0 lg:mr-7 xs:mt-1">${validate_component(MapLabel, "MapLabel").$$render($$result, {}, {}, {})}
            ${validate_component(Map_1, "Map").$$render(
    $$result,
    {
      class: "min-h-[200px] lg:min-h-[0] min-w-full"
    },
    {},
    {}
  )}</div></div></main>`;
});
export {
  Page as default
};
