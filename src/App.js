import "./styles.css";

export default function Button() {
  function handleClick() {
    return alert("You Clicked Me!");
  }
  return <button onClick={handleClick}>Clicked me</button>;
}
