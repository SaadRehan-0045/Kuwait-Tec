import Header from '@/components/shadcn-studio/blocks/hero-section-41/header'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-41/hero-section-41'
import type { NavigationSection } from '@/components/shadcn-studio/blocks/menu-navigation'



const menudata = [
  {
    id: 1,
    img: '1.png',
    imgAlt: 'gaming-laptop',
    userComment: 'This gaming laptop is a beast! Handles 4K gaming and video editing with ease. The RGB keyboard and cooling system are top-notch.',
    userAvatar: 'customer1.png'
  },
  {
    id: 2,
    img: '2.png',
    imgAlt: 'dslr-camera',
    userComment: 'The image quality is breathtaking! Perfect for landscape and portrait photography. Low-light performance exceeded my expectations.',
    userAvatar: 'customer2.png'
  },
  {
    id: 3,
    img: '3.png',
    imgAlt: 'smartphones',
    userComment: 'Both Samsung and iPhone models offer incredible features. The AMOLED display and camera zoom are just phenomenal!',
    userAvatar: 'customer3.png'
  },
  {
    id: 4,
    img: '4.png',
    imgAlt: '4k-uhd-tv',
    userComment: 'Crystal clear 4K resolution with HDR support. The smart features and built-in streaming apps make it a complete entertainment hub.',
    userAvatar: 'customer4.png'
  },
  {
    id: 5,
    img: '5.png',
    imgAlt: 'wireless-printer',
    userComment: 'Vibrant color printing and wireless connectivity. The mobile printing feature is super convenient for work-from-home.',
    userAvatar: 'customer5.png'
  },
  {
    id: 6,
    img: '6.png',
    imgAlt: 'smart-washing-machine',
    userComment: 'Energy-efficient with smart washing cycles. The steam cleaning and quick wash modes are absolute lifesavers!',
    userAvatar: 'customer7.png'
  },
  {
    id: 7,
    img: '7.png',
    imgAlt: 'surround-sound-system',
    userComment: 'Premium surround sound with deep bass. The wireless rear speakers and Dolby Atmos support create an immersive experience.',
    userAvatar: 'customer9.png'
  },
  {
    id: 8,
    img: '8.png',
    imgAlt: 'inverter-air-conditioner',
    userComment: 'Incredible cooling with noise-free operation. The smart app control and energy-saving inverter technology are excellent!',
    userAvatar: 'customer10.png'
  },
]

const Carousel = () => {
  return (
   <>

      {/* Main Content */}
      {/* Changed from pt-17.5 to pt-2 */}   
       {/* Added -mt-4 to pull content up */}
      <main className='flex flex-col pt-0 -mt-10'> 
        <HeroSection menudata={menudata} />
      </main>
   </>
   
  )
}

export default Carousel
