import Link from "next/link";
import { useRouter } from "next/router";

function Home() {

    const router = useRouter();

    const handleClick = () => {
        console.log("Placing your order");
        router.push("/product");
    }

    return <div>
        <h1>Home Page</h1>
        To navigate to Products. Click  
        <Link href="/product">
            <a>&nbsp;here</a>
        </Link>
        <br />
        <button onClick={handleClick}>
            Place Order
        </button>
    </div>
}

export default Home;