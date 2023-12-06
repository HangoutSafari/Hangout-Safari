<script>
  import FormInput from "$lib/components/form/FormInput.svelte";
</script>

<div class="w-full h-full flex justify-center items-center flex-col gap-6">
  <FormInput
    id="title"
    type="text"
    icon="fa-solid fa-t"
    placeholder="Title"
    class=""
  />
  <FormInput id="date" type="date" icon="fa-regular fa-calendar" />
  <FormInput id="time-start" type="time" icon="fa-regular fa-clock" />
  <FormInput id="time-end" type="time" icon="fa-regular fa-clock" />
  <FormInput
    id="image"
    type="file"
    icon="fa-solid fa-image"
    accept=".png, .jpg, .jpeg"
  />
  <FormInput
    id="description"
    type="textarea"
    icon="fa-solid fa-pen"
    placeholder="Description..."
  />
</div>
