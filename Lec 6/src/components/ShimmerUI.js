import ShimmerCard from "./ShimmerCard";
const ShimmerUI = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {Array(15)
        .fill("")
        .map(() => (
          <ShimmerCard />
        ))}
    </div>
  );
};

export default ShimmerUI;
