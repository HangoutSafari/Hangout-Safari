<script context="module">
  import { goto } from '$app/navigation';
  import {postData} from '../../../api';

  let username = "";
  let email = '';
  let password= '';
  let confirmPassword = "";
  const redirectToLogin = () => {
    goto('/login');
  };

  const register = async () => {
  if (password !== confirmPassword) {
    console.error('Passwords do not match');
    alert('Passwords do not match');
    return;
  }
  try {
    console.log('Registering user...',{username, email, password});
    const response = await postData('http://127.0.0.1:3010/auth/register', {username, email, password}); 
    // regex to check if response is a 2xx code
    if (/^2\d{2}$/.test(response)) {
      alert('User registered successfully');
      redirectToLogin();
    }
    else {
      console.error('User registration failed:', response);
      alert('User registration failed', response);
    }
  } catch (error) {
    console.error('Internal Server Error:', error);
    // Handle unexpected errors (e.g., network issues, server crashes)
    alert('Internal Server Error. Please try again later.'); // Show user-friendly message
  }
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
      <form on:submit|preventDefault={register}>
        <div class="mb-4">
          <i class="fa-regular fa-user absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"></i>
            <input  on:blur={()=> underlined[0] = true} 
              on:click={() => underlined[0] = false} 
              on:keydown={(e) => handleInputKeydown(e, 0)}
              bind:value={username} required
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
            bind:value={email} required
            type="email"
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
              bind:value={password} required
              type="password"
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
            bind:value={confirmPassword} required
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
        <button 
          type="submit"
          class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-gradient-to-r from-[#F34439] to-[#FF8D07]"
          >SUBMIT</button
        >
      </form>
        
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
