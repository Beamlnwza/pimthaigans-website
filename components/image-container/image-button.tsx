"use client"

import { Button } from "@/components/ui/button"

export interface ImageButton {
  index: number
}

const ImageButton = ({ index }: ImageButton) => {
  return (
    <>
      <Button>Get this!</Button>
      <Button variant="destructive">Change it!</Button>
    </>
  )
}

export default ImageButton
