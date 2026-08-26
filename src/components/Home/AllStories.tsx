import { mockGenres } from "../../const/const";
import GenreStories from "./GenreStories";

const AllStories = () => {
  return (
    <div className="flex flex-col items-center w-[90dvw] md:w-[70dvw] xl:w-[80dvw] md:h-[100dvh] overflow-y-auto md:px-[3rem] lg:gap-[4rem] xl:px-[5rem] md:pt-[2rem] md:gap-[3rem]">
        {mockGenres.map((genre) => (
            <GenreStories key={genre.id} id={genre.id} genreName={genre.genreName} />
        ))}
    </div>
  )
}

export default AllStories