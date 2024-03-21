import {Menu} from "@/app/home/menu/menu";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Menu />
            <div>{children}</div>
        </>
)}
