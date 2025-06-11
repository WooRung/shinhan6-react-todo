export default function Colorbar({ colors, setCurColor }) {
  return (
    <>
      {colors.map((color, idx) => {
        return (
          <div
            key={idx}
            style={{
              backgroundColor: color,
              borderRadius: 10,
              width: 15,
              height: 15,
            }}
            onClick={() => {
              setCurColor(color);
            }}
          ></div>
        );
      })}
    </>
  );
}
