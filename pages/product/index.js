import Link from "next/link";

function Product({ productId = 55}) {
    return (
        <>
            <h1>Product Page</h1>
            To navigate to home page. Click
            <Link href="/">
                <a>&nbsp;here</a>
            </Link>
            <br />
            <Link href="/product/1">
                <a>&nbsp;Product 1</a>
            </Link>
            <br />
            <Link href="/product/2" replace>
                <a>&nbsp;Product 2</a>
            </Link>
            <br />
            <Link href={`/product/${productId}`}>
                <a>&nbsp;Product {productId}</a>
            </Link>
        </>
    );
}

export default Product;