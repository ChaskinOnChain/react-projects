import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPerson,
  faEnvelope,
  faCalendarTimes,
  faMap,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

interface Person {
  img: string;
  name: string;
  email: string;
  age: number;
  street: string;
  phone: string;
  password: string;
}

function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState<Person>({});
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const iconClasses =
    "hover:cursor-pointer hover:text-blue-500 transition duration-500";

  async function newUser() {
    try {
      const res = await axios("https://randomuser.me/api/");
      const data = res.data;
      const person = data.results[0];
      console.log(person);

      setPerson({
        img: person.picture.thumbnail,
        name: `${person.name.first} ${person.name.last}`,
        email: person.email,
        age: person.dob.age,
        street: `${person.location.street.number} ${person.location.street.name}`,
        phone: person.phone,
        password: person.login.password,
      });
      setImageUrl(person.picture.medium);
      setTitle("name");
      setValue(`${person.name.first} ${person.name.last}`);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    newUser();
  }, []);

  function handleHover(text: string) {
    setTitle(text);
    setValue(person[text]);
    setImageUrl(person.img);
  }

  return (
    <div className="relative">
      <div className="h-1/2vh bg-zinc-800"></div>
      <div className="h-1/2vh bg-slate-100"></div>
      <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 h-[32rem] w-[45rem] bg-white shadow-lg rounded-md flex flex-col items-center">
        <div className="h-1/4 bg-slate-200 border-b border-slate-400 mb-28 w-full"></div>
        <h4 className="text-xl mb-4">My {title} is</h4>
        <h2 className="text-5xl mb-12">{value}</h2>
        <div className="w-[80%] flex items-center justify-between text-4xl text-slate-500">
          <FontAwesomeIcon
            className={iconClasses}
            icon={faPerson}
            onMouseEnter={() => handleHover("name")}
          />
          <FontAwesomeIcon
            className={iconClasses}
            icon={faEnvelope}
            onMouseEnter={() => handleHover("email")}
          />
          <FontAwesomeIcon
            className={iconClasses}
            icon={faCalendarTimes}
            onMouseEnter={() => handleHover("age")}
          />
          <FontAwesomeIcon
            className={iconClasses}
            icon={faMap}
            onMouseEnter={() => handleHover("street")}
          />
          <FontAwesomeIcon
            className={iconClasses}
            icon={faPhone}
            onMouseEnter={() => handleHover("phone")}
          />
          <FontAwesomeIcon
            className={iconClasses}
            icon={faLock}
            onMouseEnter={() => handleHover("password")}
          />
        </div>
        <button
          onClick={() => newUser()}
          className="tracking-widest mt-8 shadow-md py-[6px] px-3 bg-blue-500 text-white rounded hover:cursor-pointer hover:bg-zinc-700 hover:text-blue-400 transition duration-500"
        >
          {loading ? "Loading..." : "RANDOM USER"}
        </button>
        <div className="absolute rounded-full bg-white shadow-lg -translate-x-1/2 -translate-y-1/2 left-1/2 top-28 h-40 w-40 border border-slate-400"></div>
        <img
          className="absolute bg-cover object-center bg-center bg-no-repeat rounded-full bg-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-28 h-36 w-36 border border-slate-400"
          src={imageUrl}
          alt="person"
        />
      </div>
    </div>
  );
}

export default App;
