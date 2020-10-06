import Link from 'next/link'


export default function Sidebar() {
    return (
        <div className="p-16" >
            <div>
                <h1 className="text-2xl">My Account</h1>
            </div>
            <ul className="list p-1">
                <li className="pb-2">
                    <a className="text-black text-xl" id="btn" >My Orders</a>
                </li>
                <li className="pb-2">
                    <a id="btn" className="text-black text-xl">My Wishlist</a>
                </li>
                <li className="pb-2">
                <Link href="/customer/addresses">
                    <a id="btn" className="text-black text-xl">Address Book</a>
                    </Link>
                </li>
                <li className="pb-2">
                    <Link  href="/customer/info">
                    <a id="btn" className="text-black text-xl">Account Detail</a>
                    </Link>
                    
                </li>
                <li className="pb-2">
                    <a className="text-black text-xl">My Membership</a>
                    <ul className="list pb-2">
                        <li className="pb-2 py-1">
                        <a className="text-black text-xl">My Point</a>
                        </li>
                        <li className="pb-2">
                        <a className="text-black text-xl">Exchange Point</a>
                        </li>
                        <li className="pb-2">
                        <a className="text-black text-xl">Redeemed Point</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}