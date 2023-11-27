<script>
import {page} from '$app/stores';


</script>


  <nav class="backdrop-blur pt-2">
    <div
      class="flex  md:justify-between justify-center"
    >
    <div  class="md:block hidden ml-4">
      <a href="/" class="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" class="rounded-full object-cover w-20 h-20" />
        <span class="ml-2 font-bold text-2xl">Safari Hangout</span>
      </a>
    </div>
      <div class="flex items-center space-x-4">
            <a href="/events" class:active={$page.url.pathname == '/events' }
            class=" font-semibold order-1 px-8 py-4 shadow-lg bg-white text-black rounded hover:px-9 hover:py-5 duration-300 ease-in-out hover:text-white  hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg">
              Events
            </a>
        <div class="md:order-3 order-2">
          <a href="/profile" class:active={$page.url.pathname == '/profile' }
            class="font-semibold order-1 px-3 py-4 pt-5 background text-black rounded md:mr-1 hover:px-4 hover:py-5 duration-300 ease-in-out hover:text-white  hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg">
              <i class="fa-solid fa-user p-2 text-2xl rounded-full bg-black text-white"></i> 
          </a>

        </div>
        <div class="md:order-2 order-3">
          <a href="/safari" class:active={$page.url.pathname == '/safari' }
          class=" font-semibold order-1 px-8 py-4 shadow-lg bg-white text-black rounded hover:px-9 hover:py-5 duration-300 ease-in-out hover:text-white  hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg">
              Safari
            </a>

         </div> 
      </div>
    </div>
  </nav>
<style>
.active {
  background: linear-gradient(to right, #F34439, #FF8D07);
  color: white;
}
</style>