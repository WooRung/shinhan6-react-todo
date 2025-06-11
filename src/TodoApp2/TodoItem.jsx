export default function TodoItem({ color, text }) {
  return (
    <li
      style={{
        display: "block",
        padding: 10,
        backgroundColor: color,
        borderRadius: 5,
      }}
    >
      {text}
    </li>
  );
}
