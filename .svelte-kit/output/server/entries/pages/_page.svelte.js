import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="h-full w-full flex flex-col items-center background"><h1 class="text-3xl justify-start pt-3">Welcome, to Safari Hangout</h1>
    <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"><\/script> 
    <dotlottie-player src="https://lottie.host/af1710d7-649a-4b4f-83ab-7764ee7f796d/BHFb90wVs9.json" background="transparent" speed="2" style="width: 65%; height: 65%;" autoplay></dotlottie-player>
    <div class="justify-center flex"><button type="submit" class="w-44 h-10 bg-orange-300 font-bold text-black py-2 rounded-md hover:text-black hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07]">Register</button></div>
</main>`;
});
export {
  Page as default
};
