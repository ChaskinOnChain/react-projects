import { useState } from "react";
import people from "./data";
import Person from "./components/Person";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [peopleList, setPeopleList] = useState(people);

  const handleClick = () => {
    setPeopleList([]);
  };

  return (
    <div className="text-2xl w-screen h-screen bg-purple-200 flex justify-center items-center">
      <motion.div
        className="w-3/5 rounded-lg shadow-md bg-slate-50 flex flex-col p-8"
        layout // Add layout prop here
      >
        <h1 className="text-4xl tracking-wider">
          {peopleList.length !== 0 ? 5 : 0} Birthdays Today
        </h1>
        <ul>
          <AnimatePresence>
            {peopleList.map((person) => {
              return (
                <motion.li
                  key={person.img.alt}
                  className="mt-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Person
                    imgUrl={person.img.url}
                    imgAlt={person.img.alt}
                    age={person.age}
                    name={person.name}
                  />
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>

        <button
          onClick={handleClick}
          className="w-full bg-purple-500 text-white rounded-md text-md py-1 mt-6 cursor-pointer"
        >
          Clear All
        </button>
      </motion.div>
    </div>
  );
}

export default App;
