import React, { useState } from "react";
import { HeartIcon, RedHeartIcon } from "../icons/Icons";

const HeartIconEffect = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <span onClick={() => setActive(!active)} className="cursor-pointer">
        {active ? <RedHeartIcon /> : <HeartIcon />}
      </span>
    </>
  );
};

export default HeartIconEffect;
