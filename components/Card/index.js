import Image from "next/image";
import otherPicture from "../../public/hashirama.jpg";
import styles from "./styles.module.css";

export default function Card() {
  return (
    <div className={styles.card}>
      <h1>HELLO CARD</h1>
      <Image
        src={otherPicture}
        alt="Picture of the author"
        // width={500} otomatis di provide
        // height={500} otomatis di provide
        // blurDataURL="data:..." otomatis di provide
        // placeholder="blur" // opsi blur-up ketika load image
      />
    </div>
  );
}
