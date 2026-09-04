import { useEffect, useState } from "react";
import Story from "./Story";

interface GenreStoriesProps {
    id: number;
    genreName: string;
}

interface StoryBasicInfo {
    storyid: number,
    genreid: number,
    authorid: number,
    author: string,
    storyname: string,
    titleimg: string
}

const GenreStories = ({id, genreName}:GenreStoriesProps) => {
  const [stories, setStories] = useState<StoryBasicInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStories = async () => {
        try {
            setLoading(true);
            const stories = await fetch("/api/stories/all");

            if(!stories.ok) {
                const errorData = await stories.json().catch(() => null);
                throw new Error(errorData?.message || "Something went wrong, try again later!");
            };

            const data: StoryBasicInfo[] = await stories.json();
            setStories(data);
        }
        catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong, try again later!")
        }
        finally {
            setLoading(false);
        }
    };

    fetchStories();
  }, [])

  //PAGINATION:
  //initiallyVisible and loadMoreIncrement are equal to the lowest common multiple (based on grid counts (different screen sizes, might have different max grid counts)) 
  const initiallyVisible = 12;
  const loadMoreIncrement = 12;

  //Initially you show the amount that is visible by default
  const [visibleCount, setVisibleCount] = useState(initiallyVisible);

  //Filtering the stories for each genre (have to convert to string because ID arrives as string)
  const genreStories = stories.filter((story) => String(story.genreid) === String(id));
  //Visible stories for each genre based on current state
  const visibleStories = genreStories.slice(0, visibleCount);
  //Evaluates 'true' whenever total stories exceed current visibleCount, showing the button to load 12 more
  const hasMore = visibleCount < genreStories.length;

  return (
    <div className="flex flex-col w-full mt-[1.5rem] md:mt-0 gap-[0.5rem]">
        <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-300"></span>
            <h2 className="text-[1.2rem] tracking-[10%] uppercase">{genreName}</h2>
            <span className="flex-1 h-[1px] bg-slate-300"></span>
        </div>
        <div className="flex justify-start items-center overflow-x-auto gap-[1rem] md:grid md:grid-cols-3 xl:grid-cols-4 md:overflow-x-hidden">
            {visibleStories.map((story) => (
                <Story key={story.storyid} storyID={story.storyid} genreID={story.genreid} storyName={story.storyname} titleImg={story.titleimg} author={story.author}/>              
            ))}
        </div>
        {hasMore && (
            <span role="button" onClick={() => setVisibleCount((prev) => prev + loadMoreIncrement)} className="mt-4 mx-auto block bg-[var(--primary-color)] rounded-[10px] p-[1rem] hover:cursor-pointer">
                Load More...
            </span>
        )}
    </div>
  )
}

export default GenreStories