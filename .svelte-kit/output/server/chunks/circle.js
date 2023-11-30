import { c as create_ssr_component } from "./index.js";
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex justify-center items-center z-20 w-full h-full"><div class="w-[650px] h-[635px] self-center rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-red-600"></div></div>`;
});
export {
  Circle as C
};
