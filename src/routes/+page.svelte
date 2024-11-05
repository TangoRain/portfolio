<script lang='ts'>
	import Skills from './../lib/components/skills/skills.svelte';
	import Wellcome from '$lib/components/wellcome/wellcome.svelte';
import logo from '$lib/static/images/logo.svg';
import init from "$lib/static/init.json";
	import Experience from '$lib/components/experience/experience.svelte';
	import AboutMe from '$lib/components/about_me/aboutMe.svelte';
	import Projects from '$lib/components/projects/projects.svelte';
	import Testimonial from '$lib/components/testimonial/testimonial.svelte';
	import { browser } from '$app/environment';

	if(browser){
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click',  (e) => {
                e.preventDefault();
                document.querySelector((this).getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
	}
</script>

<Wellcome bodyText={init.ru_wellcome}></Wellcome>
<Skills></Skills>

<div class="h-4"></div>
<Experience></Experience>
<AboutMe></AboutMe>
<div class=" h-5"></div>
<Projects></Projects>
<Testimonial></Testimonial>