const Story = ({ storyID, genreID, storyName, titleImg, author }: StoryProps) => {
  return (
    <div>
        <div className="TitleImage">
            <img src={titleImg} alt={storyName} />
        </div>
    </div>
  )
}

export default Story