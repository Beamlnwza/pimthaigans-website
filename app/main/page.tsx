"use client"

import { useQuery } from "@tanstack/react-query"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import LocalUuid from "./localuuid"
import {
  Generate,
  View,
  generateSchema,
  imageSchema,
  userSchema,
  viewSchema,
} from "./responseZod"

export type firstTimeQuery = View | Generate | null

const firstTimeQuery = async (): Promise<firstTimeQuery> => {
  const uuid = await LocalUuid()
  const resViewUrl = new URL(
    "https://supawitmarayat-pimthaigans-api.hf.space/view/"
  )
  resViewUrl.searchParams.append("user", await LocalUuid())
  const resView = await fetch(resViewUrl.toString())
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
      uuid: uuid,
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
  return (
    <>
      {isLoading && <div>Loading...</div>}
      <Button
        onClick={() => {
          console.log(data)
        }}
      ></Button>
    </>
  )
}

export default Main
