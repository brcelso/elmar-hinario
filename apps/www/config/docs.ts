import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Hinário",
      href: "/docs",
    },
  ],
  sidebarNav: [
    {
      title: "Hinário",
      items: [
        {
          title: "Ordem do Culto Principal I",
          href: "/docs",
          items: [],
        },
      ],
    },
  ],
}
