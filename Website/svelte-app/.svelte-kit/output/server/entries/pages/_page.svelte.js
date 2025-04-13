import "clsx";
import { c as pop, p as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<meta name="viewport" content="width=device-width, initial-scale=1.0"> <h1>Welcome Visitors!</h1> <br> <div id="image" class="svelte-m7i0kc"><img src="/park.png" alt="Amusement Park Art" class="svelte-m7i0kc"></div> <div id="welcome" class="svelte-m7i0kc"><p>Welcome to All Amusements, the place to be for endless entertainment.</p></div>`;
  pop();
}
export {
  _page as default
};
