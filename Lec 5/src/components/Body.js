import Card from "./components/Card";
import {restaurants} from "./constants";

const Body = () => {
    return (
      <div className="body">  
        {restaurants.map((restaurant) => {
          return <Card {...restaurant.data} key={restaurant.data.uuid} />;
        })}
      </div>
    );
  };

  export default Body;