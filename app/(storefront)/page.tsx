import Link from "next/link";
import { CategoriesSelection } from "../components/storefront/CategorySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProducts";
import { Hero } from "../components/storefront/Hero";
import { Navbar } from "../components/storefront/Navbar";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

function HeroSection() {
  return (
    <section className="w-full h-screen md:h-[800px] mx-auto flex justify-center">
      <div className="relative w-full h-full md:h-[800px]">
        {/* <div className=" "> */}
        <div className="bg-gradient-to-b absolute h-full w-full from-transparent to-black opacity-55" />
        <Image
          alt="Furniture"
          src="/bg2.jpeg"
          width={1920}
          height={1200}
          priority={true}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container absolute py-8 h-screen md:h-[800px] w-full">
        <div className="flex flex-col justify-center z-30 h-full">
          <p className="text-sm md:text-md uppercase tracking-widest text-slate-300 ">
          </p>
          <h1 className="text-5xl md:text-9xl font-semibold text-gray-200 my-4 shadow-md [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Find Modern
            <br />
            Jewellery
          </h1>

          <div className="flex gap-4 mt-5 max-w-screen flex-wrap-reverse">
            {/* <Link
              href="/shop"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "border-2 border-white text-white rounded px-8 py-3 ",
                "md:px-16 md:py-6",
                "hover:text-zinc-600 hover:bg-white"
              )}
            > */}
            <Button className="bg-white text-black rounded-none hover:bg-gray-300 text-lg py-3 px-12">
              New in
            </Button>
            {/* </Link> */}

            {/* <Link
              href="https://github.com/clonglam/HIYORI-master"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "border-2 border-primary text-white rounded px-8 py-3 ",
                "md:px-16 md:py-6"
              )}
            > */}
            <Button className="rounded-none bg-black text-lg py-3 px-12">
              Shop now
            </Button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function IndexPage() {
  return (
    <div>
      {/* <Hero /> */}
      <HeroSection />
      <div className="px-4 md:px-6 lg:px-8">
        <CategoriesSelection />
        <FeaturedProducts />
      </div>
    </div>
  );
}
