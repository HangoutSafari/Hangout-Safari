<script>
  import { page } from "$app/stores";

  function delteCookies() {
    const cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
</script>

<nav class="backdrop-blur pt-4 pb-4">
  <div class="flex flex-row md:justify-between justify-center">
    <div
      class="logo-container md:block hidden ml-8 lg:flex lg:flex-col lg:items-center"
    >
      <a href="/dashboard" class="flex items-center">
        <img
          src="/images/logo.jpg"
          alt="Logo"
          class="rounded-tr-[40px] rounded-br-[40px] rounded-bl-[40px] object-cover w-16 h-16"
        />
        <span class="ml-4 font-bold text-2xl">Safari Hangout</span>
        <div class="ml-6">
          <a
            on:click={delteCookies}
            href="/login"
            class=" text-red-400 hover:text-lg duration-150"
          >
            Logout
          </a>
        </div>
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
      <div class="md:order-3 order-2 flex flex-col items-center">
        <a
          href="/dashboard"
          class="font-semibold order-1 py-1 background text-black rounded-full md:mr-1 duration-300 ease-in-out"
        >
          <i
            class:shadow={$page.url.pathname == "/dashboard"}
            class="fa-solid fa-house p-2 text-2xl rounded-full hover:p-4 duration-150 bg-black text-white md:mr-8"
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
