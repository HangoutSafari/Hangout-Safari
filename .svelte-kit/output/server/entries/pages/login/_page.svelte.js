import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { C as Circle } from "../../../chunks/circle.js";
/* empty css                                                    */const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body><div class="flex p-5 justify-center self-center text-center items-center z-30"><div class="bg-white p-5 rounded shadow-2xl w-72 md:w-96"><h2 class="text-2xl font-semibold text-gray-500 mb-4">LOG IN</h2>
      <form><div class="mb-4"><i class="fa-regular fa-envelope absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
          <input type="text" class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400" placeholder="E-mail">
          ${`<hr class="border-2 rounded border-orange-400">`}
          ${``}</div>
        <div class="mb-4"><i class="fa-solid fa-key absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
          <input type="password" class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400" placeholder="Password">
          ${`<hr class="border-2 rounded border-orange-400">`}
          ${``}</div></form>
        <button type="submit" class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07]">SUBMIT</button>
        <a class="text-gray-500 hover:text-gray-700 float-left md:text-sm text-xs underline" href="/login">Forgot Password</a>
        <br>
        <br>
      <div class="relative flex py-5 items-center"><div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-gray-400">No account yet?</span>
        <div class="flex-grow border-t border-gray-400"></div></div>
      <button type="submit" class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07]">Register</button></div></div></body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="background w-full h-full justify-center overflow-x-hidden"><div class="h-screen flex flex-col items-center justify-center"><div class="">${validate_component(Circle, "Circle").$$render($$result, {}, {}, {})}</div>
    <div class="absolute z-10">${validate_component(Login, "Login").$$render($$result, {}, {}, {})}</div></div></div>`;
});
export {
  Page as default
};
