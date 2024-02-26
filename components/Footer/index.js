// import styles from "./index.module.css";

export default function Footer() {
  const handleClickButton = () => {
    console.log("me");
  };

  return (
    <div>
      <button className="btn-yellow" onClick={handleClickButton}>
        Klik Me
      </button>
      Footer
    </div>
  );
}
