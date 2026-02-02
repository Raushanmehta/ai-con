"use client"

import { FileClock, Home, Settings, WalletCards, type LucideIcon } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

interface MenuItem {
  name: string
  icon: LucideIcon
  path: string
}

function Sidebar() {
  const router = useRouter()
  const pathname = usePathname()

  const menuList: MenuItem[] = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "History", icon: FileClock, path: "/dashboard/history" },
    { name: "Billing", icon: WalletCards, path: "/dashboard/billing" },
    { name: "Setting", icon: Settings, path: "/dashboard/setting" },
  ]

  const handleNavigation = (menuPath: string) => {
    router.push(menuPath)
  }

  return (
    <div className="h-screen relative p-5 border-r border-gray-800 shadow-sm">
      <div className="flex justify-center">
        <Image src="/logo-white.png" alt="logo" width={150} height={100} />
      </div>

      <hr className="my-4 border-r border-gray-800" />

      <div className="mt-10">
        {menuList.map((menu, index) => {
          const isActive = pathname === menu.path
          const Icon = menu.icon

          return (
            <div
              key={index}
              onClick={() => handleNavigation(menu.path)}
              className={`flex gap-2 mb-2 p-3 items-center rounded-lg cursor-pointer
              ${
                isActive
                  ? "bg-pink-600 text-white"
                  : "hover:bg-pink-700 hover:text-white"
              }`}
            >
              <Icon className={isActive ? "text-white" : "text-gray-500"} />
              <h2 className={isActive ? "text-white" : "text-gray-500"}>
                {menu.name}
              </h2>
            </div>
          )
        })}
      </div>

      <div className="absolute bottom-10 left-0 w-full">
        
      </div>
    </div>
  )
}

export default Sidebar
