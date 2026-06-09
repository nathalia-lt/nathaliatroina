import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import logo from "@/assets/logo.png"


function Header() {

  return (
    <header className="bg-background border-b border-border flex items-center justify-between py-2 px-3xl">
      <a href="/nathaliatroina" className="">
        <img src={logo.src} alt="Logo" className="h-10 w-10" />
      </a>

      <NavigationMenu viewport={false} >
        <NavigationMenuList className="flex items-center gap-3xl">
            <NavigationMenuItem>
              <NavigationMenuLink className="w-5xl h-4xl justify-center" href="/nathaliatroina/about">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-5xl h-4xl justify-center">Work</NavigationMenuTrigger>
              <NavigationMenuContent >
                  <NavigationMenuLink className="w-32 hover:bg-neutral-300 hover:rounded-none" href='/nathaliatroina/projects/ultrahuman'>Ultrahuman</NavigationMenuLink>
                  <NavigationMenuLink className="w-32 hover:bg-neutral-300 hover:rounded-none" href='/nathaliatroina/projects/design-system'>Design System</NavigationMenuLink>
                  <NavigationMenuLink className="w-32 hover:bg-neutral-300 hover:rounded-none" href='/nathaliatroina/projects/real-estate'>Real Estate</NavigationMenuLink>
                  <NavigationMenuLink className="w-32 hover:bg-neutral-300 hover:rounded-none" href='/nathaliatroina/projects/period-tracker'>Period Tracker</NavigationMenuLink>
                  <NavigationMenuLink className="w-32 hover:bg-neutral-300 hover:rounded-none" href='/nathaliatroina/projects/spirit-airlines'>Spirit Airlines</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="w-5xl h-4xl justify-center" href="/nathaliatroina#contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}

export default Header;