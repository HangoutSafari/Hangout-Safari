import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { S as Sidebar } from "../../../chunks/sidebar.js";
import { E as Eventcard } from "../../../chunks/eventcard.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="bg-[#e7e4e4] sm:flex"><div class="z-50 top-0 basis-[389px]">${validate_component(Sidebar, "SideNavBar").$$render($$result, {}, {}, {})}</div>

  
  <div class="mx-3 sm:mx-0 sm:basis-[100%] sm:pb-16 sm:pl-16 sm:pr-6 inline-block"><h1 class="mt-4 sm:mt-0 text-4xl font-bold mb-5">Events</h1>

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
