import { client } from "@/lib/sanity";
import CategoriesPage from "./CategoriesPage";

export default async function Page() {
    // 1. Define the query
    const query = `*[_type == "product"] {
    _id,
    title,
    price,
    category,
    "slug": slug.current,
    "imageUrl": images[0].asset->url
  }`;

    const products = await client.fetch(query);

    return <CategoriesPage products={products} />;
}