<script>
  import "../app.css";
  import Navigation from './../lib/components/navigation/navigation.svelte';
    import logo from "$lib/static/images/logo.svg";
    export let data;
data.init.ru_nav.icon = logo; 

</script>

<div class="Some_Easter_Egg">

  <header class=" sticky top-0 w-full ">
    <Navigation model={data.init.ru_nav}></Navigation>

  </header>
  <slot></slot>
</div>

<svelte:head>
    
<link rel="icon" href={logo} />
<title>Demin portfolio</title>
</svelte:head>

<footer class="w-full bg-black px-20 py-10 text-white flex flex-row text-xl">
<p>DEMIN portfolio</p> <div class="flex-1"></div> <a class="text" href="mailto:1ingego1@gmail.com">1ingego1@gmail.com</a>
</footer>
