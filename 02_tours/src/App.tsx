import { useQuery } from "react-query";
import Card from "./components/Card";
import axios from "axios";
import Loader from "./components/Loader";

const API_URL = "https://course-api.com/react-tours-project";

interface ITrip {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
}

const fetchTrips = async (): Promise<ITrip[]> => {
  const { data } = await axios.get<ITrip[]>(API_URL);
  return data;
};

function App() {
  const { data: tripInfo, isLoading } = useQuery("trips", fetchTrips);

  if (isLoading) {
    <div className="mt-8 flex justify-center">
      <Loader />
    </div>;
  }

  return (
    <div className="min-h-screen w-full bg-slate-100">
      <div className="h-36 flex justify-center items-end">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl mb-4">Our Tours</h1>
          <div className="h-1 w-32 bg-green-600"></div>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap px-12 gap-8">
        {tripInfo?.map((trip) => (
          <Card
            key={trip.id}
            name={trip.name}
            info={trip.info}
            image={trip.image}
            price={trip.price}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
