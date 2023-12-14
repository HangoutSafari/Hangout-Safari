<script>
  import { onMount } from "svelte";
  import { address, provinces } from "../../../routes/events/create/store.js";
  import { suggestions } from "./store.js";
  export let value = "";
  export let cityName;
  var timeoutId = null;
  let provinceData;
  async function AutoSuggest() {
    timeoutId = null;
    let streetname = value;
    const promise = await fetch(
      `https://geocode.xyz/?geoit=json&auth=180705050001809255650x22389&region=NL&streetname=${streetname}&cityname=${select.value}`
    );
    const response = await promise.json();
    $suggestions = [...Object.keys(response.standard.street)];
  }
  function getAutoSuggestions() {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(AutoSuggest, 1000);
  }

  let select;
  onMount(async () => {
    provinceData = await loadJSON();
    $provinces = { ...Object.keys(provinceData) };
    console.log(provinceData);
    console.log($provinces);
  });
  async function loadJSON() {
    const request = await fetch("../../json/provincesAndCitiesNL.json");
    const response = await request.json();
    return response;
  }
</script>

<div class="{$$props.class} w-full">
  <div class="w-[45%] inline-block">
    <i
      class="fa-solid fa-location-dot absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"
    />
    <input
      on:keypress={getAutoSuggestions}
      on:focusout={() => {
        address.set(value + ", " + select.value);
      }}
      type="text"
      id="address"
      placeholder="Address"
      bind:value
      list="suggestions"
      class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400 bg-transparent"
    />
    <datalist id="suggestions">
      {#each $suggestions as suggestion}
        <option value={suggestion} />
      {/each}
    </datalist>
  </div>
  <div class="w-[45%] inline-block float-right">
    <i
      class="fa-solid fa-city absolute text-center mt-3 px-1 border-orange-300 border-r-2 text-gray-400"
    />
    <select
      on:focusout={() => {
        address.set(value + ", " + select.value);
      }}
      bind:this={select}
      class="w-full px-7 py-2 focus:outline-none focus:ring focus:ring-orange-400 bg-transparent"
    >
      {#if cityName}
        <option hidden disabled class="text-gray-400">City</option>
      {:else}
        <option selected hidden disabled class="text-gray-400">City</option>
      {/if}

      {#each Object.entries($provinces) as [index, provinceName]}
        <optgroup label={provinceName}>
          {#each provinceData[provinceName] as city}
            {#if cityName == city.city}
              <option selected value={city.city}>{city.city}</option>
            {:else}
              <option value={city.city}>{city.city}</option>
            {/if}
          {/each}
        </optgroup>
      {/each}
    </select>
  </div>
  <hr class="border-2 rounded border-orange-400" />
</div>
