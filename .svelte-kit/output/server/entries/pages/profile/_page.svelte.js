import { c as create_ssr_component, d as each, v as validate_component, a as add_attribute } from "../../../chunks/index.js";
import { E as Eventcard } from "../../../chunks/eventcard.js";
const animalCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '@import url("https://fonts.googleapis.com/css?family=Jaldi");',
  map: null
};
const AnimalCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="inline-block"><div class="flex flex-col bg-gray-200 items-center content-center h-[24rem] lg:h-auto lg:w-[15rem] rounded-xl p-3 gap-1 font-Jaldi drop-shadow-lg"><div class="flex items-center content-center gap-3"><p class="font-bold drop-shadow-md text-white text-[2.5rem] lg:text-2xl">Joe</p>
      <img class="w-[1.7rem] lg:w-[12px] lg:h-[12px]" src="/images/edit.png" alt=""></div>
    <img class="h-[10rem] lg:h-auto" src="/images/bunny.png" alt="">
    <div class="flex flex-col gap-0 items-center"><p class="mb-0 pb-0 font-bold text-[1.8rem] lg:text-base">Achieved from:</p>
      <p class="pt-0 mt-0 text-[1.8rem] lg:text-base">Art fair</p></div>
    <p class="text-[2rem] lg:text-2xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#C51FFF] to-[#FF00E5]">Epic
    </p></div>
</div>`;
});
const animalContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-1s9zayz::-webkit-scrollbar{height:13px}.svelte-1s9zayz::-webkit-scrollbar-track{background:none}.svelte-1s9zayz::-webkit-scrollbar-thumb{background:linear-gradient(\r\n      90deg,\r\n      rgba(255, 231, 0, 1) 0%,\r\n      rgba(255, 0, 0, 1) 100%\r\n    );border-radius:5px}",
  map: null
};
const AnimalContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="bg-white rounded-md p-5 drop-shadow-lg gap-4 py-12 svelte-1s9zayz"><div class="grid grid-cols-2 lg:flex lg:overflow-x-auto lg:flex-nowrap gap-7 pb-5 svelte-1s9zayz">${each({ length: 30 }, (_, i) => {
    return `${validate_component(AnimalCard, "AnimalCard").$$render($$result, {}, {}, {})}`;
  })}</div>
</div>`;
});
const eventContainer_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-1s9zayz::-webkit-scrollbar{height:13px}.svelte-1s9zayz::-webkit-scrollbar-track{background:none}.svelte-1s9zayz::-webkit-scrollbar-thumb{background:linear-gradient(\r\n      90deg,\r\n      rgba(255, 231, 0, 1) 0%,\r\n      rgba(255, 0, 0, 1) 100%\r\n    );border-radius:5px}",
  map: null
};
const EventContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="flex flex-col bg-white rounded-md drop-shadow-lg gap-4 p-12 svelte-1s9zayz"><div class="grid grid-cols-1 lg:flex lg:overflow-x-auto gap-7 pb-5 lg:py-10 lg:pl-5 svelte-1s9zayz">${each({ length: 10 }, (_, i) => {
    return `${validate_component(Eventcard, "Eventcard").$$render(
      $$result,
      {
        eventImage: "/zelda.jpeg",
        eventTitle: "ART FAIR",
        eventDate: "December 12th - 20th",
        eventLocation: "Bibliotheek, Middelburg"
      },
      {},
      {}
    )}`;
  })}</div>
</div>`;
});
const InformationCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="rounded-2xl lg:rounded-none relative lg:safari-bg flex w-full h-full lg:w-[25rem] lg:h-[22rem] drop-shadow-2xl p-0 m-0 bg-white lg:bg-none"><div class="hidden lg:block lg:absolute lg:inset-0 lg:overflow-hidden lg:rounded-xl"><img class="w-full h-full object-cover object-center blur-[8px] brightness-75" src="/images/profileBg.png" alt="Safari Background"></div>
  <div class="w-full z-10 lg:text-white mt-5 justify-self-center mx-5 text-[3.5rem] lg:text-lg"><table class="w-full text-left rtl:text-right"><tbody class=""><tr class="border-b w-full"><td>Name </td>
          <td class="">John doe </td>
          <td><img class="lg:object-fill lg:scale-100 w-[6rem] lg:w-auto" src="/images/edit.png" alt=""></td></tr>
        <tr class="border-b"><td class="pt-5">E-mail </td>
          <td class="pt-5">John@doe.ru </td></tr>
        <tr class="border-b"><td class="pt-5 pr-16 lg:pr-0">Password </td>
          <td class="pt-5"><input name="password" class="bg-transparent w-full border-transparent focus:border-transparent focus:ring-0" type="password" value="asdsad"></td></tr></tbody></table></div></div>`;
});
const ProfileCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="relative safari-bg flex lg:w-[25rem] lg:h-[22rem] drop-shadow-2xl p-0 m-0"><div class="absolute inset-0 overflow-hidden rounded-xl"><img class="w-full h-full object-cover object-center blur-[8px] brightness-75" src="/images/profileBg.png" alt="Safari Background"></div>
  <div class="w-full z-10 text-white text-center content-center self-center justify-self-center"><img class="w-[70%] lg:h-[15rem] lg:w-[15rem] mt-1 rounded-full mx-auto lg:mt-[-1rem] mb-5" src="/images/profileImage.jpg" alt="">
    
    <h1 class="text-[3rem] lg:text-[2rem] font-bold">Jane Doe</h1>
    <p class="font-bold text-[2rem] lg:text-[1rem] mt-7 lg:mt-2 mb-3 lg:mb-auto">Animal count: 1245
    </p>
    </div></div>`;
});
const SettingsCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checkbox1;
  let icon1;
  let checkbox2;
  let icon2;
  return `<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">

<div class="rounded-2xl lg:rounded-none relative safari-bg flex w-full h-full lg:w-[25rem] lg:h-[22rem] drop-shadow-2xl p-0 m-0 bg-white lg:bg-none"><div class="absolute inset-0 overflow-hidden rounded-xl"><img class="hidden lg:block w-full h-full object-cover object-center blur-[8px] brightness-75" src="/images/profileBg.png" alt="Safari Background"></div>
  <div class="w-full z-10 lg:text-white mt-5 justify-self-center mx-5 text-[3rem] lg:text-2xl"><div class="flow-root"><h1 class="float-left font-bold">Anti-aliasing</h1>
      <input id="aA" class="hidden peer" type="checkbox"${add_attribute("this", checkbox1, 0)}>
      <label id="label" for="aA" class="float-right w-[2rem] h-[2rem] lg:w-auto p-2 font-medium tracking-tight lg:h-2 cursor-pointer bg-brand-light text-brand-black border-black lg:border-white border-[3px] peer-checked:border-gray-100 lg:peer-checked:bg-black"><i class="" style="color: #ffffff;"${add_attribute("this", icon1, 0)}></i></label></div>
    <hr class="my-5">
    <div class="flow-root"><h1 class="float-left font-bold">Allow rotation</h1>
      <input id="aR" class="hidden peer" type="checkbox"${add_attribute("this", checkbox2, 0)}>
      <label id="label" for="aR" class="float-right w-[2rem] h-[2rem] lg:w-auto p-2 font-medium tracking-tight lg:h-2 cursor-pointer bg-brand-light text-brand-black border-black lg:border-white border-[3px] peer-checked:border-gray-100 lg:peer-checked:bg-black"><i class="" style="color: #ffffff;"${add_attribute("this", icon2, 0)}></i></label></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let settings;
  let animals;
  let information;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<meta name="viewport" content="">

<div class="w-full"><div class="mt-5 grid grid-cols-1 lg:grid-cols-3 justify-items-center text-2xl gap-y-4"><p class="font-bold hidden lg:block">Profile</p>
    <p class="font-bold hidden lg:block">Settings</p>
    <p class="font-bold hidden lg:block">Information</p>

    <div class="w-[90%] lg:w-auto flex justify-center lg:block h-[50rem] lg:h-auto">${validate_component(ProfileCard, "ProfileCard").$$render($$result, {}, {}, {})}</div>
    <div class="hidden lg:block">${validate_component(SettingsCard, "SettingsCard").$$render($$result, {}, {}, {})}</div>
    <div class="hidden lg:block">${validate_component(InformationCard, "InformationCard").$$render($$result, {}, {}, {})}</div></div>

  <div class="grid grid-cols-3 place-items-center mt-5 text-[3rem] lg:hidden py-5"><p${add_attribute("this", settings, 0)}>Settings</p>
    <p${add_attribute("this", animals, 0)}>Animals</p>
    <p${add_attribute("this", information, 0)}>Information</p></div>

  ${`<div class="flex justify-center py-10 lg:hidden"><div class="w-[95%] h-[25rem]">${validate_component(SettingsCard, "SettingsCard").$$render($$result, {}, {}, {})}</div></div>`}
  ${``}
  ${``}

  <div class="hidden lg:block"><div class="flex justify-center lg:block"><h2 class="text-2xl font-bold mt-10 mb-5 lg:y-5 lg:ml-14">Animals</h2></div>
    <div class="flex justify-center lg:block"><div class="lg:ml-14 lg:mr-14 w-[90%] lg:w-auto">${validate_component(AnimalContainer, "AnimalContainer").$$render($$result, {}, {}, {})}</div></div>

    <div class="flex justify-center lg:block"><h2 class="text-2xl font-bold mt-10 mb-6 lg:y-5 lg:ml-14">My events</h2></div>

    <div class="flex justify-center lg:block pb-10"><div class="lg:ml-14 lg:mr-14 lg:w-auto">${validate_component(EventContainer, "EventContainer").$$render($$result, {}, {}, {})}</div></div></div>
</div>`;
});
export {
  Page as default
};
