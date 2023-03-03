import React, { useState } from "react";
const Section = ({ title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="p-3 m-2 border-2 border-black">
      <h3 className="font-bold text-2xl">{title}</h3>
      {
        !isVisible && <button
          className="border border-black p-1 w-[60px] bg-[#f4a545] rounded hover:bg-[#f88f0e]"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      }
      {
        isVisible && <button
          className="border border-black p-1 w-[60px] bg-[#f4a545] rounded hover:bg-[#f88f0e]"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      }
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  return (
    <div>
      <Section
        title={"About"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
      <Section
        title={"Contact"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
      <Section
        title={"Services"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
      />
    </div>
  );
};

export default Instamart;
