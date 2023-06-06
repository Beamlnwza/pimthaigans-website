import Image from "next/image"
import { Download, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ImageButton from "./image-button"

export interface ImageCardData {
  index: number
  image_url: string
}

const ImageCard = ({ index, image_url }: ImageCardData) => {
  return (
    <div>
      <Card className="w-[250px]">
        <CardHeader />
        <CardContent className="items-center justify-center">
          <Image
            src={image_url}
            alt={index.toString()}
            width={200}
            height={200}
            className="aspect-square overflow-hidden rounded-lg border dark:rounded-lg dark:border-gray-300 dark:invert"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="destructive">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
    /*     <div className="rounded-lg border-2 border-black p-5">
      <Image
        src={image_url}
        alt={index.toString()}
        width={150}
        height={150}
        className="aspect-square"
      />
    </div> */
  )
}

export default ImageCard
