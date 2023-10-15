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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  ${children}
<script src="./public/scripts/htmx.min.js"></script>
<script src="./public/scripts/hyperscript.min.js"></script>
</html>`

const BaseDocDesigner = ({ children }: elements.Children) => `<!DOCTYPE html>
<html lang="en">

  <head>
    <title>PDA-TEECRAFT</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="./public/output.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  ${children}
<script src="./public/scripts/htmx.min.js"></script>
<script src="./public/scripts/hyperscript.min.js"></script>
<script src="./public/scripts/konva.min.js"></script>
<script src="./public/scripts/designer.js" type="module"></script>
</html>`

const AnimSelectBtn = ({ src, alt, title }: { src: string; alt: string; title: string; }) => {
  return <button
    style="transition: all 100ms cubic-bezier(.68,-0.55,.27,1.55);"
    class='relative'
    _="on mouseenter add .scale-105 then settle then on mouseleave remove .scale-105"
  >
    <div class="absolute w-full h-full bg-black opacity-30 rounded-lg"></div>
    <img src={src} alt={alt} />
    <small class='absolute bottom-2 right-5 text-2xl text-white'>{title}</small>
  </button>
}

const AnimBtn = ({ children, className }: { children: string | JSX.Element; className?: string; }) => {
  return <button
    style="transition: all 100ms cubic-bezier(.68,-0.55,.27,1.55);"
    class={className ? className : ''}
    _="on mouseenter add .scale-105 then settle then on mouseleave remove .scale-105"
  >
    {children}
  </button>
}

const Header = ({ pos = 'main' }: { pos?: 'main' | 'login' | 'designer' }) => {
  return <header class={`h-full min-h-[56px] box-border z-10 ${pos === 'main' ? 'bg-black' : pos === 'designer' ? 'bg-white shadow-lg' : ''} py-2 px-4`}>
    <div class={`flex items-center justify-between max-w-[1500px] m-[auto] `}>
      <a href='/' class="h-full ">
        <h3 class={`${pos === 'main' ? 'text-white' : 'text-black'}`}>PDA-TEECRAFT</h3>
      </a>
      <div class='flex gap-2 min-h-[40px]'>
        <AnimBtn className={`${pos !== 'designer' ? 'hidden' : ''} min-h-[40px]`}>
          <div class="flex items-center gap-2 ">
            <i class="fa-regular fa-floppy-disk text-xl"></i>
            Save your design
          </div>
        </AnimBtn>
        <AnimBtn className={`${pos === 'designer' ? 'hidden' : ''} rounded-md ${pos === 'main' ? 'bg-red-700' : 'bg-black'} py-2 px-3 text-white hover:opacity-90`}>
          <a href="/register">{pos === 'main' ? 'Start Creating' : 'Create Account'}</a>
        </AnimBtn>
        <AnimBtn className={`hidden sm:block rounded-md bg-black py-1 px-2 text-white hover:opacity-90 ${pos === 'main' ? '' : 'sm:hidden'}`}>
          <a href="/login" >
            Login
          </a>
        </AnimBtn>
      </div>
    </div>
  </header>
}

const app = new Elysia()
  .use(html())
  .use(staticPlugin())
  .get("/", ({ html }) => html(
    <BaseDoc>
      <body class="font-semibold">
        <div class='flex relative min-h-[950px] flex-col bg-cover bg-center bg-[url(./assets/bg1.png)]' >
          <div class="absolute inset-0 bg-black opacity-70"></div>
          <Header></Header>

          <div class='border-box z-10 mx-8 mt-10 flex flex-col items-center justify-center rounded-md bg-black/70 p-4 backdrop-blur-sm md:hidden'>
            <div class='w-10 text-orange-500' />
            <h3 class='mt-2 text-center text-white'>
              We can't provide you the designer feature in mobile, but you can still login to see your
              existing designs!
            </h3>
          </div>

          <main class='z-10'>
            <h2 class='mt-20 text-center text-3xl text-white md:mt-36 md:text-5xl'>
              Design your creativity !
            </h2>

            <p
              class='mt-20 px-5 text-center text-lg text-white max-w-[975px] mx-[auto]'
            >
              Unleash your creativity with our state-of-the-art tshirt design tool. Our user-friendly
              interface allows you to effortlessly customize your own unique designs, featuring a wide
              range of colors, fonts, and graphics.
            </p>

            <div class=' mt-10 flex items-center justify-center md:mt-36'>
              <AnimBtn className='py-2 px-3 text-md rounded-md bg-white py-1 px-2 hover:opacity-90 '>
                Start Creating
              </AnimBtn>
            </div>
          </main>
        </div>
        <article class='relative hidden flex-col pb-10 md:flex'>
          <h1 class='py-10 text-center text-5xl'>Start Creating</h1>
          <div class='flex gap-5 justify-between self-center max-w-[1500px]'>
            <AnimSelectBtn src="./public/assets/tshirt.png" title="Tshirt" alt="tshirt button" />
            <AnimSelectBtn src="./public/assets/hoodie.png" title="Hoodie" alt="hoodie button" />
            <AnimSelectBtn src="./public/assets/mug.png" title="Mug" alt="mug button" />
          </div>
          <div class="z-[-1] absolute inset-0 bg-black opacity-10"></div>
        </article>
      </body>
    </BaseDoc >
  ))
  .get("/login", ({ html }) => html(
    <BaseDoc>
      <body class="font-semibold">
        <div class="flex min-h-[950px] flex-col">
          <Header pos="login"></Header>
          <div class="pt-20 grid grid-cols-1 place-items-center px-64">
            <h3 class="text-3xl font-medium">Login to TEECRAFT</h3>

            <div class="min-w-[400px] mt-20">
              <label class="flex flex-col text-xl">
                <small>Email</small>
                <input class="rounded-md py-2 px-3 border border-1 font-light" placeholder="Input your email address" />
              </label>
            </div>

            <div class="min-w-[400px] mt-5 relative">
              <label class="flex flex-col text-xl">
                <small>Password</small>
                <input _="on changevis if @type is 'password' set @type to 'text' otherwise set @type to 'password'" class="rounded-md py-2 pl-3 pr-10 border border-1 font-light" type="password" placeholder="Input your password" />
                <button _="on click send changevis to <input,i/>">
                  <i _="on changevis if @class contains 'fa-eye-slash' remove .fa-eye-slash then add .fa-eye otherwise remove .fa-eye then add .fa-eye-slash" class="fa-solid fa-eye absolute bottom-3 right-2 text-gray-700"></i>
                </button>
              </label>
            </div>

            <div class="min-w-[400px] mt-20">
              <AnimBtn className="rounded-md bg-black text-center text-white w-full py-2 px-3">Login</AnimBtn>
            </div>

            <div class="min-w-[400px] mt-10">
              <a class="underline-offset-1 underline" href="#">Forgot Password?</a>
            </div>
            <div class="min-w-[400px] mt-2">
              <a class="underline-offset-1 underline" href="/register">New User?</a>
            </div>

            <div class="min-w-[400px] mt-14 text-center">
              &boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&nbsp;or&nbsp;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;
            </div>

          </div>

        </div>
      </body>
    </BaseDoc>
  ))
  .get("/register", ({ html }) => html(
    <BaseDoc>
      <body class="font-semibold">
        <div class="min-h-[950px] flex">
          <img src='./public/assets/bg2.png' alt="background 2" class="min-w-[600px] hidden lg:block bg-cover" />
          <div class="w-full">
            <header class="flex justify-end px-5 py-3 font-light text-xl">
              Already have an account? <a class="underline underline-offset-1" href="/login"> Login</a>
            </header>

            <main class="flex flex-col items-center w-full">
              <h3 class="text-3xl">Unleash your creativity!</h3>
              <div class="min-w-[400px] mt-20">
                <label class="flex flex-col text-xl">
                  <small>Fullname</small>
                  <input class="rounded-md py-2 px-3 border border-1 font-light" placeholder="Input your fullname" />
                </label>
              </div>

              <div class="min-w-[400px] mt-5">
                <label class="flex flex-col text-xl">
                  <small>Email</small>
                  <input class="rounded-md py-2 px-3 border border-1 font-light" placeholder="Input your email address" />
                </label>
              </div>

              <div class="min-w-[400px] mt-5 relative">
                <label class="flex flex-col text-xl">
                  <small>Password</small>
                  <input _="on changevis if @type is 'password' set @type to 'text' otherwise set @type to 'password'" class="rounded-md py-2 pl-3 pr-10 border border-1 font-light" type="password" placeholder="Input your password" />
                  <button _="on click send changevis to <input,i/>">
                    <i _="on changevis if @class contains 'fa-eye-slash' remove .fa-eye-slash then add .fa-eye otherwise remove .fa-eye then add .fa-eye-slash" class="fa-solid fa-eye absolute bottom-3 right-2 text-gray-700"></i>
                  </button>
                </label>
              </div>

              <div class="min-w-[400px] mt-5 relative">
                <label class="flex flex-col text-xl">
                  <small>Retype Password</small>
                  <input _="on changevis2 if @type is 'password' set @type to 'text' otherwise set @type to 'password'" class="rounded-md py-2 pl-3 pr-10 border border-1 font-light" type="password" placeholder="Input your password" />
                  <button _="on click send changevis2 to <input,i/>">
                    <i _="on changevis2 if @class contains 'fa-eye-slash' remove .fa-eye-slash then add .fa-eye otherwise remove .fa-eye then add .fa-eye-slash" class="fa-solid fa-eye absolute bottom-3 right-2 text-gray-700"></i>
                  </button>
                </label>
              </div>

              <div class="min-w-[400px] mt-20">
                <AnimBtn className="rounded-md bg-black text-center text-white w-full py-2 px-3">Register</AnimBtn>
              </div>

              <div class="min-w-[400px] mt-5 font-light text-center">
                Already have an account? <a class="underline underline-offset-1" href="/login"> Login</a>
              </div>
              <div class="min-w-[400px] mt-14 text-center font-light">
                &boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&nbsp;or&nbsp;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;&boxh;
              </div>

            </main>
          </div>
        </div>
      </body>
    </BaseDoc>
  ))
  .get("/designer", ({ html }) => html(
    <BaseDocDesigner>
      <body>
        <Header pos="designer"></Header>
        <main class="flex max-w-[1500px] m-[auto] pt-2">
          <div class="w-1/3 border-r-2">
            <div class="py-10 flex flex-col border-b-2">
              <div class="font-semibold">Design your product</div>
              <small class="text-gray-500 font-semibold mt-5">Max file 50mb</small>
              <AnimBtn className="border mt-3 py-3 rounded-lg mr-20">
                <div class="flex gap-2 justify-center items-center ">
                  <i class="fa-solid fa-plus"></i>
                  Add image
                </div>
              </AnimBtn>
            </div>

            <div class="py-10 flex flex-col border-b-2">
              <div class="font-semibold">Choose product colors</div>
              <small class="text-gray-500 font-semibold mt-5">Select multiple background color to offer</small>
              <div class="flex gap-2 mr-20 flex-wrap">
                <AnimBtn className="mt-3 py-3 rounded-lg ">
                  <div class="rounded-full w-[31px] h-[31px] bg-black"></div>
                </AnimBtn>
                <AnimBtn className="mt-3 py-3 rounded-lg ">
                  <div class="rounded-full w-[31px] h-[31px] bg-red-500"></div>
                </AnimBtn>
                <AnimBtn className="mt-3 py-3 rounded-lg ">
                  <div class="rounded-full w-[31px] h-[31px] bg-[#FCF58B]"></div>
                </AnimBtn>
                <AnimBtn className="mt-3 py-3 rounded-lg ">
                  <div class="rounded-full w-[31px] h-[31px] bg-[#0C1A2C]"></div>
                </AnimBtn>
                <AnimBtn className="mt-3 py-3 rounded-lg ">
                  <div class="rounded-full w-[31px] h-[31px] bg-[#22488F]"></div>
                </AnimBtn>
                <AnimBtn className="mt-3 py-3 rounded-lg ">
                  <div class="rounded-full w-[31px] h-[31px] bg-[#523885]"></div>
                </AnimBtn>
                <AnimBtn className="mt-3 py-3 rounded-lg ">
                  <div class="rounded-full w-[31px] h-[31px] bg-white border"></div>
                </AnimBtn>
                <AnimBtn className="mt-3 py-3 rounded-lg ">
                  <div class="rounded-full w-[31px] h-[31px] bg-[#413C42]"></div>
                </AnimBtn>
              </div>
            </div>

            <div class="py-10 flex flex-col border-b-2">
              <div class="font-semibold">View</div>
              <div class="flex gap-3 mr-20">
                <AnimBtn className="bg-black flex-1 border mt-3 py-3 rounded-lg ">
                  <div class="text-white flex gap-2 justify-center items-center ">
                    Front
                  </div>
                </AnimBtn>
                <AnimBtn className="flex-1 border mt-3 py-3 rounded-lg ">
                  <div class="flex gap-2 justify-center items-center ">
                    Back
                  </div>
                </AnimBtn>
              </div>
            </div>

            <div class="py-10 flex flex-col border-b-2">
              <div class="font-semibold">Add your font</div>
              <AnimBtn className="border mt-3 py-3 rounded-lg mr-20">
                <div class="flex gap-2 justify-center items-center ">
                  <i class="fa-solid fa-font"></i>
                  Add Text
                </div>
              </AnimBtn>
              <div class="mt-3 flex justify-center gap-2 mr-20">
                <AnimBtn className="flex gap-2 justify-center items-center border py-2 px-3 rounded-md">
                  <i class="fa-solid fa-font"></i>
                </AnimBtn>
                <AnimBtn className="flex gap-2 justify-center items-center border py-2 px-3 rounded-md">
                  <i class="fa-solid fa-bold"></i>
                </AnimBtn>
                <AnimBtn className="flex gap-2 justify-center items-center border py-2 px-3 rounded-md">
                  <i class="fa-solid fa-italic"></i>
                </AnimBtn>
                <AnimBtn className="flex gap-2 justify-center items-center border py-2 px-3 rounded-md">
                  <i class="fa-solid fa-strikethrough"></i>
                </AnimBtn>
                <AnimBtn className="flex gap-2 justify-center items-center border py-2 px-3 rounded-md">
                  <i class="fa-solid fa-underline"></i>
                </AnimBtn>
              </div>
            </div>

            <div class="py-10 flex flex-col border-b-2">
              <AnimBtn className="flex gap-2 justify-center items-center border py-2 px-3 rounded-md mr-20">
                <div>
                  <i class="fa-solid fa-arrow-down"></i>
                  Download
                </div>
              </AnimBtn>
            </div>

          </div>
          <div class="flex flex-col justify-center items-center flex-1 bg-[#f6f6f9]">
            <div class="flex-1 flex items-center justify-center relative">
              <div id="c" class="absolute w-[750px] h-[750px] "></div>
            </div>
            <div class="flex justify-center items-center min-h-[36px] w-full bg-gray-800 font-light text-white">Design 1</div>
          </div>
        </main>
      </body>
    </BaseDocDesigner>
  ))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
