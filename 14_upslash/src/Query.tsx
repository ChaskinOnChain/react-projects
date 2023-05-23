import { useQuery } from "react-query";

const API_URL = "https://api.unsplash.com/search/photos?per_page=15&query=";

function Search({ searchTerm }: { searchTerm: string }) {
  const { isLoading, error, data } = useQuery("images", () =>
    fetch(`${API_URL}${searchTerm}`).then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  const imageArray: string[] = [];
  if (data && data.results) {
    data.results.forEach((image) => {
      imageArray.push(image.urls.regular);
    });
  }
  console.log(imageArray);
  return imageArray;
}

export default Search;
