import { useEffect, useState } from "react";
import GenreStories from "./GenreStories";

interface Genres {
  genreid: number,
  genrename: string;
};

const AllStories = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setLoading(true);
        const content = await fetch("/api/genres/all");

        if (!content.ok) {
          const errorData = await content.json().catch(() => null);
          throw new Error(errorData?.message || "Something went wrong, try again later!");
        }

        const data: Genres[] = await content.json();
        setGenres(data);
      } 
      catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong, try again later!");
      } 
      finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, [])

  return (
    <div className="flex flex-col items-center w-[90dvw] md:w-[70dvw] xl:w-[80dvw] md:h-[100dvh] overflow-y-auto md:px-[3rem] lg:gap-[4rem] xl:px-[5rem] md:pt-[2rem] md:gap-[3rem]">
        {genres.map((genre) => (
          //Content will differ based on loading state, error state, or succes, this genre.map... pattern is the success case
          <GenreStories key={genre.genreid} id={genre.genreid} genreName={genre.genrename} />
        ))}
    </div>
  )
}

export default AllStories