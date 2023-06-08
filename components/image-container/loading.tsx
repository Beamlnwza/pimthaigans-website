import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "../ui/button"
import { Skeleton } from "../ui/skeleton"

const Loading = () => {
  return (
    <div className="flex w-screen flex-col items-center justify-center">
      <div className="pb-10 pt-5 leading-7 [&:not(:first-child)]:mt-6">
        <p>
          *First time check-in may take around +-5 minutes to generate
          typography!
        </p>
        <p>
          **In dark mode if you Download image you still got white image na krub
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {Array.from({ length: 88 }, (_, index) => index).map((item) => (
          <Card className="w-[225px]" key={item}>
            <CardHeader />
            <CardContent className="items-center justify-center">
              <Skeleton className="h-[175px] w-[175px]"></Skeleton>
            </CardContent>
            <CardFooter className="flex justify-between">
              {Array.from({ length: 2 }, (_, index) => index).map((item) => (
                <Skeleton key={item} className="h-10 w-10"></Skeleton>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Loading
