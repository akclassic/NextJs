import Link from "next/link";

function Home() {
    return <div>
        <h1>Home Page</h1>
        To navigate to Products. Click  
        <Link href="/product">
            <a>&nbsp;here</a>
        </Link>
    </div>
}

export default Home;