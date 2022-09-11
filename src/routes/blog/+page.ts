// export const prerender = true;
const posts = import.meta.glob('./**/*.md');

const body: any[] = [];

for (const path in posts) {
    body.push(posts[path]().then(({ metadata }) => metadata));
}

console.log(body);

/**
 * @type {import('@sveltejs/kit').Load}
 */
export async function load({ url, params, fetch }) {
    const posts = await Promise.all(body);

    return {
        posts
        }
    ;
}