export default function Footer() {
  const handleClickButton = () => {
    console.log("me");
  };

  return (
    <div>
      <button onClick={handleClickButton}>Klik Me</button>
      Footer
    </div>
  );
}
