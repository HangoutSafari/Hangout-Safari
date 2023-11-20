<script>
  import { goto } from '$app/navigation';
  
    const redirectToLogin  = (event) => {
    event.preventDefault();
    goto('/login');
  };
</script>

<body>
  <div
    class=" flex p-5 justify-center self-center text-center items-center z-30"
  >
    <div class="bg-white p-5 rounded shadow-2xl w-96">
      <h2 class="text-2xl font-semibold text-gray-500 mb-4">REGISTER</h2>
      <form>
        <div class="mb-4">
            <input
              type="text"
              class="w-full px-3 py-2 focus:outline-none focus:ring focus:ring-orange-500"
              placeholder="Username"
            />
            <hr class="border-2 rounded border-orange-400" />
          </div>
        <div class="mb-4">
          <input
            type="text"
            class="w-full px-3 py-2 focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="E-mail"
          />
          <hr class="border-2 rounded border-orange-400" />
        </div>
        <div class="mb-4">
            <input
              type="text"
              class="w-full px-3 py-2 focus:outline-none focus:ring focus:ring-orange-500"
              placeholder="Password"
            />
            <hr class="border-2 rounded border-orange-400" />
          </div>
        <div class="mb-4">
          <input
            type="password"
            class="w-full px-3 py-2 focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Confirm Password"
          />
          <hr class="border-2 rounded border-orange-400" />
        </div>
        <button on:click={redirectToLogin}
          type="submit"
          class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-orange-500"
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
        class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-orange-500"
        >Login</button
      >
    </div>
  </div>
</body>