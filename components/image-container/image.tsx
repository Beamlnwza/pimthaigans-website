"use client"

import { MouseEventHandler, useEffect, useState } from "react"
import Image from "next/image"
import { useQuery } from "@tanstack/react-query"
import { Download, RotateCcw } from "lucide-react"

import { fontThai } from "@/lib/fonts"
import { TYPOINDEX } from "@/lib/getIndexName"
import LocalUuid from "@/lib/localuuid"
import { Generate, generateSchema } from "@/lib/responseZod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Skeleton } from "../ui/skeleton"

export interface ImageCardData {
  index: number
  image_url: string
}

const SQUARE_SIZE = 175

const onClickQuery = async (index: number): Promise<Generate | null> => {
  const uuid = await LocalUuid()
  const resGenerateUrl = new URL(
    "https://supawitmarayat-pimthaigans-api.hf.space/generate/"
  )
  const resGenerate = await fetch(resGenerateUrl.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        uuid: uuid.toString(),
      },
      method: "index",
      index: index,
    }),
  })

  if (resGenerate.ok) {
    const resGenerateJson = await resGenerate.json()
    const resGenerateData = await generateSchema.safeParseAsync(resGenerateJson)
    if (resGenerateData.success) {
      return resGenerateJson
    }
  }

  return null
}

const ImageCard = ({ index, image_url }: ImageCardData) => {
  const [url, setUrl] = useState<string>(image_url)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchOnClick: MouseEventHandler = async (e) => {
    e.preventDefault
    setLoading(true)
    setUrl("load")
    const result: Generate | null = await onClickQuery(index)
    if (result) {
      setUrl(result.result[0].image_url)
    }
    setLoading(false)
  }

  return (
    <div>
      <Card className="w-[225px]">
        <CardHeader className={fontThai.className}>
          <CardTitle className="text-xl">
            {index}. {TYPOINDEX[index].alphabets}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          {!loading && (
            <Image
              src={url}
              alt={index.toString()}
              width={SQUARE_SIZE}
              height={SQUARE_SIZE}
              className="aspect-square overflow-hidden rounded-lg border dark:rounded-lg dark:border-gray-300 dark:invert"
            />
          )}
          {loading && <Skeleton className="h-[175px] w-[175px]"></Skeleton>}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button>
            <a href={image_url}>
              <Download className="h-4 w-4" />
            </a>
          </Button>
          <Button variant="destructive" onClick={fetchOnClick}>
            <RotateCcw className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ImageCard
