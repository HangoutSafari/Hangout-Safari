<script>
  import { goto } from '$app/navigation';
  
    const redirectToLogin  = (event) => {
    event.preventDefault();
    goto('/login');
  };
  let underlined = true;
  let underlined2 = true;
  let underlined3 = true;
  let underlined4 = true;
</script>

<body>
  <div
    class=" flex p-5 justify-center self-center text-center items-center z-30"
  >
    <div class="bg-white p-5 rounded shadow-2xl w-72 md:w-96">
      <h2 class="text-2xl font-semibold text-gray-500 mb-4">REGISTER</h2>
      <form>
        <div class="mb-4">
          <i class="fa-regular fa-user absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
            <input  on:blur={()=> underlined = true} on:click={() => underlined = false} 
              type="text"
              class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400 "
              placeholder="Username"
            />
            {#if underlined}
             <hr class="border-2 rounded border-orange-400" />
            {/if}
            {#if !underlined}
              <hr class="border-2 rounded border-transparent"/>
            {/if}
          </div>
        <div class="mb-4">
          <i class="fa-regular fa-envelope absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
          <input on:blur={()=> underlined2 = true} on:click={() => underlined2 = false}
            type="text"
            class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400"
            placeholder="E-mail"
          />
          {#if underlined2}
           <hr class="border-2 rounded border-orange-400" />
          {/if}
          {#if !underlined2}
           <hr class="border-2 rounded border-transparent"/>
          {/if}
        </div>
        <div class="mb-4">
          <i class="fa-solid fa-key absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
            <input on:blur={()=> underlined3 = true} on:click={() => underlined3 = false}
              type="text"
              class="w-full px-7 py-2 focus:outline-none focus:ring  focus:ring-orange-400"
              placeholder="Password"
            />
            {#if underlined3}
             <hr class="border-2 rounded border-orange-400" />
            {/if}
            {#if !underlined3}
              <hr class="border-2 rounded border-transparent"/>
            {/if}
          </div>
        <div class="mb-4">
          <i class="fa-solid fa-key absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
          <input on:blur={()=> underlined4 = true} on:click={() => underlined4 = false}
            type="password"
            class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400"
            placeholder="Confirm Password"
          />
          {#if underlined4}
           <hr class="border-2 rounded border-orange-400" />
          {/if}
          {#if !underlined4}
           <hr class="border-2 rounded border-transparent"/>
          {/if}
        </div>
        <button on:click={redirectToLogin}
          type="submit"
          class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07]"
          >SUBMIT</button
        >
        
        <br />
      </form>
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400" />
        <span class="flex-shrink mx-4 text-gray-400">Already have an account?</span>
        <div class="flex-grow border-t border-gray-400" />
      </div>
      <button on:click={redirectToLogin}
        class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07]"
        >Login</button
      >
    </div>
  </div>
</body>