<script>
import {page} from '$app/stores';
import IsActive from './isActive.svelte';


</script>

<body class="background">
  <nav class="mt-2 bg-transparent ">
    <div
      class=" container mx-auto flex md:justify-between justify-center items-center"
    >
    <div  class="logo-container md:block hidden ml-8">
      <a href="/" class="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" class="rounded-full object-cover w-20 h-20" />
        <span class="ml-2 font-bold text-2xl">Safari Hangout</span>
      </a>
    </div>
      <div class="flex items-center space-x-4">
        <div class={$page.url.pathname == '/events' ? "pt-11" : ""}>
            <a href="/events"
              class=" font-semibold order-1 px-8 py-4 shadow-lg bg-white text-black rounded hover:bg-gray-300"
            >
              Events
            </a>
            {#if $page.url.pathname == '/events' }
              <IsActive></IsActive>
            {/if}
        </div>
        <div class="md:order-3 order-2">
          <div class={$page.url.pathname == '/profile' ? "pt-9" : ""}>
            <a href="/profile " 
              class="active font-semibold  md:shadow-none shadow-lg px-5 py-4 bg-white md:bg-transparent text-black rounded hov"
              >
              <i class="fa-solid fa-user p-2 text-2xl rounded-full bg-black text-white"></i>
             
            </a>
            {#if $page.url.pathname == '/profile' }
              <IsActive></IsActive>            
            {/if}
          </div>
        </div>
        <div class="md:order-2 order-3">
         <div class={$page.url.pathname == '/safari' ? "pt-11" : ""}>
            <a href="/safari"
              class="active font-semibold  shadow-lg px-8 py-4 bg-white text-black rounded hover:bg-gray-300"
            >
              Safari
            </a>
            {#if $page.url.pathname == '/safari' }
              <IsActive></IsActive>            
            {/if}
          </div> 
         </div> 
      </div>
    </div>
  </nav>
</body>
<style>
  @media screen and (max-width: 768px) {
  .hov:hover {
    background-color: #d1d5db;
  }
}
@media screen and (min-width: 768px) {
  .hov:hover {
    background-color: #f2f2f2;
  }
}
</style>