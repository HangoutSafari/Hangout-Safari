<script context="module">
  import { goto } from '$app/navigation';
  
  const redirectToLogin = () => {
    goto('/login');
  };
  export function handleInputKeydown(e, index) {
    const focusableInputs = document.querySelectorAll('input');
    const currentIndex = index;
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();
      let nextIndex;
      if (e.key === "ArrowUp") {
        nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      } else {
        nextIndex = currentIndex < focusableInputs.length - 1 ? currentIndex + 1 : currentIndex;
      }
      focusableInputs[nextIndex].focus();
    }
  }
  let underlined = [true,true,true,true]
</script>

<div
    class=" flex p-5 justify-center self-center text-center items-center z-30"
  >
    <div class="bg-white p-5 rounded shadow-2xl w-72 md:w-96">
      <h2 class="text-2xl font-semibold text-gray-500 mb-4">REGISTER</h2>
      <form>
        <div class="mb-4">
          <i class="fa-regular fa-user absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
            <input  on:blur={()=> underlined[0] = true} 
              on:click={() => underlined[0] = false} 
              on:keydown={(e) => handleInputKeydown(e, 0)}
              type="text"
              class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400 "
              placeholder="Username"
            />
            {#if underlined[0]}
             <hr class="border-2 rounded border-orange-400" />
            {/if}
            {#if !underlined[0]}
              <hr class="border-2 rounded border-transparent"/>
            {/if}
          </div>
        <div class="mb-4">
          <i class="fa-regular fa-envelope absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
          <input on:blur={()=> underlined[1] = true}
            on:click={() => underlined[1] = false}
            on:keydown={(e) => handleInputKeydown(e, 1)}
            type="text"
            class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400"
            placeholder="E-mail"
          />
          {#if underlined[1]}
           <hr class="border-2 rounded border-orange-400" />
          {/if}
          {#if !underlined[1]}
           <hr class="border-2 rounded border-transparent"/>
          {/if}
        </div>
        <div class="mb-4">
          <i class="fa-solid fa-key absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
            <input on:blur={()=> underlined[2] = true}
              on:click={() => underlined[2] = false}
              on:keydown={(e) => handleInputKeydown(e, 2)}
              type="text"
              class="w-full px-7 py-2 focus:outline-none focus:ring  focus:ring-orange-400"
              placeholder="Password"
            />
            {#if underlined[2]}
             <hr class="border-2 rounded border-orange-400" />
            {/if}
            {#if !underlined[2]}
              <hr class="border-2 rounded border-transparent"/>
            {/if}
          </div>
        <div class="mb-4">
          <i class="fa-solid fa-key absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
          <input on:blur={()=> underlined[3] = true}
            on:click={() => underlined[3] = false}
            on:keydown={(e) => handleInputKeydown(e, 3)}
            type="password"
            class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400"
            placeholder="Confirm Password"
          />
          {#if underlined[3]}
           <hr class="border-2 rounded border-orange-400" />
          {/if}
          {#if !underlined[3]}
           <hr class="border-2 rounded border-transparent"/>
          {/if}
        </div>
      </form>
        <button on:click={redirectToLogin}
          type="submit"
          class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07]"
          >SUBMIT</button
        >
        <br />
      
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
