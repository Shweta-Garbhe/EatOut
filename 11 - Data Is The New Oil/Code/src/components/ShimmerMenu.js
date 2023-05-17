const ShimmerBanner = () => {
  return (
    <>
      <div className="shimmer-banner" />
    </>
  );
};

const ShimmerMenuCard = () => {
  return (
    <>
      <div className="shimmer-menu-card mt-3">
        <div className="shimmer-card-image animate" />
      </div>
      <div className="shimmer-menu-img mt-3">
        <div className="shimmer-card-image animate" />
      </div>
    </>
  );
};

const ShimmerMenu = () => {
  return (
    <>
      <div className="shimmer-banner animate" />
      <div className="shimmer-card-wrapper shimmer-menu-wrapper">
        {new Array(5).fill("").map((element, index) => {
          return <ShimmerMenuCard key={index} />;
        })}
      </div>
    </>
  );
};

export default ShimmerMenu;
