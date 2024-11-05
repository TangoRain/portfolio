<script lang='ts'>
    import img from "$lib/static/images/ill.svg"
    export let bodyText;

    // EN
    // let hello = "Hello I'am";
    // let name ="Demin Ivan.";
    // let wamdm= "Frontend & Mobile Developer";
    // let bassed="Based in";
    // let loc="Russia";
    //RU
    let hello = "Добрый день! Я";
    let name ="Демин Иван";
    let wamdm= "Мобильный и Веб Разработчик";
    let bassed="из";
    let loc="России";
    

</script>


<style>

    .dev{ 
        -webkit-text-stroke: 1px black; 
        color: transparent;
    }
</style>

<div class="w-full flex flex-col px-4 py-10 items-center gap-8 md:flex-row md:p-20 ">

    <div class="md:flex-[1] md:order-2"> <img class={`w-full   md:flex-1`} src={img} alt="preview" on:load={()=> {}}></div>

   <div class="flex flex-col gap-8 md:flex-[1] md:order-1"> <h1 class="text-3xl md:text-5xl">{hello} <span  class="font-semibold">{name} <br><span class="dev" > {wamdm}</span> </span> {bassed} <span class=" font-semibold "> {loc} </span></h1>
    <p class=" text-zinc-500 text-sm md:text-base">{bodyText}</p></div>
</div>
