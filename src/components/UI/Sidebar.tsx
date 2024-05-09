import { Home, Library, Search } from "lucide-react";
import { Playlist } from "../Playlist";

export function Sidebar() {
    const colors: string[] = ["red", "yellow", "green"];
    const icons = [
        { component: Home, label: "Home" },
        { component: Search, label: "Search" },
        { component: Library, label: "Your Library" },
    ];

    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <div className='flex items-coenter gap-2'>
                {colors.map((color, index) => (
                    <div key={index} className={`w-3 h-3 bg-${color}-500 rounded-full`} />
                ))}
            </div>
            <nav className='space-y-5 mt-10'>
                {icons.map(({ component: IconComponent, label }, index) => (
                    <a href="" key={index} className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
                    <IconComponent />
                    {label}
                </a>
                ))}
            </nav>
            <Playlist />
      </aside>
    )
}