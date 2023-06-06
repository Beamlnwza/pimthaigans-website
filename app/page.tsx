import Image from "next/image"
import Link from "next/link"
import { Navigation } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="mt-24 grid items-center justify-center gap-6 px-2 pb-8 pt-6 md:py-10">
      <section className="grid w-auto max-w-[1200px] grid-cols-2 items-start justify-center gap-16 max-md:grid-cols-1">
        <div className="flex h-full flex-col justify-center gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Pimthaigans a generative model <br className="hidden sm:inline" />
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            this showcase website use a model for syntesis and generative Thai
            alphabets that can represent up to 88 classes of characters!
          </p>
          <div className="flex flex-row gap-2">
            <Button>
              <Link
                href="./main"
                className="flex flex-row items-center justify-center"
              >
                Lets gooo!
              </Link>
            </Button>
            <Button variant="secondary">
              <a
                href={siteConfig.links.aibuilder}
                className="flex flex-row items-center justify-center"
                target="_blank"
                rel="noreferrer"
              >
                AI Builders
              </a>
            </Button>
          </div>
        </div>
        <div className="flex h-full items-center justify-center max-md:hidden">
          <Image
            src="https://i.postimg.cc/c48Lfgk3/intro-invert.gif"
            width={800}
            height={800}
            alt="intro"
            unoptimized={true}
            className="aspect-auto w-auto overflow-hidden rounded-lg border-2 border-black dark:invert"
          />
        </div>
      </section>
    </section>
  )
}
