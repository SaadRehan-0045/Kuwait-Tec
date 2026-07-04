import * as React from "react"
import { SearchForm } from "@/components/search-form"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { 
  Settings05Icon, 
  ChartRingIcon, 
  SentIcon, 
  PackageIcon, 
  TruckIcon, 
  TagIcon, 
  DashboardSquareIcon,
  AnalyticsIcon,
  GiftIcon,
  WalletIcon,
  ProductLoadingIcon,
  // SmartphoneIcon,
  TabletIcon,
  LaptopIcon,
  GameControllerIcon,
  // HeadphoneIcon,
  PrinterIcon,
  HomeIcon,
  SmartphoneChargingIcon,
  HeadphonesIcon,
  DatabaseAddIcon,
  StarIcon,
  DiscountIcon,
  // NetworkIcon
} from "@hugeicons/core-free-icons"

const data = {
  user: {
    name: "John Doe",
    email: "john@ecomstore.com",
    avatar: "/avatars/john-doe.jpg",
    role: "Store Admin"
  },
  
  navMain: [
    {
      title: "Smartphones & Wearables",
      url: "/products/smartphones",
       icon: <HugeiconsIcon icon={SmartphoneChargingIcon} strokeWidth={2} />,
      items: [
        {
          title: "iPhones",
          url: "/products/smartphones/iphones",
        },
        {
          title: "Samsung Galaxy",
          url: "/products/smartphones/samsung",
        },
        {
          title: "Google Pixel",
          url: "/products/smartphones/pixel",
        },
        {
          title: "OnePlus",
          url: "/products/smartphones/oneplus",
        },
        {
          title: "Xiaomi & POCO",
          url: "/products/smartphones/xiaomi",
        },
        {
          title: "Smartwatches",
          url: "/products/smartphones/smartwatches",
        },
        {
          title: "Fitness Trackers",
          url: "/products/smartphones/fitness-trackers",
        },
        {
          title: "Phone Cases & Covers",
          url: "/products/smartphones/cases",
        },
        {
          title: "Chargers & Cables",
          url: "/products/smartphones/chargers",
        },
        {
          title: "Screen Protectors",
          url: "/products/smartphones/screen-protectors",
        },
        {
          title: "Power Banks",
          url: "/products/smartphones/power-banks",
        },
        {
          title: "Wireless Chargers",
          url: "/products/smartphones/wireless-chargers",
        },
      ],
    },
    {
      title: "Tablets & E-Readers",
      url: "/products/tablets",
      icon: <HugeiconsIcon icon={TabletIcon} strokeWidth={2} />,
      items: [
        {
          title: "iPad Series",
          url: "/products/tablets/ipad",
        },
        {
          title: "Samsung Galaxy Tab",
          url: "/products/tablets/samsung-tab",
        },
        {
          title: "Android Tablets",
          url: "/products/tablets/android",
        },
        {
          title: "Kindle E-Readers",
          url: "/products/tablets/kindle",
        },
        {
          title: "Kobo E-Readers",
          url: "/products/tablets/kobo",
        },
        {
          title: "Tablet Cases & Covers",
          url: "/products/tablets/cases",
        },
        {
          title: "Stylus & Digital Pens",
          url: "/products/tablets/stylus",
        },
        {
          title: "Screen Protectors",
          url: "/products/tablets/screen-protectors",
        },
        {
          title: "Tablet Stands & Mounts",
          url: "/products/tablets/stands",
        },
      ],
    },
    {
      title: "Laptops & Computers",
      url: "/products/laptops",
      icon: <HugeiconsIcon icon={LaptopIcon} strokeWidth={2} />,
      items: [
        {
          title: "Gaming Laptops",
          url: "/products/laptops/gaming",
        },
        {
          title: "Business Laptops",
          url: "/products/laptops/business",
        },
        {
          title: "Ultrabooks & Slim Laptops",
          url: "/products/laptops/ultrabooks",
        },
        {
          title: "MacBooks",
          url: "/products/laptops/macbooks",
        },
        {
          title: "Desktop PCs",
          url: "/products/laptops/desktops",
        },
        {
          title: "All-in-One PCs",
          url: "/products/laptops/all-in-one",
        },
        {
          title: "Computer Accessories",
          url: "/products/laptops/accessories",
        },
        {
          title: "Laptop Bags & Cases",
          url: "/products/laptops/bags",
        },
        {
          title: "Chargers & Adapters",
          url: "/products/laptops/chargers",
        },
        {
          title: "RAM & Storage Upgrades",
          url: "/products/laptops/upgrades",
        },
      ],
    },
    {
      title: "Gaming",
      url: "/products/gaming",
      icon: <HugeiconsIcon icon={GameControllerIcon} strokeWidth={2} />,
      items: [
        {
          title: "PlayStation 5",
          url: "/products/gaming/ps5",
        },
        {
          title: "Xbox Series X/S",
          url: "/products/gaming/xbox",
        },
        {
          title: "Nintendo Switch",
          url: "/products/gaming/switch",
        },
        {
          title: "Gaming Controllers",
          url: "/products/gaming/controllers",
        },
        {
          title: "Gaming Headsets",
          url: "/products/gaming/headsets",
        },
        {
          title: "Gaming Keyboards",
          url: "/products/gaming/keyboards",
        },
        {
          title: "Gaming Mice",
          url: "/products/gaming/mice",
        },
        {
          title: "Gaming Monitors",
          url: "/products/gaming/monitors",
        },
        {
          title: "Gaming Chairs",
          url: "/products/gaming/chairs",
        },
        {
          title: "VR Headsets",
          url: "/products/gaming/vr",
        },
        {
          title: "Gaming Accessories",
          url: "/products/gaming/accessories",
        },
        {
          title: "Game Titles",
          url: "/products/gaming/games",
        },
      ],
    },
    {
      title: "Audio & Headphones",
      url: "/products/audio",
   icon: <HugeiconsIcon icon={HeadphonesIcon}  strokeWidth={2} />,
      items: [
        {
          title: "Wireless Headphones",
          url: "/products/audio/wireless-headphones",
        },
        {
          title: "True Wireless Earbuds",
          url: "/products/audio/earbuds",
        },
        {
          title: "Over-Ear Headphones",
          url: "/products/audio/over-ear",
        },
        {
          title: "In-Ear Monitors (IEMs)",
          url: "/products/audio/iem",
        },
        {
          title: "Bluetooth Speakers",
          url: "/products/audio/bluetooth-speakers",
        },
        {
          title: "Smart Speakers",
          url: "/products/audio/smart-speakers",
        },
        {
          title: "Soundbars",
          url: "/products/audio/soundbars",
        },
        {
          title: "Audio Accessories",
          url: "/products/audio/accessories",
        },
        {
          title: "Microphones",
          url: "/products/audio/microphones",
        },
        {
          title: "Studio Monitors",
          url: "/products/audio/studio-monitors",
        },
      ],
    },
    {
      title: "Printers & Office",
      url: "/products/printers",
      icon: <HugeiconsIcon icon={PrinterIcon} strokeWidth={2} />,
      items: [
        {
          title: "Inkjet Printers",
          url: "/products/printers/inkjet",
        },
        {
          title: "Laser Printers",
          url: "/products/printers/laser",
        },
        {
          title: "All-in-One Printers",
          url: "/products/printers/all-in-one",
        },
        {
          title: "3D Printers",
          url: "/products/printers/3d",
        },
        {
          title: "Printer Ink & Toner",
          url: "/products/printers/ink-toner",
        },
        {
          title: "Scanners",
          url: "/products/printers/scanners",
        },
        {
          title: "Office Supplies",
          url: "/products/printers/office-supplies",
        },
        {
          title: "Shredders",
          url: "/products/printers/shredders",
        },
        {
          title: "Laminators",
          url: "/products/printers/laminators",
        },
        {
          title: "Whiteboards & Accessories",
          url: "/products/printers/whiteboards",
        },
      ],
    },
    {
      title: "Smart Home & IoT",
      url: "/products/smart-home",
      icon: <HugeiconsIcon icon={HomeIcon} strokeWidth={2} />,
      items: [
        {
          title: "Smart Speakers",
          url: "/products/smart-home/speakers",
        },
        {
          title: "Smart Lighting",
          url: "/products/smart-home/lighting",
        },
        {
          title: "Smart Thermostats",
          url: "/products/smart-home/thermostats",
        },
        {
          title: "Security Cameras",
          url: "/products/smart-home/security-cameras",
        },
        {
          title: "Video Doorbells",
          url: "/products/smart-home/doorbells",
        },
        {
          title: "Smart Locks",
          url: "/products/smart-home/locks",
        },
        {
          title: "Smart Plugs & Sensors",
          url: "/products/smart-home/plugs-sensors",
        },
        {
          title: "Robot Vacuums",
          url: "/products/smart-home/robot-vacuums",
        },
        {
          title: "Smart Home Hubs",
          url: "/products/smart-home/hubs",
        },
        {
          title: "Voice Assistants",
          url: "/products/smart-home/voice-assistants",
        },
      ],
    },
    {
      title: "Networking & Storage",
      url: "/products/networking",
       icon: <HugeiconsIcon icon={DatabaseAddIcon}  strokeWidth={2} />,
      items: [
        {
          title: "Wi-Fi Routers",
          url: "/products/networking/routers",
        },
        {
          title: "Mesh Wi-Fi Systems",
          url: "/products/networking/mesh-wifi",
        },
        {
          title: "Network Switches",
          url: "/products/networking/switches",
        },
        {
          title: "External Hard Drives",
          url: "/products/networking/external-hard-drives",
        },
        {
          title: "SSD Storage",
          url: "/products/networking/ssd",
        },
        {
          title: "USB Flash Drives",
          url: "/products/networking/usb-drives",
        },
        {
          title: "NAS (Network Storage)",
          url: "/products/networking/nas",
        },
        {
          title: "Ethernet Cables",
          url: "/products/networking/ethernet-cables",
        },
        {
          title: "Wi-Fi Adapters",
          url: "/products/networking/wifi-adapters",
        },
        {
          title: "Memory Cards",
          url: "/products/networking/memory-cards",
        },
      ],
    },
  ],
  
  navSecondary: [
    {
      title: "Report",
      url: "/report",
      icon: <HugeiconsIcon icon={ChartRingIcon} strokeWidth={2} />,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: <HugeiconsIcon icon={SentIcon} strokeWidth={2} />,
    },
  ],
  
   projects: [
    {
      name: "New Arrivals",
      url: "/offers/new-arrivals",
      icon: <HugeiconsIcon icon={GiftIcon} strokeWidth={2} />,
    },
    {
      name: "Top Promotions",
      url: "/offers/top-promotions",
      icon: <HugeiconsIcon icon={StarIcon} strokeWidth={2} />,
    },
    {
      name: "Discounts",
      url: "/offers/discounts",
      icon: <HugeiconsIcon icon={DiscountIcon || TagIcon} strokeWidth={2} />,
    },
    {
      name: "Flash Sales",
      url: "/offers/flash-sales",
      icon: <HugeiconsIcon icon={TruckIcon} strokeWidth={2} />,
    },
  ],
  
  cart: {
    items: 0,
    total: 0,
    currency: "USD"
  },
  
  storeInfo: {
    name: "EcoStore",
    description: "Your one-stop e-commerce solution",
    currency: "USD",
    timezone: "UTC"
  }
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center ">
                  <img src="kuwaittec.png" alt="" height={250} width={50} />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <a href='#' className='flex items-center gap-3'>
       
          <span className='text-primary text-[20px] font-semibold'>Kuwait Tec</span>
        </a>
                </div>
              </a>
              
            </SidebarMenuButton>
            <SearchForm className="w-full sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]" />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
    </Sidebar>
  )
}
