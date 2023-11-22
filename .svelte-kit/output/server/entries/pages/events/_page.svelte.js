import { c as create_ssr_component, e as each, a as escape } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${each(data.items, (animal) => {
    return `<div><p><a href="${"/events/" + escape(animal.id, true)}">${escape(animal.name)}</a> - ${escape(animal.Specie)}</p>
      <br>
    </div>`;
  })}</div>`;
});
export {
  Page as default
};
