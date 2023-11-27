import { c as create_ssr_component, a as add_attribute, e as escape } from "./index.js";
const Eventcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { eventImage } = $$props;
  let { eventTitle } = $$props;
  let { eventDate } = $$props;
  let { eventLocation } = $$props;
  let buttonBackgroundColor = "bg-[#BCBCBC]";
  let buttonInnerText = "Join now";
  if ($$props.eventImage === void 0 && $$bindings.eventImage && eventImage !== void 0)
    $$bindings.eventImage(eventImage);
  if ($$props.eventTitle === void 0 && $$bindings.eventTitle && eventTitle !== void 0)
    $$bindings.eventTitle(eventTitle);
  if ($$props.eventDate === void 0 && $$bindings.eventDate && eventDate !== void 0)
    $$bindings.eventDate(eventDate);
  if ($$props.eventLocation === void 0 && $$bindings.eventLocation && eventLocation !== void 0)
    $$bindings.eventLocation(eventLocation);
  return `<div class="flex flex-col lg:shrink-0 items-center gap-2 drop-shadow-lg bg-slate-100 rounded-lg transition ease-in-out delay-150 hover:scale-110">
    <div class="h-[135px] w-full">
        <img${add_attribute("src", eventImage, 0)} alt="Event Image" class="object-cover w-full h-full rounded-t-lg"></div>

    
    <div class="w-full"><h1 class="pl-4 text-lg">${escape(eventTitle)}</h1></div>

    
    <div class="w-full flex sm:flex-row items-center py-2 text-[#565656]/75"><div class="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full g-4">
            <div class="sm:w-1/2 flex items-center"><i class="pl-4 sm:pl-0 mr-4 fa-solid fa-calendar fa-lg sm:ml-4"></i>
                <h1 class="text-sm mr-4 sm:mr-0">${escape(eventDate)}</h1></div>

            
            <div class="sm:w-1/2 flex items-center sm:justify-end"><i class="pl-4 sm:pl-0 mr-4 fa-solid fa-location-dot fa-lg"></i>
                <h1 class="text-sm sm:mr-4">${escape(eventLocation)}</h1></div></div></div>

    <div class="hidden px-4 pb-2 w-full h-full sm:flex items-center justify-center">
        <button${add_attribute(
    "class",
    `
            ${buttonBackgroundColor} h-6 w-full
            ${"hover:bg-blue-500 duration-300 ease-in-out hover:drop-shadow"}
            sm:flex items-center justify-center rounded-xl text-white text-sm self-center`,
    0
  )}>${escape(buttonInnerText)}</button></div></div>`;
});
export {
  Eventcard as E
};
