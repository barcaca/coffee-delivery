import Image from 'next/image'
import imageHeroSection from '../../../public/coffee-home-image.svg'
import { IntroItems } from './intro-items'
import { IntroTitle } from './intro-title'

export function HeroSection() {
  return (
    <section className="mb-28 flex max-w-[1120px]">
      <div className="flex flex-col gap-16">
        <IntroTitle />
        <IntroItems />
      </div>
      <Image
        src={imageHeroSection}
        alt={''}
        width={476}
        height={360}
        priority
      />
    </section>
  )
}
