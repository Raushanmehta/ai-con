"use client"

import { FileClock, Home, Settings, WalletCards } from "lucide-react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

function Sidebar() {
  const router = useRouter()
  const path = usePathname()

  const MenuList = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "History", icon: FileClock, path: "/dashboard/history" },
    { name: "Billing", icon: WalletCards, path: "/dashboard/billing" },
    { name: "Setting", icon: Settings, path: "/dashboard/setting" },
  ]

  const handleNavigation = (menuPath: string) => {
    router.push(menuPath)
  }

  return (
    <div className="h-screen relative p-5 shadow-sm">
      <div className="flex justify-center">
        <Image src="/logo-black.png" alt="logo" width={150} height={100} />
      </div>

      <hr className="my-4 border-gray-100" />

      <div className="mt-10">
        {MenuList.map((menu, index) => {
          const isActive = path === menu.path
          const Icon = menu.icon

          return (
            <div
              key={index}
              onClick={() => handleNavigation(menu.path)}
              className={`flex gap-2 mb-2 p-3 items-center rounded-lg cursor-pointer
              ${
                isActive
                  ? "bg-[#FF9400] text-white"
                  : "hover:bg-[#FF9400] hover:text-white"
              }`}
            >
              <Icon className={isActive ? "text-white" : "text-gray-700"} />
              <h2 className={isActive ? "text-white" : "text-gray-700"}>
                {menu.name}
              </h2>
            </div>
          )
        })}
      </div>

      <div className="absolute bottom-10 left-0 w-full"></div>
    </div>
  )
}

export default Sidebar
