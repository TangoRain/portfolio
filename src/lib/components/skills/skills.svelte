<script lang='ts'>
	import { Icon } from 'svelte-icons-pack';
	import { BiLogoGit, BiLogoSass, BiLogoTypescript } from 'svelte-icons-pack/bi';
	import { BsGithub } from 'svelte-icons-pack/bs';
	import { RiLogosNextjsFill, RiLogosSvelteFill } from 'svelte-icons-pack/ri';
	import { SiDocker, SiFastapi, SiFlutter, SiJavascript, SiLinux, SiPython, SiSass, SiSocketdotio } from 'svelte-icons-pack/si';

let data = [
    {
        src:BiLogoSass,
        label:"Sass/Scss"
    },
    {
        src:BiLogoTypescript,
        label:"TypeScript"
    },
    {
        src:SiJavascript,
        label:"JavaScript"
    },
    {
        src:RiLogosNextjsFill,
        label:"NextJs"
    },
    {
        src:RiLogosSvelteFill,
        label:"Svelte"
    },
    {
        src:SiFlutter,
        label:"Flutter"
    },
    {
        src:BiLogoGit,
        label:"Git"
    },
    {
        src:SiLinux,
        label:"Linux"
    },
    {
        src:SiDocker,
        label:"Docker"
    },
    {
        src:SiSocketdotio,
        label:"Sockets"
    },
    {
        src:SiPython,
        label:"python"
    },
    {
        src:SiFastapi,
        label:"fastApi"
    },
]

//ru
let my ="Мои"; 
let skills ="Навыки"; 
//en
// let my ="My"; 
// let skills ="Skills"; 

</script>

<div id="skill" class="w-full flex flex-col items-center p-4 gap-3 md:px-20  ">
    <h2 class=" text-3xl">{my} <span class=" font-semibold"> {skills}</span></h2>
    <div class="h-4"></div>
    <div class=" w-full flex flex-row flex-wrap gap-6  justify-between  *:rounded *:h-32    *:border-black *:border-2 *:flex *:flex-col *:justify-between *:items-center *:py-4">
{#each data as el }
    
<div class="w-[44%] md:w-1/5 h-full hover:bg-black transition-all hover:text-white"> <div class=""><Icon  size=42 src={el.src} ></Icon></div> <div class=" font-bold">{el.label}</div> </div>
{/each}
      
    </div>
</div>