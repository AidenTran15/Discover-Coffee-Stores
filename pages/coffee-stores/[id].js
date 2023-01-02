import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
    const router = useRouter();
    console.log("router",router);
    return (
        <div>
            Coffee Store Page{router.query.id}
            <Link href="/"> 
                Back to home
            </Link>
            <Link href="/coffee-stores/dynamic"> 
                Go to dynamic page
            </Link>
        </div>
    );
};

export default CoffeeStore;