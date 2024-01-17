import { textOfSearchField } from "./store";

export function setInputToStore(event,searchTerm) {
  textOfSearchField.set(event.target.value);
}