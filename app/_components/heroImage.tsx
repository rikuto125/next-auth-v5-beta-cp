import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="flex items-center justify-center flex-wrap  bg-custome">
      <div className="h-[480px] w-[300px]">
        <AspectRatio ratio={10 / 16} className="bg-muted">
          <Image
            src="/home/1.svg"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="h-[480px] w-[300px] hidden sm:block">
        <AspectRatio ratio={10 / 16} className="bg-muted">
          <Image
            src="/home/2.svg"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
    </div>
  );
}
