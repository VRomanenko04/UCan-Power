import { MetadataRoute } from "next";
import { products } from "@/products";

export default function sitemap(): MetadataRoute.Sitemap {
    const productModulesPages: MetadataRoute.Sitemap = products.modules.map((product) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/models/${product.searchTag}`
    }))

    const productSolutionsPages: MetadataRoute.Sitemap = products.ready_solutions.map((product) => ({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/models/${product.searchTag}`
    }))

    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/models`
        },
        ...productModulesPages,
        ...productSolutionsPages
    ]
}