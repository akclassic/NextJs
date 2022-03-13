import { useRouter } from "next/router"

export default function ProductDetail() {
    const router = useRouter();
    const productId = router.query.productid;

    return <h1>Product id is: {productId}</h1>
}