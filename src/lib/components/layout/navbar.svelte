<script>
import {page} from '$app/stores';
</script>

<body>
  <!-- Navbar -->
  <nav class="mt-2 bg-transparent ">
    <div
      class=" container mx-auto flex md:justify-between justify-center items-center"
    >
    <div  class="logo-container desktop ml-8">
      <a href="/" class="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" class="rounded-full object-cover w-20 h-20" />
        <span class="ml-2 font-bold text-2xl">Safari Hangout</span>
      </a>
    </div>
      <!-- Navigation Buttons (Right Side) -->
      <div class="flex items-center space-x-4">
        <!-- Button 1 -->
        <a href="/events" class:active={$page.url.pathname == '/events' }
          class=" font-semibold order-1 px-8 py-4 shadow-lg bg-white text-black rounded hover:bg-gray-300"
        >
          Events
        </a>
        
        <!-- Button 2 -->
        <a href="/profile " class:active={$page.url.pathname == '/profile'}
          class="active font-semibold md:order-3 order-2 md:shadow-none shadow-lg px-5 py-4 bg-white md:bg-transparent text-black rounded hov"
        >
          icon
          
        </a>
        <!-- Button 3 -->
        <a href="/safari" class:active={$page.url.pathname == '/safari'}
          class="active font-semibold md:order-2 order-3 shadow-lg px-8 py-4 bg-white text-black rounded hover:bg-gray-300"
        >
          Safari
        </a>
      </div>
    </div>
  </nav>
</body>
