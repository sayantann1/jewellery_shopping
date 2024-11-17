import { ProductCard } from "@/app/components/storefront/ProductCard";
import prisma from "@/app/lib/db";
import { notFound } from "next/navigation";
import { unstable_noStore as noStore } from "next/cache";

async function getData(productCategory: string) {
  switch (productCategory) {
    case "all": {
      const data = await prisma.product.findMany({
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
        where: {
          status: "published",
        },
      });

      return {
        title: "All Products",
        data: data,
      };
    }
    case "diamond": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "diamond",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Diamond Products",
        data: data,
      };
    }
    case "silver": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "silver",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Silver Products",
        data: data,
      };
    }
    case "gold": {
      const data = await prisma.product.findMany({
        where: {
          status: "published",
          category: "gold",
        },
        select: {
          name: true,
          images: true,
          price: true,
          id: true,
          description: true,
        },
      });

      return {
        title: "Gold Products",
        data: data,
      };
    }
    default: {
      return notFound();
    }
  }
}

export default async function CategoriesPage({
  params,
}: {
  params: { name: string };
}) {
  noStore();
  const { data, title } = await getData(params.name);
  return (
    <section>
      <h1 className="font-semibold text-3xl my-5 text-gray-800 ">{title}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}
