export interface NavItem {
    label: string
    href: string
    dropdown?: { label: string; href: string }[]
}

export const NavItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
        label: "Categories",
        href: "#",
    },
    { label: "Contact", href: "/contact" },
    {
        label: "About",
        href: "#",
    },
]