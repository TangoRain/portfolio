
import type { LayoutServerLoad } from "./$types";
import ini from "$lib/static/init.json"; 
export const prerender = true;


export const load = (({  }) => {
    
    return {
        init:ini
    }
    
}) satisfies LayoutServerLoad;
// ex satisfies PageServerLoad;