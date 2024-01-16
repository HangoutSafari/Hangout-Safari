<script>
  import { page } from "$app/stores";
</script>

<nav class="backdrop-blur pt-4 pb-4">
  <div class="flex md:justify-between justify-center">
    <div class="logo-container md:block hidden ml-8">
      <a href="/" class="flex items-center">
        <img
          src="/images/logo.jpg"
          alt="Logo"
          class="rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] object-cover w-16 h-16"
        />
        <span class="ml-4 font-bold text-2xl">Safari Hangout</span>
      </a>
    </div>
    <div class="flex items-center space-x-4">
      <div>
        <a
          href="/events"
          class:active={$page.url.pathname == "/events"}
          class=" font-semibold order-1 px-8 py-4 shadow-lg bg-white text-black rounded hover:px-9 hover:py-5 duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg"
        >
          Events
        </a>
      </div>
      <div class="md:order-3 order-2">
        <a
          href="/dashboard"
          class="font-semibold order-1 py-1 background text-black rounded-full md:mr-1 hover:px-3 hover:py-4 duration-300 ease-in-out"
        >
          <i
            class:shadow={$page.url.pathname == "/dashboard"}
            class="fa-solid fa-user p-2 text-2xl rounded-full bg-black text-white sm:mr-8"
          />
        </a>
      </div>
      <div class="md:order-2 order-3">
        <a
          href="/safari"
          class:active={$page.url.pathname == "/safari"}
          class=" font-semibold order-1 px-8 py-4 shadow-lg bg-white text-black rounded hover:px-9 hover:py-5 duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07] hover:drop-shadow-lg"
        >
          Safari
        </a>
      </div>
    </div>
  </div>
</nav>

<style>
  .active {
    background: linear-gradient(to right, #f34439, #ff8d07);
    color: white;
  }
  .shadow {
    box-shadow: 0 0 0.25rem 0.25rem rgb(255, 130, 5);
  }
</style>
