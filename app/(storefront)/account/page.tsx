import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogOut, ShoppingBag, User } from "lucide-react";
import { redirect } from "next/navigation";
// import { Suspense } from "react";

export default async function page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect("/");
  }

  const data = await prisma.order.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      products: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-background">
      <div>
        <h1 className="font-semibold text-3xl my-5">
          Welcome back, {user.given_name}
        </h1>
        <p className="text-lg text-muted-foreground">
          You can view your orders and account information here.
        </p>
      </div>
      <div className="grid md:grid-cols-1 gap-6 mb-8 mt-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ShoppingBag className="h-5 w-5 mr-2" />
              Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">{data.length}</p>
            <p className="text-sm text-gray-500">Total orders</p>
          </CardContent>
        </Card>
       
      </div>
      <h1 className="text-4xl font-bold my-4 gap-4">Your Order history</h1>
      <div className="flex flex-col gap-3">
        {data.map((d, idx) => (
          <Card key={d.id} className="p-4">
            <div>
              <div className="flex justify-between">
                <h1>Order {idx + 1}</h1>
                {d.createdAt.getDate()} /{d.createdAt.getMonth()}/{" "}
                {d.createdAt.getFullYear()}
              </div>
              <div>
                {d.products?.map((p) => {
                  return <div key={p.productId}>{p.product.name}</div>;
                })}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
