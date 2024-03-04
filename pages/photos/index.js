import Image from "next/image";
import otherPicture from "../../public/hashirama.jpg";

export default function Photos() {
  return (
    <Image
      src={otherPicture}
      alt="Picture of the author"
      // width={500} otomatis di provide
      // height={500} otomatis di provide
      // blurDataURL="data:..." otomatis di provide
      // placeholder="blur" // opsi blur-up ketika load image
    />
  );
}
