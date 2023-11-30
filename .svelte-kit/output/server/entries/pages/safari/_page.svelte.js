import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/index.js";
import * as THREE from "three";
import { H as Header } from "../../../chunks/header.js";
new THREE.LoadingManager();
const RenderingContext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let renderingContext;
  return `<div id="dimentionHelper" class="w-full lg:w-[90%] h-full lg:h-full border-red-400 self-center flex flex-col items-center"><canvas class="w-full h-full rounded-md shadow-xl"${add_attribute("this", renderingContext, 0)}></canvas></div>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="sm:h-full w-full">
  <aside class="font-sans w-full sm:h-full mr-4 bg-[#D9D9D9] text-gray-200 flex flex-col drop-shadow-lg"><div class="sticky top-20">
      ${validate_component(Header, "Header").$$render(
    $$result,
    {
      text: "Categories",
      class: "hidden sm:inline-block"
    },
    {},
    {}
  )}

      
      <label for="search" class="mx-5 my-3 sm:m-5 h-8 bg-[#BBBBBB] flex items-center rounded-xl focus-within:border-4 border-sky-400/30"><i class="fas fa-search mx-2"></i>
        <input type="text" id="search" placeholder="Search..." class="outline-none border-none bg-transparent placeholder-gray-200"></label></div></aside></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[90%] w-[100%] flex flex-col lg:flex-row md:flex-row items-center background overflow-x-none overflow-y-none"><div class="sm:h-full w-full lg:w-[27%] md:w-[27%] self-start">${validate_component(Sidebar, "SideNavbar").$$render($$result, {}, {}, {})}</div>
  <div class="h-full flex flex-col w-full p-4 lg:p-10">${validate_component(RenderingContext, "RenderingContext").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
