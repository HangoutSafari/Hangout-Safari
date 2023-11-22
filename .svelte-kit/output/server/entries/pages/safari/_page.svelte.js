import { c as create_ssr_component, b as add_attribute, v as validate_component } from "../../../chunks/index.js";
import * as THREE from "three";
new THREE.LoadingManager();
const RenderingContext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let renderingContext;
  return `<div id="dimentionHelper" class="w-screen lg:w-[70%] h-[90%] border-red-400 self-center flex flex-col items-center border-4"><canvas class="w-full h-full"${add_attribute("this", renderingContext, 0)}></canvas></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full h-screen flex flex-col items-center justify-center">${validate_component(RenderingContext, "RenderingContext").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
