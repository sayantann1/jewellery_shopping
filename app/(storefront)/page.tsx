"use client";

import Link from "next/link";
import { CategoriesSelection } from "../components/storefront/CategorySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProducts";
import { Hero } from "../components/storefront/Hero";
import { Navbar } from "../components/storefront/Navbar";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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
          <p className="text-sm md:text-md uppercase tracking-widest text-slate-300 "></p>
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

function FAQ() {
  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-light text-gray-800 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lg text-gray-700">
              What materials do you use in your jewelry?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We use high-quality materials including 14k and 18k gold, sterling
              silver, and ethically sourced gemstones in our jewelry pieces.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-lg text-gray-700">
              Do you offer custom designs?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes, we offer custom design services. Please contact us for more
              information on creating a unique piece tailored to your
              preferences.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-lg text-gray-700">
              What is your return policy?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We offer a 30-day return policy for unworn items in their original
              condition. Custom pieces are non-refundable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-lg text-gray-700">
              How do I care for my jewelry?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              We recommend storing your jewelry in a cool, dry place and
              cleaning it gently with a soft cloth. Avoid exposure to harsh
              chemicals and remove jewelry before swimming or bathing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-lg text-gray-700">
              Do you offer international shipping?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              Yes, we ship internationally. Shipping costs and delivery times
              vary depending on the destination. Please check our shipping
              policy for more details.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:hi2jt3r@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-light text-gray-800 mb-8 text-center">
          Contact Us
        </h2>
        <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light text-gray-700 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-4">
              We would love to hear from you. Please fill out this form and we
              will get back to you as soon as possible.
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <strong>Email:</strong> info@jewelzz.com
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-gray-600">
                <strong>Address:</strong> 123 Sparkle Street, Gem City, JW 12345
              </p>
            </div>
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                className="mt-1"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                className="mt-1"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="How can we help?"
                className="mt-1"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                className="mt-1"
                rows={4}
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </main>
    </div>
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
        <FAQ />
        <Contactus />
      </div>
    </div>
  );
}
