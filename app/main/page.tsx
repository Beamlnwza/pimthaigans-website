"use client"

import { useQuery } from "@tanstack/react-query"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import ImageContainer from "@/components/image-container"
import Loading from "@/components/image-container/loading"

import LocalUuid from "../../lib/localuuid"
import {
  Generate,
  View,
  generateSchema,
  viewSchema,
} from "../../lib/responseZod"

export type firstTimeQuery = View | Generate | null

const firstTimeQuery = async (): Promise<firstTimeQuery> => {
  const uuid = await LocalUuid()
  const resViewUrl = new URL(
    "https://supawitmarayat-pimthaigans-api.hf.space/view/"
  )
  const resView = await fetch(resViewUrl.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uuid: uuid,
    }),
  })
  if (resView.ok) {
    const resViewJson = await resView.json()
    const resViewData = await viewSchema.safeParseAsync(resViewJson)
    if (resViewData.success) {
      if (resViewData.data.result != null) {
        return resViewJson
      }
    }
  }

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
      method: "all",
      index: "0",
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

const Main = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["first time query", "view", "generate"],
    queryFn: () => firstTimeQuery(),
  })
  if (isLoading) {
    return <Loading />
  }

  if (data != null) {
    return <ImageContainer ImageData={data.result} />
  }

  return <p>No data available.</p>
}

export default Main
