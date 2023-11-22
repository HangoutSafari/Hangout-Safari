import { c as create_ssr_component, s as subscribe, b as add_attribute, v as validate_component } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
/* empty css                                                 */const app = "";
const css = {
  code: "@media screen and (max-width: 768px){.hov.svelte-166g527:hover{background-color:#d1d5db}}@media screen and (min-width: 768px){.hov.svelte-166g527:hover{background-color:#f2f2f2}}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<body class="background"><nav class="mt-2 bg-transparent "><div class="container mx-auto flex md:justify-between justify-center items-center"><div class="logo-container md:block hidden ml-8"><a href="/" class="flex items-center"><img src="/images/logo.jpg" alt="Logo" class="rounded-full object-cover w-20 h-20">
        <span class="ml-2 font-bold text-2xl">Safari Hangout</span></a></div>
      <div class="flex items-center space-x-4"><div${add_attribute("class", $page.url.pathname == "/events" ? "pt-11" : "", 0)}><a href="/events" class="font-semibold order-1 px-8 py-4 shadow-lg bg-white text-black rounded hover:bg-gray-300">Events
            </a>
            ${$page.url.pathname == "/events" ? `<hr class="w-full h-1.5 mx-auto my-5 bg-gradient-to-r from-[#ffe700] to-[#ff0000] rounded ">` : ``}</div>
        <div class="md:order-3 order-2"><div${add_attribute("class", $page.url.pathname == "/profile" ? "pt-9" : "", 0)}><a href="/profile " class="active font-semibold md:shadow-none shadow-lg px-5 py-4 bg-white md:bg-transparent text-black rounded hov svelte-166g527"><i class="fa-solid fa-user p-2 text-2xl rounded-full bg-black text-white"></i></a>
            ${$page.url.pathname == "/profile" ? `<hr class="w-full h-1.5 mx-auto my-5 bg-gradient-to-r from-[#ffe700] to-[#ff0000] rounded ">` : ``}</div></div>
        <div class="md:order-2 order-3"><div${add_attribute("class", $page.url.pathname == "/safari" ? "pt-11" : "", 0)}><a href="/safari" class="active font-semibold shadow-lg px-8 py-4 bg-white text-black rounded hover:bg-gray-300">Safari
            </a>
            ${$page.url.pathname == "/safari" ? `<hr class="w-full h-1.5 mx-auto my-5 bg-gradient-to-r from-[#ffe700] to-[#ff0000] rounded ">` : ``}</div></div></div></div></nav>
</body>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  "../lib/components/layout/navbar.svelte";
  return `<head>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"></head>
  ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
