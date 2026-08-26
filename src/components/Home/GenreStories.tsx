import { useState } from "react";
import { mockStories } from "../../const/const";
import Story from "./Story";

const GenreStories = ({id, genreName}:GenreStoriesProps) => {
  //PAGINATION:
  //initiallyVisible and loadMoreIncrement are equal to the lowest common multiple (based on grid counts (different screen sizes, might have different max grid counts)) 
  const initiallyVisible = 12;
  const loadMoreIncrement = 12;

  //Initially you show the amount that is visible by default
  const [visibleCount, setVisibleCount] = useState(initiallyVisible);

  //Filtering the stories for each genre (have to convert to string because ID arrives as string)
  const genreStories = mockStories.filter((story) => String(story.genreID) === String(id));
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
                <Story key={story.storyID} storyID={story.storyID} genreID={story.genreID} storyName={story.storyName} titleImg={story.titleImage} author={story.author}/>              
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