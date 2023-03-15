const ShimmerCard = () => {
  return (
    <div className="shimmer-card mt-3">
      <div className="shimmer-card-image animate" />
      <div className="shimmer-rest-menu animate" />
      <div className="shimmer-rest-info">
        <div className="shimmer-circle animate" />
        <div className="shimmer-distance-info animate" />
        <div className="shimmer-distance-info animate" />
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-card-wrapper">
      {new Array(12).fill("").map((element, index) => {
        return <ShimmerCard key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
