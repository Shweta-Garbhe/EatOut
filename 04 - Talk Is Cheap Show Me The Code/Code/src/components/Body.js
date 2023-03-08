import { Card } from "./Card";
import { restaurantList } from "./Api";
const Body = () => {
  return (
    <>
      <div className="rest-count-info">355 restaurants</div>
      <div className="card-wrapper mt-4">
        {restaurantList.map((restaurant) => {
          return <Card key={restaurant.data.id} {...restaurant.data} />;
        })}

        {/* <Card {...restaurantList[0].data} />
        <Card {...restaurantList[1].data} />
        <Card {...restaurantList[2].data} />
        <Card {...restaurantList[3].data} />
        <Card {...restaurantList[4].data} />
        <Card {...restaurantList[5].data} />
        <Card {...restaurantList[6].data} />
        <Card {...restaurantList[7].data} />
        <Card {...restaurantList[8].data} />
        <Card {...restaurantList[9].data} /> */}
      </div>
    </>
  );
};

export default Body;
