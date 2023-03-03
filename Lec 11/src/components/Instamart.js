import React, { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="p-3 m-2 border-2 border-black">
      <h3 className="font-bold text-2xl">{title}</h3>
      {!isVisible && (
        <button
          className="border border-black p-1 w-[60px] bg-[#f4a545] rounded hover:bg-[#f88f0e]"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
      {isVisible && (
        <button
          className="border border-black p-1 w-[60px] bg-[#f4a545] rounded hover:bg-[#f88f0e]"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    setAbout: false,
    setContact: false,
    setServices: false,
  });
  return (
    <div>
      <Section
        title={"About"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={sectionConfig.setAbout}
        setIsVisible={() =>
          setSectionConfig({
            setAbout: true,
            setContact: false,
            setServices: false,
          })
        }
      />
      <Section
        title={"Contact"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={sectionConfig.setContact}
        setIsVisible={() =>
          setSectionConfig({
            setAbout: false,
            setContact: true,
            setServices: false,
          })
        }
      />
      <Section
        title={"Services"}
        description={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        isVisible={sectionConfig.setServices}
        setIsVisible={() =>
          setSectionConfig({
            setAbout: false,
            setContact: false,
            setServices: true,
          })
        }
      />
    </div>
  );
};

export default Instamart;

/**
 * lifting the state up
 *    taking power(control of state) from child(Section) to parent(Instamart)
 *
 */
