import { c as create_ssr_component, s as subscribe, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
/* empty css                                                 */const app = "";
const css = {
  code: ".active.svelte-30mzwn{background:linear-gradient(to right, #F34439, #FF8D07);color:white}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<body><nav class="backdrop-blur pt-2"><div class="container mx-auto flex md:justify-between justify-center items-center"><div class="logo-container md:block hidden ml-8"><a href="/" class="flex items-center"><img src="/images/logo.jpg" alt="Logo" class="rounded-full object-cover w-20 h-20">
        <span class="ml-2 font-bold text-2xl">Safari Hangout</span></a></div>
      <div class="flex items-center space-x-4"><a href="/events" class="${[
    "font-semibold order-1 px-8 py-4 shadow-lg bg-white text-black rounded hover:px-9 hover:py-5 duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg svelte-30mzwn",
    $page.url.pathname == "/events" ? "active" : ""
  ].join(" ").trim()}">Events
            </a>
        <div class="md:order-3 order-2"><a href="/profile" class="${[
    "font-semibold order-1 px-3 py-4 background text-black rounded md:mr-1 hover:px-4 hover:py-5 duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg svelte-30mzwn",
    $page.url.pathname == "/profile" ? "active" : ""
  ].join(" ").trim()}"><i class="fa-solid fa-user p-2 text-2xl rounded-full bg-black text-white"></i></a></div>
        <div class="md:order-2 order-3"><a href="/safari" class="${[
    "font-semibold order-1 px-8 py-4 shadow-lg bg-white text-black rounded hover:px-9 hover:py-5 duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg svelte-30mzwn",
    $page.url.pathname == "/safari" ? "active" : ""
  ].join(" ").trim()}">Safari
            </a></div></div></div></nav>
</body>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  "../lib/components/layout/navbar.svelte";
  return `<head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></head>

<div><div class="z-50 sm:sticky top-0 bg-white-500"></div>

  <div class="background h-full"><div class="z-50 sticky top-0 bg-white-500">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</div>
    ${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export {
  Layout as default
};
