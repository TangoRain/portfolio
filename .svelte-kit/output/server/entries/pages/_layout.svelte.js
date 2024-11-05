import { a as attr, e as escape_html, b as bind_props, p as pop, c as push, h as head, s as slot } from "../../chunks/index.js";
import { I as Icon, B as BiMenu, S as SiTelegram } from "../../chunks/index2.js";
function Navigation($$payload, $$props) {
  push();
  let model = $$props["model"];
  $$payload.out += `<div${attr("class", `w-full h-16 overflow-hidden flex flex-col bg-white shadow-sm  p-4 transition-all duration-200 md:px-20  md:flex-row ${""}`)}><div class="flex flex-row items-center text-2xl uppercase font-semibold gap-2"><img class="h-10"${attr("src", model.icon)} alt="portfolio icon" srcset=""> <p class="w-full text-center">Demin</p> <button class="md:hidden">`;
  Icon($$payload, { size: "40", src: BiMenu });
  $$payload.out += `<!----></button></div> <div${attr("class", `flex flex-col flex-1 gap-3  justify-center  transition-all duration-200 items-center text-lg font-medium md:opacity-100 md:flex-row  ${" opacity-0"}`)}><a href="#about">${escape_html(model.aboutMe)}</a> <a href="#skill">${escape_html(model.skills)}</a> <a href="#project">${escape_html(model.project)}</a> <a href="#testi">${escape_html(model.contactMe)}</a></div> <div class="w-full flex flex-row justify-center md:w-max"><a href="https://t.me/tango_rain" class="flex flex-row items-center justify-center px-28 py-3 w-max text-white bg-black rounded md:p-4 text-sm gap-2">Telegram `;
  Icon($$payload, { color: "ffFFff", src: SiTelegram });
  $$payload.out += `<!----></a></div></div>`;
  bind_props($$props, { model });
  pop();
}
const logo = "data:image/svg+xml,%3csvg%20width='77'%20height='87'%20viewBox='0%200%2077%2087'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.5%2040.5H39C41.4853%2040.5%2043.5%2042.5147%2043.5%2045C43.5%2047.4853%2041.4853%2049.5%2039%2049.5H4.5V40.5Z'%20stroke='%23181818'%20stroke-width='9'/%3e%3ccircle%20cx='58'%20cy='45'%20r='7'%20fill='%23181818'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9%209H52C60.8366%209%2068%2016.1634%2068%2025V62C68%2070.8366%2060.8366%2078%2052%2078H9V66H0V78V87H9H52C65.8071%2087%2077%2075.8071%2077%2062V25C77%2011.1929%2065.8071%200%2052%200H9H0V9V60H9V9Z'%20fill='%23181818'/%3e%3c/svg%3e";
function _layout($$payload, $$props) {
  push();
  let data = $$props["data"];
  data.init.ru_nav.icon = logo;
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Demin portfolio</title>`;
    $$payload2.out += `<link rel="icon"${attr("href", logo)}>`;
  });
  $$payload.out += `<div class="Some_Easter_Egg"><header class="sticky top-0 w-full">`;
  Navigation($$payload, { model: data.init.ru_nav });
  $$payload.out += `<!----></header> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div> <footer class="w-full bg-black px-20 py-10 text-white flex flex-row text-xl"><p>DEMIN portfolio</p> <div class="flex-1"></div> <a class="text" href="mailto:1ingego1@gmail.com">1ingego1@gmail.com</a></footer>`;
  bind_props($$props, { data });
  pop();
}
export {
  _layout as default
};
