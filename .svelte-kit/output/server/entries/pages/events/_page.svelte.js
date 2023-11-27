import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { H as Header } from "../../../chunks/header.js";
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
const Eventcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eventImage } = $$props;
  let { eventTitle } = $$props;
  let { eventDate } = $$props;
  let { eventLocation } = $$props;
  let buttonBackgroundColor = "bg-[#BCBCBC]";
  let buttonInnerText = "Join now";
  if ($$props.eventImage === void 0 && $$bindings.eventImage && eventImage !== void 0)
    $$bindings.eventImage(eventImage);
  if ($$props.eventTitle === void 0 && $$bindings.eventTitle && eventTitle !== void 0)
    $$bindings.eventTitle(eventTitle);
  if ($$props.eventDate === void 0 && $$bindings.eventDate && eventDate !== void 0)
    $$bindings.eventDate(eventDate);
  if ($$props.eventLocation === void 0 && $$bindings.eventLocation && eventLocation !== void 0)
    $$bindings.eventLocation(eventLocation);
  return `<div class="flex flex-col items-center gap-2 drop-shadow-lg bg-slate-100 rounded-lg transition ease-in-out delay-150 hover:scale-110">
    <div class="h-[135px] w-full">
        <img${add_attribute("src", eventImage, 0)} alt="Event Image" class="object-cover w-full h-full rounded-t-lg"></div>

    
    <div class="w-full"><h1 class="pl-4 text-lg">${escape(eventTitle)}</h1></div>

    
    <div class="w-full flex sm:flex-row items-center py-2 text-[#565656]/75"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full g-4">
            <div class="sm:w-1/2 flex items-center"><i class="pl-4 sm:pl-0 mr-4 fa-solid fa-calendar fa-lg sm:ml-4"></i>
                <h1 class="text-sm mr-4 sm:mr-0">${escape(eventDate)}</h1></div>

            
            <div class="sm:w-1/2 flex items-center sm:justify-end"><i class="pl-4 sm:pl-0 mr-4 fa-solid fa-location-dot fa-lg"></i>
                <h1 class="text-sm sm:mr-4">${escape(eventLocation)}</h1></div></div></div>

    <div class="hidden px-4 pb-2 w-full h-full sm:flex items-center justify-center">
        <button${add_attribute(
    "class",
    `
            ${buttonBackgroundColor} h-6 w-full
            ${"hover:bg-blue-500 duration-300 ease-in-out hover:drop-shadow"}
            sm:flex items-center justify-center rounded-xl text-white text-sm self-center`,
    0
  )}>${escape(buttonInnerText)}</button></div></div>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="font-sans bg-[#F2F2F2]">
  <aside class="sm:fixed z-10 sticky top-0 bg-[#D9D9D9] text-gray-200 sm:h-full lg:flex flex-col drop-shadow-lg w-full sm:w-80">
    ${validate_component(Header, "Header").$$render($$result, { text: "Categories" }, {}, {})}

    
    <label for="search" class="m-5 h-8 bg-[#BBBBBB] flex items-center rounded-xl focus-within:border-4 border-sky-400/30"><i class="fas fa-search mx-2"></i>
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
  )}</ul></aside>

  
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


  </style>

  
  <div class="mx-3 sm:mx-0 sm:ml-80 sm:py-16 sm:pl-16 sm:pr-6 block"><h1 class="mt-4 sm:mt-0 text-4xl font-bold mb-5">Events</h1>

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
  )}</div></div></body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<body><div>${validate_component(Sidebar, "SideNavBar").$$render($$result, {}, {}, {})}</div></body>`;
});
export {
  Page as default
};
