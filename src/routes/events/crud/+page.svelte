<script>
  import FormTitle from "$lib/components/form/FormTitle.svelte";
  import FormDate from "$lib/components/form/FormDate.svelte";
  import FormTime from "$lib/components/form/FormTime.svelte";
  import FormDescription from "$lib/components/form/FormDescription.svelte";
  import FormImage from "$lib/components/form/FormImage.svelte";
  import FormAddress from "$lib/components/form/FormAddress.svelte";
</script>

<div class="w-full h-full flex justify-center items-center flex-col gap-6">
  <FormTitle />
  <FormDate />
  <FormTime id="time-start" />
  <FormTime id="time-end" />
  <FormImage />
  <FormDescription />
  <FormAddress />
</div>
