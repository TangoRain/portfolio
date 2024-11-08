
<script lang='ts'>
	import { Icon } from "svelte-icons-pack";
import type { NavigationModel } from "./model";
	import { BiMenu } from "svelte-icons-pack/bi";
	import { BsDownload } from "svelte-icons-pack/bs";
	import { ImTelegram } from "svelte-icons-pack/im";
	import { SiTelegram, SiTelegraph } from "svelte-icons-pack/si";
	import { RiLogosTelegramLine } from "svelte-icons-pack/ri";
	import { FaBrandsTelegram } from "svelte-icons-pack/fa";
    export let model:NavigationModel;
    
    let collapsed:boolean = false; 
   
</script>

<div class={`w-full h-16 overflow-hidden flex flex-col bg-white shadow-sm  p-4 transition-all duration-200 md:px-20  md:flex-row ${collapsed? " h-72":""}`}>
    <a href="#main" class="flex flex-row items-center text-2xl uppercase font-semibold gap-2 ">
    <img class=" h-10" src={model.icon} alt="portfolio icon" srcset="">
    <p class=" w-full text-center">Demin</p>
 <button on:click={()=>{
    collapsed = !collapsed;
    }} class=" md:hidden"> <Icon size=40 src={BiMenu}></Icon></button>
    
</a>
    <div class={`flex flex-col flex-1 gap-3  justify-center  transition-all duration-200 items-center text-lg font-medium md:opacity-100 md:flex-row  ${collapsed? " opacity-100 " :" opacity-0"}`}>
        <a href="#skill">
            {model.skills}
        </a>
        <a href="#about">
            {model.aboutMe}
        </a>
        <a href="#project">
            {model.project}
        </a>
        <a href="#testi">
            {model.contactMe}
        </a>
    </div>
    <div class="w-full flex flex-row justify-center md:w-max">
    <a href="https://t.me/tango_rain" class="flex flex-row items-center justify-center  px-28 py-3 w-max text-white bg-black rounded md:p-4 text-sm gap-2">Telegram <Icon color="ffFFff" src={SiTelegram}></Icon></a>
</div></div>