import type { LayoutServerLoad } from "./$types";

export const load = (async ({ cookies  }) => {

    let user = cookies.get("hresssdfs")

    return {
        "islogin":user==null?false: true
    }
}) satisfies LayoutServerLoad;
