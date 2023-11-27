import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { H as Header } from "../../../chunks/header.js";
import { E as Eventcard } from "../../../chunks/eventcard.js";
const Category = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { text } = $$props;
  icon = icon + " mr-2";
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<li><button class="w-32 sm:w-64 sm:hover:w-72 duration-300 ease-in-out h-12 flex bg-white hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg focus:outline-none focus:ring text-black hover:text-white font-bold pl-4 rounded-xl items-center"><i${add_attribute("class", icon, 0)}></i>
    <span>${escape(text)}</span></button></li>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="font-sans bg-[#F2F2F2]">
  <aside class="sm:fixed bg-[#D9D9D9] text-gray-200 sm:h-full lg:flex flex-col drop-shadow-lg w-full sm:w-80">
    ${validate_component(Header, "Header").$$render($$result, { text: "Categories" }, {}, {})}

    
    <label for="search" class="mx-5 my-3 sm:m-5 h-8 bg-[#BBBBBB] flex items-center rounded-xl focus-within:border-4 border-sky-400/30"><i class="fas fa-search mx-2"></i>
      <input type="text" id="search" placeholder="Search..." class="outline-none border-none bg-transparent placeholder-gray-200"></label>

    
    <ul class="pl-5 pb-3 sm:pl-0 flex overflow-x-auto gap-4 flex-row sm:flex-col sm:items-center sm:space-y-7 sm:gap-0">${validate_component(Category, "Category").$$render($$result, { icon: "fas fa-futbol", text: "Sports" }, {}, {})}
      ${validate_component(Category, "Category").$$render($$result, { icon: "fas fa-music", text: "Music" }, {}, {})}
      ${validate_component(Category, "Category").$$render($$result, { icon: "fas fa-palette", text: "Arts" }, {}, {})}
      ${validate_component(Category, "Category").$$render(
    $$result,
    {
      icon: "fas fa-puzzle-piece",
      text: "Games"
    },
    {},
    {}
  )}</ul></aside></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main><div class="z-50 sticky top-0">${validate_component(Sidebar, "SideNavBar").$$render($$result, {}, {}, {})}</div>

  
  <div class="mx-3 sm:mx-0 sm:ml-72 sm:pb-16 sm:pl-16 sm:pr-6 block"><h1 class="mt-4 sm:mt-0 text-4xl font-bold mb-5">Events</h1>

    <div class="grid grid-cols-2 2xl:grid-cols-3 gap-8">
      ${validate_component(Eventcard, "Eventcard").$$render(
    $$result,
    {
      eventImage: "/zelda.jpeg",
      eventTitle: "ART FAIR",
      eventDate: "December 12th - 20th",
      eventLocation: "Bibliotheek, Middelburg"
    },
    {},
    {}
  )}
      ${validate_component(Eventcard, "Eventcard").$$render(
    $$result,
    {
      eventImage: "/zelda.jpeg",
      eventTitle: "ART FAIR",
      eventDate: "December 12th - 20th",
      eventLocation: "Bibliotheek, Middelburg"
    },
    {},
    {}
  )}
      ${validate_component(Eventcard, "Eventcard").$$render(
    $$result,
    {
      eventImage: "/zelda.jpeg",
      eventTitle: "ART FAIR",
      eventDate: "December 12th - 20th",
      eventLocation: "Bibliotheek, Middelburg"
    },
    {},
    {}
  )}
      ${validate_component(Eventcard, "Eventcard").$$render(
    $$result,
    {
      eventImage: "/zelda.jpeg",
      eventTitle: "ART FAIR",
      eventDate: "December 12th - 20th",
      eventLocation: "Bibliotheek, Middelburg"
    },
    {},
    {}
  )}
      ${validate_component(Eventcard, "Eventcard").$$render(
    $$result,
    {
      eventImage: "/zelda.jpeg",
      eventTitle: "ART FAIR",
      eventDate: "December 12th - 20th",
      eventLocation: "Bibliotheek, Middelburg"
    },
    {},
    {}
  )}
      ${validate_component(Eventcard, "Eventcard").$$render(
    $$result,
    {
      eventImage: "/zelda.jpeg",
      eventTitle: "ART FAIR",
      eventDate: "December 12th - 20th",
      eventLocation: "Bibliotheek, Middelburg"
    },
    {},
    {}
  )}
      ${validate_component(Eventcard, "Eventcard").$$render(
    $$result,
    {
      eventImage: "/zelda.jpeg",
      eventTitle: "ART FAIR",
      eventDate: "December 12th - 20th",
      eventLocation: "Bibliotheek, Middelburg"
    },
    {},
    {}
  )}
      ${validate_component(Eventcard, "Eventcard").$$render(
    $$result,
    {
      eventImage: "/zelda.jpeg",
      eventTitle: "ART FAIR",
      eventDate: "December 12th - 20th",
      eventLocation: "Bibliotheek, Middelburg"
    },
    {},
    {}
  )}
      ${validate_component(Eventcard, "Eventcard").$$render(
    $$result,
    {
      eventImage: "/zelda.jpeg",
      eventTitle: "ART FAIR",
      eventDate: "December 12th - 20th",
      eventLocation: "Bibliotheek, Middelburg"
    },
    {},
    {}
  )}</div></div>

    
    <style>::-webkit-scrollbar {
        height: 13px;
      }
  
      /* Track */
      ::-webkit-scrollbar-track {
        background: none;
      }
  
      /* Handle */
      ::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, rgba(255,231,0,1) 0%, rgba(255,0,0,1) 100%);
          border-radius: 5px;
      }
      @media (min-width: 640px) {
        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(0deg, rgba(255,231,0,1) 0%, rgba(255,0,0,1) 100%);
          border-radius: 5px;
      }
  
      ::-webkit-scrollbar {
      width: 6px;
      }
  
      }
      body {
        @media (min-width: 640px){
          max-width: 100%;
          overflow-x: hidden;
        }
      }
  
    </style></main>`;
});
export {
  Page as default
};
