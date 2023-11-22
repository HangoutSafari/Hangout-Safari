import { c as create_ssr_component } from "../../chunks/index.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Layout as default
};
