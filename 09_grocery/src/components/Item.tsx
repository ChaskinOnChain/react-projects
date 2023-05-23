import React, { useState } from "react";

type Props = {
  name: string;
  id: number;
};

function Item({ name, id }: Props) {
  const [checked, setChecked] = useState(false);
  const [deleted, setDeleted] = useState(false);

  return (
    <div className={`flex justify-between w-full ${deleted && "hidden"}`}>
      <div>
        <input
          onChange={() => setChecked((prev) => !prev)}
          className=""
          id={id}
          type="checkbox"
        />
        <label
          className={`tracking-wider ml-3 text-xl ${
            checked && " line-through "
          }`}
          htmlFor={id}
        >
          {name}
        </label>
      </div>
      <button
        onClick={() => setDeleted(true)}
        className="text-white bg-black rounded cursor-pointer px-1"
      >
        Delete
      </button>
    </div>
  );
}

export default Item;
