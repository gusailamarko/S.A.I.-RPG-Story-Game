interface StoryProps {
    storyID: number,
    genreID: number,
    author: string,
    storyName: string,
    titleImg: string,
};

const Story = ({ storyID, genreID, author, storyName, titleImg }: StoryProps) => {
  return (
    <div className="flex flex-col gap-[0.5rem]">
        <div className="TitleImage xl:w-[20rem]">
          <img src={titleImg} alt={storyName}/>
        </div>
        <div className="flex flex-col items-start StoryInfo">
          <div className="w-full">
            <p className="text-[16px] truncate">{storyName}</p>
          </div>
          <div>
            <p className="text-[14px] text-gray-300 italic">{author}</p>
          </div>
        </div>
    </div>
  )
}

export default Story