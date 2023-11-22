import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const Login = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body><div class="flex p-5 justify-center self-center text-center items-center z-30"><div class="bg-white p-5 rounded shadow-2xl w-96"><h2 class="text-2xl font-semibold text-gray-500 mb-4">LOG IN</h2>
      <form><div class="mb-4"><input type="text" class="w-full px-3 py-2 focus:outline-none focus:ring focus:ring-orange-500" placeholder="E-mail">
          <hr class="border-2 rounded border-orange-400"></div>
        <div class="mb-4"><input type="password" class="w-full px-3 py-2 focus:outline-none focus:ring focus:ring-orange-500" placeholder="Password">
          <hr class="border-2 rounded border-orange-400"></div>
        <button type="submit" class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-orange-500">SUBMIT</button>
        <a class="text-gray-500 hover:text-gray-700 float-left md:text-sm text-xs underline" href="/login">Forgot Password</a>
        <br>
        <br></form>
      <div class="relative flex py-5 items-center"><div class="flex-grow border-t border-gray-400"></div>
        <span class="flex-shrink mx-4 text-gray-400">No account yet?</span>
        <div class="flex-grow border-t border-gray-400"></div></div>
      <button type="submit" class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-orange-500">Register</button></div></div></body>`;
});
const Circle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex justify-center items-center z-20 w-full h-full"><div class="w-[650px] h-[635px] self-center rounded-full bg-gradient-to-tr from-amber-400 via-amber-500 to-red-600"></div></div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body>
  <nav class="background mt-2"><div class="container mx-auto flex md:justify-between justify-center items-center"><div class="desktop ml-2"><a href="/"><img src="your_logo_path.jpg" alt="Logo"></a></div>
      
      <div class="flex items-center space-x-4">
        <a href="/events" class="font-semibold order-1 px-8 py-4 shadow-lg bg-white text-black rounded hover:bg-gray-300">Events
        </a>
        
        
        <a href="/profile" class="font-semibold md:order-3 order-2 md:shadow-none shadow-lg px-5 py-4 bg-white md:bg-transparent text-black rounded hov">icon
        </a>
        
        <a href="/safari" class="font-semibold md:order-2 order-3 shadow-lg px-8 py-4 bg-white text-black rounded hover:bg-gray-300">Safari
        </a></div></div></nav></body>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<body class="background w-full h-full justify-center overflow-x-hidden">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  <div class="h-screen flex flex-col items-center justify-center"><div class="">${validate_component(Circle, "Circle").$$render($$result, {}, {}, {})}</div>
    <div class="absolute z-10">${validate_component(Login, "Login").$$render($$result, {}, {}, {})}</div></div></body>`;
});
export {
  Page as default
};
