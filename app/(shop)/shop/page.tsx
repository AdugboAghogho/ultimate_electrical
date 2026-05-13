import ShopClient from "./ShopClient";
import { client } from "@/lib/sanity";
import { allProducts, allCategories } from "@/lib/queries";

export default async function ShopPage() {
  // const products = await client.fetch(allProducts);
  const query = `*[_type == "product"] {
    _id,
    title,
    price,
    category,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
  }`;
    const products = await client.fetch(query);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-gray-800 font-sans pb-20 md:pb-0">
      <ShopClient products={products}  />
    </div>
  );
}
