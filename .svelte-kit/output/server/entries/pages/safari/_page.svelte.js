import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import * as THREE from "three";
import { H as Header } from "../../../chunks/header.js";
new THREE.LoadingManager();
const RenderingContext = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let renderingContext;
  return `<div id="dimentionHelper" class="w-full lg:w-[70%] h-[50%] lg:h-full border-red-400 self-center flex flex-col items-center"><canvas class="w-full h-full"${add_attribute("this", renderingContext, 0)}></canvas></div>`;
});
const AnimalButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { text } = $$props;
  icon = icon + " mr-2";
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<button class="w-32 hover:w-52 duration-300 ease-in-out flex bg-white hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg focus:outline-none focus:ring text-black hover:text-white font-bold pl-4 rounded-xl items-center"><p>${escape(text)}</p></button>`;
});
const AnimalList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `
    <aside class="font-sans w-screen sm:h-full lg:w-64 lg:h-[500px] mr-4 z-10 bg-[#D9D9D9] text-gray-200 lg:flex flex flex-col drop-shadow-lg ">
      ${validate_component(Header, "Header").$$render($$result, { text: "Animals" }, {}, {})}
  
      
      
  
      
      <div class="flex items-center overflow-x-auto lg:overflow-x-hidden overflow-y-auto flex-row lg:flex-col drop-shadow-lg gap-6">${validate_component(AnimalButton, "AnimalButton").$$render($$result, {}, {}, {})}
        ${validate_component(AnimalButton, "AnimalButton").$$render($$result, {}, {}, {})}
        ${validate_component(AnimalButton, "AnimalButton").$$render($$result, {}, {}, {})}
        ${validate_component(AnimalButton, "AnimalButton").$$render($$result, {}, {}, {})}
        ${validate_component(AnimalButton, "AnimalButton").$$render($$result, {}, {}, {})}
        ${validate_component(AnimalButton, "AnimalButton").$$render($$result, {}, {}, {})}
        ${validate_component(AnimalButton, "AnimalButton").$$render($$result, {}, {}, {})}
        ${validate_component(AnimalButton, "AnimalButton").$$render($$result, {}, {}, {})}
        ${validate_component(AnimalButton, "AnimalButton").$$render($$result, {}, {}, {})}
        ${validate_component(AnimalButton, "AnimalButton").$$render($$result, {}, {}, {})}</div></aside>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-[100%] flex flex-col lg:flex-row items-center background overflow-x-none overflow-y-none"><div class="flex flex-col w-full">${validate_component(RenderingContext, "RenderingContext").$$render($$result, {}, {}, {})}</div>
  <div class="flex flex-col items-start">${validate_component(AnimalList, "AnimalList").$$render($$result, {}, {}, {})}</div>
</div>`;
});
export {
  Page as default
};
