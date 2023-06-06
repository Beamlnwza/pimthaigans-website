import { type } from "os"
import { z } from "zod"

export const userSchema = z.object({
  uuid: z.string(),
})

export const imageSchema = z.object({
  index: z.number(),
  image_url: z.string(),
})

export const viewSchema = z.object({
  user: userSchema,
  method: z.union([z.literal("all"), z.literal("index")]),
  result: z.array(imageSchema).nullable(),
})

export const generateSchema = z.object({
  user: userSchema,
  method: z.union([z.literal("all"), z.literal("index")]),
  result: z.array(imageSchema),
})

export type View = z.infer<typeof viewSchema>
export type Generate = z.infer<typeof generateSchema>
