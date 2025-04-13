import "clsx";
import { c as pop, p as push } from "../../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<meta name="viewport" content="width=device-width, initial-scale=1.0"> <h1>Purchase Tickets Here</h1> <br> <form><div class="svelte-13zeddp"><label for="adults">Adults:</label> <select id="adults" name="adults" class="svelte-13zeddp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div> <br> <div class="svelte-13zeddp"><label for="children">Children:</label> <select id="children" name="children" class="svelte-13zeddp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div> <br> <div class="svelte-13zeddp"><label for="students">Students:</label> <select id="students" name="students" class="svelte-13zeddp"><option>0</option><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select></div> <br> <a href="/congrats"><input type="submit" value="Purchase" class="svelte-13zeddp"></a></form>`;
  pop();
}
export {
  _page as default
};
