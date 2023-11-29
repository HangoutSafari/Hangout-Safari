import { c as create_ssr_component, e as escape } from "./index.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<div class="ml-5 py-2 sm:p-4 text-black"><h1 class="${"text-2xl font-semibold mb-4 " + escape($$props.class, true)}"><span class="border-b-4 border-[#F34439] pb-3 pr-7">${escape(text)}</span></h1></div>`;
});
export {
  Header as H
};
