import Link from '@/components/Link'
import { RoughNotation } from 'react-rough-notation'
import { useRandomColorPair } from '@/components/useRandomColorPair'

export default function Home() {
  const [aboutColor, contactColor] = useRandomColorPair()

  return (
    <div className="fade-in banner mt-24 flex flex-1 flex-col justify-center px-6 py-10 dark:text-white lg:px-10">
      <h1 className="text-3xl font-bold dark:text-white lg:text-5xl">Hi, I am Hamza</h1>
      <p className="my-2 text-lg lg:my-4 lg:text-2xl">Software Developer</p>
      <p className="font-light lg:text-xl">
        Read more
        <Link className="ml-2 mr-2 font-normal text-black" href="/about">
          <RoughNotation
            show
            type="highlight"
            animationDelay={250}
            animationDuration={2000}
            color={aboutColor}
          >
            about me
          </RoughNotation>
        </Link>
        or
        <Link className="ml-2 font-normal text-black" href="/contact">
          <RoughNotation
            show
            type="highlight"
            animationDelay={250}
            animationDuration={2000}
            color={contactColor}
          >
            contact me
          </RoughNotation>
        </Link>
      </p>
    </div>
  )
}