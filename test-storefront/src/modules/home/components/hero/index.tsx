import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading level="h1" className="text-5xl font-bold leading-tight">
            Shop the best Deals on Top Brands & Unique Finds
          </Heading>
          <Heading level="h2" className="text-gray-600 text-lg">
            From everyday essentials to rare gems, we've got something for
            everyone.
          </Heading>
        </span>
        <a
          href="https://github.com/medusajs/nextjs-starter-medusa"
          target="_blank"
        >
          <Button variant="primary">Shop now</Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
