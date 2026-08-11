import { mockGenres } from "../app/const/mock";
import GenreStories from "./GenreStories";

const AllStories = () => {
  return (
    <div className="w-[90dvw] flex flex-col items-center">
        {mockGenres.map((genre) => (
            <GenreStories key={genre.id} id={genre.id} genreName={genre.genreName} />
        ))}
    </div>
  )
}

export default AllStories