import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./index.js";
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
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<div class="ml-5 pt-2 sm:p-4 text-black"><h1 class="text-2xl font-semibold mb-4 inline-block"><span class="border-b-4 border-[#F34439] pb-3 pr-7">${escape(text)}</span></h1></div>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="sm:h-full w-full">
  <aside class="font-sans w-full sm:h-full mr-4 bg-[#D9D9D9] text-gray-200 flex flex-col drop-shadow-lg"><div class="sticky top-20">
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
  )}</ul></div></aside></main>`;
});
export {
  Sidebar as S
};
