<script lang='ts'>
import bsom from "$lib/static/images/portfolio/bsom.jpeg"
import bstr from "$lib/static/images/portfolio/bstr.jpeg";
import chari from "$lib/static/images/portfolio/chari.jpeg";
import frifri from "$lib/static/images/portfolio/frifri.jpeg";
import insight from "$lib/static/images/portfolio/insight.jpeg";
import omoservice from "$lib/static/images/portfolio/omoservice.jpeg";
import pranamat from "$lib/static/images/portfolio/pranamat.jpeg";
import  measoft from "$lib/static/images/portfolio/pvz.jpeg";

    let portfolio = [
        {
            title:"Boson, Loyalty program",
            desc:"Приложение для подключения программ лояльности в разных магазинах..", 
            img:bsom
        },
        {
            title:"BSTR, Транспорт Петербурга",
            desc:"Приложение для покупки платных парковок в Санкт-Петербурге и обновления проездных билетов..", 
            img:bstr
        },
        {
            title:"Chari, благотворительный фонд",
            desc:"Charity — это благотворительный фонд неравнодушных людей, специализирующийся на различных видах помощи нуждающимся.", 
            img:chari
        },
        {
            title:"FriFri- ერთად შემოვიაროთ მსოფლიო!",
            desc:"FriFri — это промежуточный сервис между GE и Aviasales.", 
            img:frifri
        },
        {
            title:"Insight - Медитации и метафорические карты",
            desc:"Insight Box — это сервис, предлагающий медитации, аффирмации и метафорические карты в одном приложении.", 
            img:insight
        },
        {
            title:"Omoservice -Marketplace delivery orders",
            desc:"Omoservice — это платформа, где можно покупать заказы и выполнять их без посредников и комиссий.", 
            img:omoservice
        },
        {
            title:"Pranamat",
            desc:"Pranamat — это приложение, предлагающее медитации и умиротворение в одном месте.", 
            img:pranamat
        },
        {
            title:"Measoft",
            desc:"Приложение для пунктов выдачи заказов от Measoft.", 
            img:measoft
        },
        // {
        //     title:"Boson, Loyalty program",
        //     desc:"An application for connecting loyalty programs across different stores.", 
        //     img:bsom
        // },
        // {
        //     title:"BSTR, Транспорт Петербурга",
        //     desc:"An application for purchasing paid parking in St. Petersburg and updating transit passes.", 
        //     img:bstr
        // },
        // {
        //     title:"Chari, благотворительный фонд",
        //     desc:"Charity is a charitable foundation of caring individuals, specializing in various forms of assistance to those in need.", 
        //     img:chari
        // },
        // {
        //     title:"FriFri- ერთად შემოვიაროთ მსოფლიო!",
        //     desc:"FriFri is a service layer between GE and Aviasales.", 
        //     img:frifri
        // },
        // {
        //     title:"Insight - Медитации и метафорические карты",
        //     desc:"Insight Box is a service offering meditations, affirmations, and metaphorical cards all in one application.", 
        //     img:insight
        // },
        // {
        //     title:"Omoservice -Marketplace delivery orders",
        //     desc:"Omoservice is a platform where you can buy orders and complete them without intermediaries and commissions.", 
        //     img:omoservice
        // },
        // {
        //     title:"Pranamat",
        //     desc:"Pranamat is an application offering meditations and tranquility in one place.", 
        //     img:pranamat
        // },
        // {
        //     title:"Measoft",
        //     desc:"An application for order pickup points from Measoft.", 
        //     img:measoft
        // },
    ]
    const my = "Мои"; 
    const pr= "Проекты";

    // en
    // const my = "My"; 
    // const pr= "Projects";


</script>
<div id="project" class="p-4 md:p-20 bg-black text-white flex flex-col items-center gap-3">

    <h2 class="text-3xl">{my} <span class=" font-semibold">{pr}</span></h2>
<div class="h-5"></div>
<div class="flex flex-col gap-24 ">   
    {#each portfolio as p}
        
    <div class=" w-full flex flex-col">
            <div class=" flex flex-col md:flex-row w-full gap-8">
            <div class={`flex-1 ${ portfolio.indexOf(p)%2==0? "md:order-1" : " md:order-3"}  `}>
                <img class="rounded" src={p.img} alt="">
            </div>
            <div class="flex-1 flex flex-col  text-start  gap-2 px-5  order-2">
                <h3 class="text-2xl" >{p.title}</h3>
                <p class="text-sm text-zinc-500">{p.desc}</p>
            </div>
            </div>
        </div>
    {/each}
</div>
</div>
