<script lang='ts'>
import avatar from "$lib/static/images/avatar.png";
import femavatar from "$lib/static/images/fem_avatar.png";
console.log(avatar);
let tesimonials = [
    {
    img:avatar,
    title:"Опытный специалист, приятный в работе и быстро реагирующий на правки.",
    name:"Roman D",
    job:"businessman",
}
,    {
    img:femavatar,
    title:"Ответственный исполнитель, умеющий работать в команде. Рекомендую этого специалиста.",
    name:"Tatiana BSTR",
    job:" Project ownmer",
}
,    {
    img:avatar,
    title:"Ответственный исполнитель, умеющий работать в команде. Рекомендую Ивана.",
    name:"Mikhail Focus ",
    job:" CEO webstudio",
}
//en
//     {
//     img:avatar,
//     title:"An experienced specialist who is pleasant to work with and quickly responds to edits.",
//     name:"Roman D",
//     job:"businessman",
// }
// ,    {
//     img:femavatar,
//     title:"A responsible performer who knows how to work in a team. I recommend this specialist.",
//     name:"Tatiana BSTR",
//     job:" Project ownmer",
// }
// ,    {
//     img:avatar,
//     title:"A responsible performer who knows how to work in a team. I recommend Ivan.",
//     name:"Tatiana BSTR",
//     job:" Project ownmer",
// }

]

let my = "Мои"; 
let tes = "Рекомендации";
//en
// let my = "My"; 
// let tes = "Testimonial";
</script>
<div id="testi" class="p-4 md:p-20 flex flex-col w-full ">
    <div class="flex flex-row w-full justify-center">
        <p class="text-2xl"> {my} <span class="font-semibold"> {tes}</span></p>
    </div>
    <div class="flex flex-col w-full p-8 gap-6 md:flex-row md:flex-wrap md:justify-center md:gap-6">
       {#each [...tesimonials] as tes}
       <div class="bg-white  transition-all rounded-3xl shadow-lg flex flex-col h-max items-center p-6 gap-3 hover:bg-black hover:text-white hover:border-none md:w-80 border border-gray-50">
        <div class="avatar rounded-full border h-16">
            <img class="h-full" src={tes.img} alt="">
        </div>
        <p>{tes.title}</p>
        <div class=" w-40 border"></div>
        <p>{tes.name}</p>
        <p>{tes.job}</p>
    </div>
  
       {/each}
    </div>
</div>