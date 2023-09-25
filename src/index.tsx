import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from "@elysiajs/static"
import * as elements from "typed-html"

const BaseDoc = ({ children }: elements.Children) => `<!DOCTYPE html>
<html lang="en">

  <head>
    <title>PDA-TEECRAFT</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="./public/output.css" rel="stylesheet">
  </head>
${children}
<script src="./public/htmx.min.js"></script>
<script src="./public/hyperscript.min.js"></script>
<script src="./public/dynamics.min.js"></script>
</html>`

const AnimBtn = ({ src, alt, title }: { src: string; alt: string; title: string; }) => {
  return <button
    style="transition: all 800ms ease-in"
    class='relative'
    _="on mouseenter transition my scale to 1.05 on mouseleave transition my scale to initial"
  >
    <div class="absolute w-full h-full bg-black opacity-30 rounded-lg"></div>
    <img src={src} alt={alt} />
    <small class='absolute bottom-2 right-5 text-2xl text-white'>{title}</small>
  </button>
}

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", ({ html }) => html(
    <BaseDoc>
      <body class="font-semibold">
        <div
          class='flex relative min-h-screen flex-col bg-cover bg-center bg-[url(./assets/bg1.png)]'
        >
          <div class="absolute inset-0 bg-black opacity-70"></div>
          <header class='z-10 bg-black py-2 px-4'>
            <div
              class='flex items-center justify-between max-w-[1200px] m-[auto]'
            >
              <a href='/'>
                <h3 class='text-white'>PDA-TEECRAFT</h3>
              </a>
              <div class='flex gap-2'>
                <button class='rounded-md bg-red-700 py-2 px-3 text-white hover:opacity-90'>
                  Start Creating
                </button>
                <button class='rounded-md bg-black py-1 px-2 text-white hover:opacity-90'>
                  Login
                </button>
              </div>
            </div>
          </header>

          <div class='border-box z-10 mx-8 mt-10 flex flex-col items-center justify-center rounded-md bg-black/70 p-4 backdrop-blur-sm md:hidden'>
            <div class='w-10 text-orange-500' />
            <h3 class='mt-2 text-center text-white'>
              We can't provide you the designer feature in mobile, but you can still login to see your
              existing designs!
            </h3>
          </div>

          <main class='z-10'>
            <h2 class='mt-20 text-center text-3xl text-white md:mt-36 md:text-5xl'>
              Design your creativity
            </h2>

            <p
              class='mt-20 px-5 text-center text-lg text-white max-w-[975px] mx-[auto]'
            >
              Unleash your creativity with our state-of-the-art tshirt design tool. Our user-friendly
              interface allows you to effortlessly customize your own unique designs, featuring a wide
              range of colors, fonts, and graphics.
            </p>

            <div class=' mt-10 flex items-center justify-center md:mt-36'>
              <button class='py-2 px-3 text-md rounded-md bg-white py-1 px-2 hover:opacity-90 '>
                Start Creating
              </button>
            </div>
          </main>
        </div>
        <article class='relative hidden flex-col pb-10 md:flex'>
          <h1 class='py-10 text-center text-5xl'>Start Creating</h1>
          <div class='flex gap-5 justify-between self-center max-w-[1200px]'>
            <AnimBtn src="./public/assets/tshirt.png" title="Tshirt" alt="tshirt button" />
            <AnimBtn src="./public/assets/hoodie.png" title="Hoodie" alt="hoodie button" />
            <AnimBtn src="./public/assets/mug.png" title="Mug" alt="mug button" />
          </div>
          <div class="z-[-1] absolute inset-0 bg-black opacity-10"></div>
        </article>
      </body>
    </BaseDoc >
  ))
  .post("/clicked", () => <div>Im from server</div>)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
