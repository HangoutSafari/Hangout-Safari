import { c as create_ssr_component, e as each, a as escape, d as add_attribute, v as validate_component } from "../../../chunks/index.js";
import "ol/proj.js";
const ParticipantsLabel_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".participants-label.svelte-tjqbgn{display:inline-flex;justify-content:center;padding:9px 80px;background-color:#ffffff;border-radius:20px;font-weight:bold;font-size:25px;box-shadow:0 2px 4px rgba(117, 106, 106, 0.8);color:#333333;width:100%}",
  map: null
};
const ParticipantsLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `<div class="participants-label svelte-tjqbgn">PARTICIPANTS
</div>`;
});
const DescriptionLabel_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".description-label.svelte-o8kflv{display:inline-flex;justify-content:center;align-items:center;padding:8px 60px;background-color:#ffffff;border-radius:20px;font-weight:bold;font-size:28px;box-shadow:0 2px 4px rgba(117, 106, 106, 0.8);color:#333333;width:100%}",
  map: null
};
const DescriptionLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$9);
  return `<div class="description-label svelte-o8kflv">DESCRIPTION
</div>`;
});
const Participants_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".participants-container.svelte-18vwsji{background-color:#ffffff;border-radius:20px;box-shadow:0 2px 4px rgba(117, 106, 106, 0.8);padding:30px;width:100%}.participant.svelte-18vwsji{background-color:#f0f0f0;border-radius:15px;display:flex;align-items:center;margin-bottom:10px}.avatar.svelte-18vwsji{border-radius:50%;background-color:#007bff;margin-right:10px;width:40px;height:40px;display:inline-block}.name.svelte-18vwsji{font-size:15px;font-weight:bold;color:#333}",
  map: null
};
const Participants = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let participants = [
    { name: "Amy Johnson" },
    { name: "Amy Johnson" },
    { name: "Amy Johnson" },
    { name: "Amy Johnson" },
    { name: "Amy Johnson" }
  ];
  $$result.css.add(css$8);
  return `<div class="participants-container svelte-18vwsji">${each(participants, (participant) => {
    return `<div class="participant svelte-18vwsji"><div class="avatar svelte-18vwsji"></div>
            <span class="name svelte-18vwsji">${escape(participant.name)}</span>
        </div>`;
  })}
</div>`;
});
const Description_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".description-box.svelte-1oguitu{background-color:#f9f9f9;border-radius:20px;box-shadow:0 2px 4px rgba(117, 106, 106, 0.8);padding:40px;margin:10px;width:100%;min-height:250px}.address.svelte-1oguitu{font-weight:bold;margin-bottom:20px}.description.svelte-1oguitu{line-height:1.4;text-align:justify;margin-top:10px}",
  map: null
};
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { address = "Achter de Houttuinen 50, 4331 NJ Middelburg (Honney PIE Coffe)" } = $$props;
  let { description = "Join us for a gathering to discuss a diverse array of foods, from local delights to global flavors. Let's celebrate our love for culinary exploration and share our passion for all things delicious!" } = $$props;
  if ($$props.address === void 0 && $$bindings.address && address !== void 0)
    $$bindings.address(address);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$7);
  return `<div class="description-box svelte-1oguitu"><p class="address svelte-1oguitu">${escape(address)}</p>
    <p class="description svelte-1oguitu">${escape(description)}</p>
</div>`;
});
const TitleLabel_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".title-label.svelte-94dh06{display:inline-flex;justify-content:center;align-items:center;padding:8px 60px;background-color:#ffffff;border-radius:20px;font-weight:bold;font-size:28px;box-shadow:0 2px 4px rgba(117, 106, 106, 0.8);color:#333333}",
  map: null
};
const TitleLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div class="title-label svelte-94dh06">FOOD LOVERS
</div>`;
});
const JoinButton_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "button.svelte-nq55rl{background-image:linear-gradient(to right, #f34439, #ff8d07);border-radius:26px;color:white;padding:10px 40px;font-weight:bold;font-size:24px;text-transform:uppercase;cursor:pointer;transition:background-image 0.3s ease;box-shadow:0 2px 4px rgba(136, 134, 134, 1)}button.svelte-nq55rl:hover{background-image:linear-gradient(to right, #e63900, #ff7c00)}button.svelte-nq55rl:active{background-image:linear-gradient(to right, #cc3300, #e66a00)}",
  map: null
};
const JoinButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<button class="svelte-nq55rl">JOIN </button>`;
});
const HostLabel_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".host-label.svelte-11szqyi{padding:25px 50px;background-color:#ffffff;border-radius:20px;font-weight:bold;font-size:28px;box-shadow:0 2px 4px rgba(117, 106, 106, 0.8);color:#333333;position:absolute;top:calc(50% + 20px);transform:translateY(-80%);left:0;display:flex;align-items:center;justify-content:center;margin-left:50px}.host-label.svelte-11szqyi::after{content:'';display:inline-block;width:60px;height:60px;background-color:blue;border-radius:50%;margin-left:50px}",
  map: null
};
const HostLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="host-label svelte-11szqyi">HOST</div>`;
});
const TimeData_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".time-data.svelte-gy8pf2{display:flex;align-items:center;background-color:#ffffff;border-radius:15px;box-shadow:0 2px 4px rgba(117, 106, 106, 0.8);padding:16px 80px;font-size:18px;color:#333}.date.svelte-gy8pf2,.time.svelte-gy8pf2{font-weight:bold}.separator.svelte-gy8pf2{width:4px;height:24px;background-color:#ff4500;margin:0 12px}",
  map: null
};
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
  $$result.css.add(css$3);
  return `<div class="time-data svelte-gy8pf2"><div class="date svelte-gy8pf2">${escape(date)}</div>
    <div class="separator svelte-gy8pf2"></div>
    <div class="time svelte-gy8pf2">${escape(startTime)} - ${escape(endTime)}</div>
</div>`;
});
const MapLabel_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".map-label.svelte-3u42gr{display:inline-flex;justify-content:center;align-items:center;padding:8px 60px;background-color:#ffffff;border-radius:20px;font-weight:bold;font-size:28px;box-shadow:0 2px 4px rgba(117, 106, 106, 0.8);color:#333333;width:100%}",
  map: null
};
const MapLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="map-label svelte-3u42gr">MAP
</div>`;
});
const Time_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".time-box.svelte-1t1rp5d{display:inline-flex;justify-content:center;align-items:center;padding:11px 60px;background-color:#ffffff;border-radius:15px;font-size:24px;font-weight:bold;box-shadow:0 2px 4px rgba(117, 106, 106, 0.8)}",
  map: null
};
const Time = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="time-box svelte-1t1rp5d">TIME
</div>`;
});
const Map_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let target;
  return `<head><link rel="stylesheet" href="node_modules/ol/ol.css"></head>
<div class="w-full h-full rounded-3xl overflow-hidden"${add_attribute("this", target, 0)}><div id="popup"></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-nk9ig9{min-height:100vh;display:flex;flex-direction:column;position:relative}.title.svelte-nk9ig9{display:flex;flex-direction:column;align-items:center;gap:20px;margin-top:200px}.upper-part.svelte-nk9ig9{flex:25;display:flex;flex-direction:column;justify-content:center;align-items:center;width:100%}.lower-part.svelte-nk9ig9{flex:3;display:flex;width:100%;align-items:flex-start;justify-content:center;background-color:#cfcfcf64}.left-part.svelte-nk9ig9,.middle-part.svelte-nk9ig9,.right-part.svelte-nk9ig9{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:18px;gap:15px}.left-part.svelte-nk9ig9{flex:1.3;margin-top:50px;margin-left:30px}.middle-part.svelte-nk9ig9{flex:1.6;margin-top:35px;gap:4px}.right-part.svelte-nk9ig9{flex:1.8;margin-top:35px;margin-right:30px;align-self:stretch}.time-container.svelte-nk9ig9{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="svelte-nk9ig9"><div class="upper-part bg-[url('/images/FoodAndDrinkDesignColour.svg')] bg-center svelte-nk9ig9"><div class="title svelte-nk9ig9">${validate_component(TitleLabel, "TitleLabel").$$render($$result, {}, {}, {})}
            ${validate_component(JoinButton, "JoinButton").$$render($$result, {}, {}, {})}</div>
        ${validate_component(HostLabel, "HostLabel").$$render($$result, {}, {}, {})}</div>
    <div class="lower-part svelte-nk9ig9"><div class="left-part svelte-nk9ig9">${validate_component(ParticipantsLabel, "ParticipantsLabel").$$render($$result, {}, {}, {})}
            ${validate_component(Participants, "Participants").$$render($$result, {}, {}, {})}</div>
        <div class="middle-part svelte-nk9ig9">${validate_component(DescriptionLabel, "DescriptionLabel").$$render($$result, {}, {}, {})}
            ${validate_component(Description, "Description").$$render($$result, {}, {}, {})}
            <div class="time-container svelte-nk9ig9">${validate_component(Time, "Time").$$render($$result, {}, {}, {})}
                ${validate_component(TimeData, "TimeData").$$render($$result, {}, {}, {})}</div></div>
        <div class="right-part svelte-nk9ig9">${validate_component(MapLabel, "MapLabel").$$render($$result, {}, {}, {})}
            ${validate_component(Map_1, "Map").$$render($$result, {}, {}, {})}</div></div>
</main>`;
});
export {
  Page as default
};
