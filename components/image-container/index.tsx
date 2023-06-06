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
          <div className="pb-10 pt-5 leading-7 [&:not(:first-child)]:mt-6">
            <p>
              In dark mode if you Download image you still got white image na
              krub
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10">
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

      /*       <div className="">
        {Array(88)
          .fill(0)
          .map((item, index) => (
            <div key={index}>
              <div className="w-fit">kuy</div>
            </div>
          ))}
      </div> */
    )
  }

  return <div>something went wrong</div>
}

export default ImageContainer
