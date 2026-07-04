import { SearchForm } from "@/components/search-form"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { HugeiconsIcon } from "@hugeicons/react"
import { SidebarLeftIcon } from "@hugeicons/core-free-icons"
import PopoverSearchDemo from '@/components/shadcn-studio/popover/popover-10'

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

 return (
    <header className="sticky top-0 z-50 flex w-full items-center border-b bg-background">
      <div className="flex h-(--header-height) w-full items-center px-4 relative">
        {/* Left Section - Hamburger Menu */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <Button
            className="h-8 w-8"
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
          >
            <HugeiconsIcon icon={SidebarLeftIcon} strokeWidth={2} />
          </Button>
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />
        </div>

        {/* Center Section - Logo (Centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <a href='#' className='flex items-center gap-3'>
            <img 
              src="kuwaittec.png" 
              alt="Kuwait Tec" 
              height={250} 
              width={50} 
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span className='text-primary text-[18px] md:text-[20px] font-semibold whitespace-nowrap'>
              Kuwait Tec
            </span>
          </a>
        </div>

        {/* Right Section - Search Button */}
        <div className="flex items-center gap-2 ml-auto flex-shrink-0">
          <PopoverSearchDemo />
        </div>
      </div>
    </header>
  )
}