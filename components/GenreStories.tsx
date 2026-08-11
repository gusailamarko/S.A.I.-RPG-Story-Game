import { mockStories } from "../app/const/mock";
import Story from "./Story";

const GenreStories = ({id, genreName}:GenreStoriesProps) => {
  return (
    <div className="flex flex-col w-full mt-[1.5rem] gap-[0.5rem]">
        <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-slate-300"></span>
            <h2 className="text-[16px] tracking-[10%] uppercase">{genreName}</h2>
            <span className="flex-1 h-[1px] bg-slate-300"></span>
        </div>
        <div className="flex justify-start items-center overflow-x-auto gap-[1rem]">
            {mockStories.filter((story) => story.genreID === id).map((story) => (
                <Story key={story.storyID} storyID={story.storyID} genreID={story.genreID} storyName={story.storyName} titleImg={story.titleImage} author={story.author}/>
            ))}
        </div>
    </div>
  )
}

export default GenreStories