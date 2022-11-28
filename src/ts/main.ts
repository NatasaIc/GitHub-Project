import { IMovie } from "./models/IMovie";
import { IOmdbResponse } from "./models/IOmdbResponse";
import axios from "axios";

axios
  .get<IOmdbResponse>("http://www.omdbapi.com/?apikey=416ed51a&s=Pulp")
  .then((response) => {
    console.log(response.data.Search);
    createHtml(response.data.Search);
  });

function createHtml(movies: IMovie[]): void {
  let container: HTMLDivElement = document.getElementById(
    "movieContainer"
  ) as HTMLDivElement;

  for (let i: number = 0; i < movies.length; i++) {
    console.log(movies[i].Title);

    let title: HTMLHeadingElement = document.createElement("h4");
    title.innerHTML = movies[i].Title;

    container.appendChild(title);
  }
}
