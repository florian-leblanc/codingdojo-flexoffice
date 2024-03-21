import Link from "next/link";

export function Menu() {
    return (
        <ul>
            <li>
                <Link href="/home">
                    <p>Home</p>
                </Link>
            </li>  <li>
                <Link href="/home/rooms">
                    <p>rooms</p>
                </Link>
            </li>
        </ul>
    )};
