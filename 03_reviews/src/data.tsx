interface Person {
  img: string;
  alt: string;
  name: string;
  job: string;
  bio: string;
}

const peopleArray: Person[] = [
  {
    img: "images/1.png",
    alt: "image 1",
    name: "Susan Smith",
    job: "WEB DEVELOPER",
    bio: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    img: "images/2.png",
    alt: "image 2",
    name: "Anna Johnson",
    job: "WEB DESIGNER",
    bio: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    img: "images/3.png",
    alt: "image 3",
    name: "Peter Jones",
    job: "INTERN",
    bio: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

export default peopleArray;
