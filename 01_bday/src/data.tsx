interface Person {
  img: {
    url: string;
    alt: string;
  };
  name: string;
  age: number;
}

const people: Person[] = [
  {
    img: { url: "/images/1.png", alt: "person 1" },
    name: "Bertie Yates",
    age: 29,
  },
  {
    img: { url: "/images/2.png", alt: "person 2" },
    name: "Hester Hogan",
    age: 32,
  },
  {
    img: { url: "/images/3.png", alt: "person 3" },
    name: "Larry Little",
    age: 36,
  },
  {
    img: { url: "/images/4.png", alt: "person 4" },
    name: "Sean Walsh",
    age: 34,
  },
  {
    img: { url: "/images/5.png", alt: "person 5" },
    name: "Lola Gardner",
    age: 29,
  },
];

export default people;
