<script>
  import { goto } from '$app/navigation';
  import {handleInputKeydown} from "$lib/components/register/register.svelte"
  
  const redirectToRegister = () => {
    goto('/register');
  };
  const redirectToProfile= () => {
    goto('/dashboard');
  };
  let underlined = [true,true]
</script>
<div
    class=" flex p-5 justify-center self-center text-center items-center z-30"
  >
    <div class="bg-white p-5 rounded shadow-2xl w-72 md:w-96">
      <h2 class="text-2xl font-semibold text-gray-500 mb-4">LOG IN</h2>
      <form>
        <div class="mb-4">
          <i class="fa-regular fa-envelope absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
          <input on:click={() => underlined[0] = false}
            on:blur={()=> underlined[0] = true}
            on:keydown={(e) => handleInputKeydown(e, 0)}
            type="text"
            class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400"
            placeholder="E-mail"
          />
          {#if underlined[0]}
          <hr class="border-2 rounded border-orange-400" />
          {/if}
          {#if !underlined[0]}
          <hr class="border-2 rounded border-transparent"/>
          {/if}
        </div>
        <div class="mb-4">
          <i class="fa-solid fa-key absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
          <input on:click={() => underlined[1] = false}
            on:blur={()=> underlined[1] = true}
            on:keydown={(e) => handleInputKeydown(e, 1)}
            type="password" 
            class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400"
            placeholder="Password"
          />
          {#if underlined[1]}
          <hr class="border-2 rounded border-orange-400" />
          {/if}
          {#if !underlined[1]}
          <hr class="border-2 rounded border-transparent"/>
          {/if}
        </div>
      </form>
        <button id=3 on:click={redirectToProfile}
          type="submit"
          class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07]"
          >SUBMIT</button
        >
        <a
          class="text-gray-500 hover:text-gray-700 float-left md:text-sm text-xs underline"
          href="/login">Forgot Password</a
        >
        <br />
        <br />
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400" />
        <span class="flex-shrink mx-4 text-gray-400">No account yet?</span>
        <div class="flex-grow border-t border-gray-400" />
      </div>
      <button on:click={redirectToRegister}
        type="submit"
        class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07]"
        >Register</button
      >
    </div>
</div>
