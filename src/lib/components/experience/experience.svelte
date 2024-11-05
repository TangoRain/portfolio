<script lang='ts'>
	import { Icon } from "svelte-icons-pack";
	import { BsGoogle } from "svelte-icons-pack/bs";
	import { RiDevelopmentTerminalLine } from "svelte-icons-pack/ri";
	import { SiFlutter, SiPython } from "svelte-icons-pack/si";

let data = [
    {
    icon:SiPython,
    title:"Python Developer ",
    date:"Nov 2017 - 2019",
    describe:"Занимался разработкой автоматизированных тестов на Python. Это включало написание скриптов и ботов с использованием Selenium.",
    },
    {
    icon:SiFlutter,
    title:"Flutter Developer  (Measoft)",
    date:"2019-2020",
    describe:"Разработал веб и мобильное приложение для пунктов выдачи заказов. Я использовал Bloc для управления состоянием и Sqflite для локальной базы данных. (В то время веб-версия Flutter была в бета-версии.)",
    },
    {
    icon:SiFlutter,
    title:"Flutter Developer  (BSTR)",
    date:"2020-2022",
    describe:"Разработал приложение BSTR, используя DIO, Hive, Riverpod и Freeze. Само приложение BSTR предлагает быстрые и удобные варианты оплаты проезда и парковок.",
    },
    {
    icon:SiFlutter,
    title:" LEAD Flutter Developer  (MBUSH)",
    date:"2022- 2023",
    describe:"Разработал приложение Insight Box для метафорических карт, написав как само приложение с использованием Dart (Flutter), так и серверную часть на Python с использованием CMS STRAPI.",
    },
    {
    icon:RiDevelopmentTerminalLine,
    title:" LEAD Developer  (ByteBridge)",
    date:"2023- 2024",
    describe:"Был ведущим разработчиком на проектах, разрабатывая такие приложения, как FriFri и веб-сайт Omoservice. Я использовал следующий технологический стек: Svelte/Next/Flutter/Prisma/n8n/Strapi.",
    }
    //en
    // {
    // icon:SiPython,
    // title:"Python Developer ",
    // date:"Nov 2017 - 2019",
    // describe:"I was involved in developing automated tests in Python. This included writing scripts and bots using Selenium.",
    // },
    // {
    // icon:SiFlutter,
    // title:"Flutter Developer  (Measoft)",
    // date:"2019-2020",
    // describe:"I developed a web and mobile application for order pickup points. I used Bloc for state management and Sqflite for the local database. (At that time, the web version of Flutter was in beta.)",
    // },
    // {
    // icon:SiFlutter,
    // title:"Flutter Developer  (BSTR)",
    // date:"2020-2022",
    // describe:"I developed the BSTR application using DIO, Hive, Riverpod, and Freeze. The application itself, BSTR, offers fast and convenient travel and parking payment options.",
    // },
    // {
    // icon:SiFlutter,
    // title:" LEAD Flutter Developer  (MBUSH)",
    // date:"2022- 2023",
    // describe:"I developed the Insight Box application for metaphorical cards, writing both the application itself using Dart (Flutter) and the server-side component using Python with the STRAPI CMS.",
    // },
    // {
    // icon:RiDevelopmentTerminalLine,
    // title:" LEAD Developer  (ByteBridge)",
    // date:"2023- 2024",
    // describe:"I was the lead developer on projects, developing applications such as FriFri and the Omoservice website. I used the following tech stack: Svelte/Next/Flutter/Prisma/n8n/Strapi.",
    // }
]; 
let my = "Мой";
let exp = "Опыт";
// en
// let my = "My";
// let exp = "Experience";
</script>

<div class="  bg-primary-black w-full p-4 text-white flex flex-col items-center md:px-20">
    <h2 class="text-xl md:text-3xl">{my}  <span class=" font-semibold">{exp}</span></h2>
    
<div class="flex flex-col w-full py-4 gap-4 md:gap-8 md:py-14">
    {#each [...data,] as el}
    <div class="flex flex-col w-full gap-2 p-2 border-zinc-500 border rounded px-4 md:p-8 hover:bg-zinc-800 ">
        <div class="flex flex-row w-full items-center text-lg  md:text-xl gap-2 ">
            <Icon src={el.icon}></Icon>
            <p>{el.title}</p>
        </div>
        <div class="flex flex-row w-full items-center text-base gap-2 ">
            <p>{el.date}</p>
        </div>
        <div class="flex flex-row w-full items-center text-sm  text-zinc-400 gap-2 ">
            <p>{el.describe}</p>
        </div>
    </div>
    {/each}
</div>
</div>