import { firstTimeQuery } from "@/app/main/page"

import ImageCard from "./image"

export interface ImageContainer {
  ImageData: { index: number; image_url: string }[] | null
}

const ImageContainer = ({ ImageData }: ImageContainer) => {
  if (ImageData) {
    return (
      <>
        <div className="flex w-screen flex-col items-center justify-center">
          <div className="pb-10 pt-5 text-center leading-7 [&:not(:first-child)]:mt-6">
            <p>
              *First time check-in may take around +-5 minutes to generate
              typography!
            </p>
            <p>
              **In dark mode if you Download image you still got white image na
              krub
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-14 min-[630px]:px-10">
            {ImageData.map((item, index) => (
              <div key={index}>
                <ImageCard
                  index={item.index}
                  key={index}
                  image_url={item.image_url}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    )
  }

  return <div>something went wrong</div>
}

export default ImageContainer
