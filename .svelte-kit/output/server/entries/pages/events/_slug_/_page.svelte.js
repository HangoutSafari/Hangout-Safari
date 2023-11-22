import { c as create_ssr_component, a as escape } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div><h1>${escape(data.animal.name)} - ${escape(data.animal.Specie)}</h1></div>`;
});
export {
  Page as default
};
