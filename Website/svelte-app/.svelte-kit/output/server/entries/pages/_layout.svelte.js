import { d as slot } from "../../chunks/index.js";
import "clsx";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
const whitespace = [..." 	\n\r\f \v\uFEFF"];
function to_class(value, hash, directives) {
  var classname = "" + value;
  {
    classname = classname ? classname + " " + hash : hash;
  }
  if (directives) {
    for (var key in directives) {
      if (directives[key]) {
        classname = classname ? classname + " " + key : key;
      } else if (classname.length) {
        var len = key.length;
        var a = 0;
        while ((a = classname.indexOf(key, a)) >= 0) {
          var b = a + len;
          if ((a === 0 || whitespace.includes(classname[a - 1])) && (b === classname.length || whitespace.includes(classname[b]))) {
            classname = (a === 0 ? "" : classname.substring(0, a)) + classname.substring(b + 1);
          } else {
            a = b;
          }
        }
      }
    }
  }
  return classname === "" ? null : classname;
}
function Footer($$payload) {
  $$payload.out += `<footer class="svelte-o730rr"><p>© 2025 Svelte Project App. All Rights Reserved.</p></footer>`;
}
function Navigation($$payload) {
  let isOpen = false;
  $$payload.out += `<nav class="svelte-154xf0a"><button class="burger svelte-154xf0a" aria-label="Toggle Navigation"></button> <ul${attr("class", to_class("", "svelte-154xf0a", { "open": isOpen }))}><li class="svelte-154xf0a"><a href="/tickets" class="svelte-154xf0a">Tickets</a></li> <li class="svelte-154xf0a"><a href="/events" class="svelte-154xf0a">Events</a></li> <li class="svelte-154xf0a"><a href="/map" class="svelte-154xf0a">Map</a></li> <li class="svelte-154xf0a"><a href="/getting_there" class="svelte-154xf0a">Getting There</a></li></ul></nav>`;
}
function Header($$payload) {
  $$payload.out += `<header class="svelte-7ljt47"><div class="logo svelte-7ljt47"><a href="/" class="svelte-7ljt47"><img src="/logo.png" alt="Website Logo" class="svelte-7ljt47"></a> <a href="/" class="svelte-7ljt47"><h1 class="svelte-7ljt47">All Amusements</h1></a></div> `;
  Navigation($$payload);
  $$payload.out += `<!----></header>`;
}
function _layout($$payload, $$props) {
  Header($$payload);
  $$payload.out += `<!----> <main class="svelte-1ydk9zn"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
