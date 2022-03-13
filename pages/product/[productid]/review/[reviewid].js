import { useRouter } from "next/router"

export default function ReviewDetail() {
    const router = useRouter();
    const productId = router.query.productid;
    const reviewId = router.query.reviewid;

    return <h1>Review {reviewId} for prodcut {productId} </h1>
}