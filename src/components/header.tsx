import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { NavLink } from './nav-link'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="size-6" />

        <Separator className="h6" orientation="vertical" />

        <nav className=" flex items-center space-x-6 lg:space-x-4">
          <NavLink to="/">
            <Home className="size-4" />
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed className="size-4" />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
