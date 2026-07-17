import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import logo from "@/assets/logo.png"

import { ThemeToggle } from "./ThemeToggle"


function Header() {

  return (
    <header className="bg-background border-b border-border flex items-center justify-between py-2 px-sm md:px-3xl">
      <a href="/nathaliatroina" className="">
        <img src={logo.src} alt="Nathalia Troina logo" className="h-10 w-10 dark:brightness-0 dark:invert" />
      </a>
      <div className="flex gap-0 md:gap-2xl items-center">
      <ThemeToggle client:load />
      <NavigationMenu viewport={false} >
        <NavigationMenuList className="flex items-center gap-0 md:gap-3xl">
            <NavigationMenuItem>
              <NavigationMenuLink className="w-5xl h-4xl justify-center " href="/nathaliatroina#aboutme">About</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="w-5xl h-3xl justify-center">Work</NavigationMenuTrigger>
              <NavigationMenuContent data-test="EU" className="-mt-1">
                  <NavigationMenuLink className="w-32 hover:bg-neutral-300 hover:rounded-none" href='/nathaliatroina/projects/ultrahuman'>Ultrahuman</NavigationMenuLink>
                  <NavigationMenuLink className="w-32 hover:bg-neutral-300 hover:rounded-none" href='/nathaliatroina/projects/real-estate'>Real Estate</NavigationMenuLink>
                  <NavigationMenuLink className="w-32 hover:bg-neutral-300 hover:rounded-none" href='/nathaliatroina/projects/period-tracker'>Period Tracker</NavigationMenuLink>
                  <NavigationMenuLink className="w-32 hover:bg-neutral-300 hover:rounded-none" href='/nathaliatroina/projects/design-system'>Design System</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="w-5xl h-4xl justify-center" href="/nathaliatroina#contact">Contact</NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
    </header>
  )
}

export default Header;