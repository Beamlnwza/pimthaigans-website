"use client"

import { useState } from "react"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import { Download, RotateCcw } from "lucide-react"

import LocalUuid from "@/lib/localuuid"
import { Generate, generateSchema } from "@/lib/responseZod"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface ImageCardData {
  index: number
  image_url: string
}

const ImageCard = ({ index, image_url }: ImageCardData) => {
  const [url, setUrl] = useState<string>(image_url)

  console.log("re render", index)

  return (
    <div>
      <Card className="w-[250px]">
        <CardHeader />
        <CardContent className="items-center justify-center">
          <Image
            src={url}
            alt={index.toString()}
            width={200}
            height={200}
            className="aspect-square overflow-hidden rounded-lg border dark:rounded-lg dark:border-gray-300 dark:invert"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>
            <a href={image_url}>
              <Download className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="destructive"
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ImageCard
