<script>
</script>

<body>
  <div
    class=" flex p-5 justify-center self-center text-center items-center z-30"
  >
    <div class="bg-white p-5 rounded shadow-2xl w-96">
      <h2 class="text-2xl font-semibold text-gray-500 mb-4">LOG IN</h2>
      <form>
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
            type="password"
            class="w-full px-3 py-2 focus:outline-none focus:ring focus:ring-orange-500"
            placeholder="Password"
          />
          <hr class="border-2 rounded border-orange-400" />
        </div>
        <button
          type="submit"
          class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-orange-500"
          >SUBMIT</button
        >
        <a
          class="text-gray-500 hover:text-gray-700 float-left md:text-sm text-xs underline"
          href="/login">Forgot Password</a
        >
        <br />
        <br />
      </form>
      <div class="relative flex py-5 items-center">
        <div class="flex-grow border-t border-gray-400" />
        <span class="flex-shrink mx-4 text-gray-400">No account yet?</span>
        <div class="flex-grow border-t border-gray-400" />
      </div>
      <button
        type="submit"
        class="w-full h-10 bg-gray-300 font-bold text-gray-500 py-2 rounded-md hover:text-black hover:bg-orange-500"
        >Register</button
      >
    </div>
  </div>
</body>
