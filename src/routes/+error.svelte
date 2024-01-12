<script lang="ts">
    export let status: number;
  </script>
  
  <div class="flex flex-col items-center justify-start min-h-screen pt-20 pb-4">
    <img 
      src={status === 500 ? "../../images/error500.png" : 
           status === 403 ? "../../images/error403.png" :
           "../../images/error404.png"} 
      alt="Error" 
      class="w-3/4 max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg mb-12 mt-2" 
    />
  
    <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4">
      {status === 500 ? "Oops! Something went wrong on our server. 😵" :
       status === 403 ? "Access Denied. 🚫" :
       "Oh no! We couldn't find that page 😢"}
    </h1>
    <p class="text-center mb-10">
      {status === 500 ? "Please try again later." :
       status === 403 ? "You don't have permission to view this page." :
       "But don't worry, you can find plenty of other things on our homepage."}
    </p>
  
    <a href="/" 
       class="{status === 500 ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700' :
               status === 403 ? 'bg-red-500 hover:bg-red-600 active:bg-red-700' :
               'bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 active:from-pink-700 active:to-orange-700'} rounded-full text-white px-7 py-3 font-bold text-lg md:text-xl uppercase shadow-lg transition duration-300 ease-in-out pulse">
      Back Home
    </a>
  </div>
  
  
  <style>
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
    .pulse {
      animation: pulse 2s infinite;
    }
  </style>
  