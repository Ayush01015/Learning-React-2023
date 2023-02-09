import Card from "../components/Card";
import { restaurants } from "../constants";
import Search from "./Search";
const Body = () => {
  return (
    <>
      <Search />
      <div className="body">
        {restaurants.map((restaurant) => {
          return <Card {...restaurant.data} key={restaurant.data.uuid} />;
        })}
      </div>
    </>
  );
};

export default Body;
