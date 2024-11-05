import { i as init } from "../../chunks/init.js";
const prerender = true;
const load = ({}) => {
  return {
    init
  };
};
export {
  load,
  prerender
};
