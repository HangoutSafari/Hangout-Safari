import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/index.js";
import * as THREE from "three";
import { S as Sidebar } from "../../../chunks/sidebar.js";
new THREE.LoadingManager();
const RenderingContext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let renderingContext;
  return `<div id="dimentionHelper" class="w-full lg:w-[90%] h-full lg:h-full border-red-400 self-center flex flex-col items-center"><canvas class="w-full h-full"${add_attribute("this", renderingContext, 0)}></canvas></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[90%] w-[100%] flex flex-col lg:flex-row items-center background overflow-x-none overflow-y-none"><div class="sm:h-full w-full lg:w-[27%] self-start">${validate_component(Sidebar, "SideNavbar").$$render($$result, {}, {}, {})}</div>
  <div class="h-full flex flex-col w-full p-4 lg:p-10">${validate_component(RenderingContext, "RenderingContext").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
