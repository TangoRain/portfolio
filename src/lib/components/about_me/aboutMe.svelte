
<script lang='ts'>
    import about from "$lib/static/images/about.svg";
    let ab = "About";
    let me = "Me";
    
    //ru
    let fp = `Я Иван, разработчик из Омска. Мой Telegram-канал > <a class="text-blue-950" href="https://t.me/tangorain">https://t.me/tangorain</a>. Мне 23 года, и я полностековый разработчик с более чем 7-летним интересом к IT и разработке. В свободное время я создаю игры, изучаю нейронные сети и исследую другие области разработки. Чтобы не запутаться в инструментах и фреймворках, я выбрал основной стек для коммерческой работы, а именно: Flutter (с Dio, Freeze, Hive/Sqflite, Riverpod/Bloc, BaseUI, Rive и Lottie), Backend (Python/FastAPI, Node/Express, PostgreSQL, MongoDB, Redis), Дополнительные инструменты (Supabase, n8n, Strapi), DevOps (Nginx, Docker, Linux), и Frontend (Svelte+SvelteKit, Strapi CMS, Next.js (React)).`;
    let sp =`В настоящее время мой основной интерес — это разработка полного цикла для бизнес-решений в России. В частности, замена SaaS-приложений на OSS-решения. Например, я заменил: ChatGPT -> Mistral, Firebase -> Supabase, CMS -> Strapi, Make -> n8n. Этот подход позволяет бизнесу иметь больше контроля над своим технологическим стеком и снижать затраты, связанные с проприетарным программным обеспечением.`;
    let tp = `Сосредотачиваясь на решениях с открытым исходным кодом, я стремлюсь предоставлять надежные, масштабируемые и экономически эффективные решения для бизнеса. Это не только помогает снизить зависимость от сторонних сервисов, но и обеспечивает возможность адаптации технологий под конкретные потребности бизнеса. Кроме того, решения с открытым исходным кодом часто сопровождаются сильной поддержкой сообщества, что может быть бесценным для устранения неполадок и постоянного улучшения.`;
    //en
    // let fp = `I'm Ivan, a developer from Omsk. My Telegram channel is &gt;	 <a class=" text-blue-950" href="https://t.me/tangorain"> https://t.me/tangorain</a>. I'm 23 years old and I'm a full-stack developer with over 7 years of interest in IT and development. In my free time, I create games, study neural networks, and explore other areas of development. To avoid getting lost in tools and frameworks, I've chosen a main stack for commercial work, specifically: Flutter (with Dio, Freeze, Hive/Sqflite, Riverpod/Bloc, BaseUI, Rive, and Lottie), Backend (Python/FastAPI, Node/Express, PostgreSQL, MongoDB, Redis), Additional Tools (Supabase, n8n, Strapi), DevOps (Nginx, Docker, Linux), and Frontend (Svelte+SvelteKit, Strapi CMS, Next.js (React)).    `;
    // let sp =`Currently, my main interest is in full-cycle development for business solutions in Russia. Specifically, replacing SaaS applications with OSS solutions. For example, I've replaced: ChatGPT -&gt; Mistral, Firebase -&gt; Supabase, CMS -&gt; Strapi, Make -&gt; n8n. This approach allows businesses to have more control over their technology stack and reduce costs associated with proprietary software.    `;
    // let tp = `By focusing on open-source solutions, I aim to provide robust, scalable, and cost-effective solutions for businesses. This not only helps in reducing dependency on third-party services but also ensures that the technology can be customized to meet specific business needs. Additionally, open-source solutions often come with strong community support, which can be invaluable for troubleshooting and continuous improvement.`;

</script>

<div id="about" class="flex flex-col  w-full p-4 gap-8 md:px-20 md:flex-row md:py-20">
    <div class="w-full h-96 p-4  flex-1">
        <img class="w-full " src={about} alt="">
    </div>
    <div class="flex flex-col gap-2 flex-[2] items-center">
    <div class=" text-3xl"> {ab} <span class="font-semibold "> {me}</span></div>
    <p class= "text-zinc-600 text-base ">{ @html fp}</p>
    <p class= "text-zinc-600 text-sm ">{sp}</p>
    <p class= "text-zinc-600 text-sm ">{tp}</p>
</div>
</div>