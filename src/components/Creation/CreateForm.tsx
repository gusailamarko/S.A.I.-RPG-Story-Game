import { useEffect, useRef, useState } from "react";
import Button from "../Button";

interface Genres {
    genreid: number,
    genrename: string
}

const CreateForm = () => {
  const [genres, setGenres] = useState<Genres[]>([]);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
        try {
            isLoading(true);
            const genres = await fetch("/api/genres/all");

            if(!genres.ok) {
                const errorData = await genres.json().catch(() => null);
                setError(errorData?.message || "Failed to fetch genres, try again later!");
            }

            const data: Genres[] = await genres.json();
            setGenres(data);
        }
        catch (error) {
            setError("Something went wrong, try again later!");
        }
        finally {
            isLoading(false);
        }
    }

    fetchGenres();
  }, []);

  //Helps handling the in-form page changes
  const [step, setStep] = useState(1);

  //Uploading a title image
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [titleImage, setTitleImage] = useState<File | null>(null);

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setTitleImage(file);
  };

  const handleRemoveFile = () => {
    setTitleImage(null);
    if(fileInputRef.current) fileInputRef.current.value = "";
  }

  const handleFormPageChange = () => {
    const formData = new FormData(document.querySelector("form") as HTMLFormElement);
    const storyName = formData.get("storyName") as string;
    const genre = formData.get("genre") as string;
    const storyDesc = formData.get("storyDesc") as string;

    if(!titleImage || !storyName || !genre || !storyDesc) {
        //showFeedback()
        return console.log("Please fill in all required fields!");
    }

    setStep(2);
  }

  const handleCreateStory = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    /*const titleImg = formData.get("titleImg") as File | null;
    const storyName = formData.get("storyName") as string;
    const genre = formData.get("genre") as string;
    const storyDesc = formData.get("storyDesc") as string;*/
    const storyIntro = formData.get("storyIntro") as string;
    //const storyStats = formData.get("storyStats") as string;
    const storyGoal = formData.get("storyGoal") as string;

    if(!storyIntro || !storyGoal) {
        //showFeedback()
        return console.log("Please fill in all required fields!");
    }

    if(titleImage) {
        formData.set("titleImg", titleImage);
    }

    try {
        isLoading(true);

        const payload = new FormData(e.currentTarget);
        if (titleImage) {
            payload.set("titleImg", titleImage);
        }

        const request = await fetch("/api/stories/create", {
            method: 'POST',
            credentials: 'include',
            body: formData
        });

        if(!request.ok) {
            const errorData = await request.json().catch(() => null);
            setError(errorData?.message || "Story creation unsuccessful, try again later!");
        }
        else
        {
            const requestData = await request.json();
            //showFeedback
            //page reload via useNavigate() -> const navigate = useNavigate() -> navigate('/create')
        }
    }
    catch(error) {
        setError("Something went wrong, try again later!");
    }
    finally {
        isLoading(false);
    }
  }

  return (
    <div className="flex justify-center w-[90dvw] md:h-[100dvh] overflow-y-auto md:p-[2rem]">
        <form onSubmit={handleCreateStory} className="flex flex-col items-center justify-center gap-[1.5rem] w-full md:w-[80%] h-full">
            <div className="flex flex-col items-center w-full md:w-[80%]">
                <h2 className="text-[1.5rem] tracking-[5%]">CREATE A STORY</h2>
            </div>
            <div className="flex items-center justify-between w-full md:w-[80%]">
                <div className={step === 1 ? "ActiveTextlessNav TextlessNav w-[49%]" : "TextlessNav w-[49%]"}></div>
                <div className={step === 2 ? "ActiveTextlessNav TextlessNav w-[49%]" : "TextlessNav w-[49%]"}></div>
            </div>
            <div className={step !== 1 ? "hidden" : "flex flex-col items-center gap-[1rem] w-full md:w-[80%]"}>
                <div className="w-full FormElement">
                    <label htmlFor="titleImg">Upload a title image:<span className="Required">*</span></label>
                    <input type="file" name="titleImg" id="titleImg" className="hidden" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
                    <div className="flex justify-center items-center">
                        {!titleImage ? (
                            <span className="py-[0.5rem] px-[1rem] UploadFileBtn" onClick={() => fileInputRef.current?.click()}>+ Choose an image</span>
                        ) : (
                            <div className="flex justify-start items-center gap-[0.5rem]">
                                <span>{titleImage.name}</span>
                                <span className="RemoveFileBtn" onClick={handleRemoveFile}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                                    </svg>
                                </span>                                
                            </div>                        
                        )}
                    </div>              
                </div>
                <div className="w-full FormElement">
                    <label htmlFor="storyName">Story's name:<span className="Required">*</span></label>
                    <input type="text" name="storyName" id="storyName" placeholder="Name of the story" />
                </div>
                <div className="w-full FormElement">
                    <label htmlFor="genre">Genre:<span className="Required">*</span></label>
                    <select name="genre" id="genre">
                        {genres.map((genre) => (
                            <option key={genre.genreid} value={genre.genreid}>{genre.genrename}</option>
                        ))}
                    </select>
                </div>
                <div className="w-full FormElement">
                    <label htmlFor="storyDesc">Brief description:<span className="Required">*</span></label>
                    <textarea name="storyDesc" id="storyDesc" placeholder="Short description describing the story" />
                </div>
            </div>
            <div className={step !== 2 ? "hidden" : "flex flex-col items-center gap-[1rem] w-full md:w-[80%]"}>
                <div className="w-full FormElement">
                    <label htmlFor="storyIntro">AI's intro message:<span className="Required">*</span></label>
                    <textarea rows={2} name="storyIntro" id="storyIntro" placeholder="The very first AI generated message you will see when starting the story" />
                </div>
                <div className="w-full FormElement">
                    <label htmlFor="storyStats">Stats appearing on every response:</label>
                    <textarea rows={2} name="storyStats" id="storyStats" placeholder="Recurring elements like: relationships with certain characters, hp, etc."/>
                </div>
                <div className="w-full FormElement">
                    <label htmlFor="storyGoal">When should the story end?<span className="Required">*</span></label>
                    <textarea rows={2} name="storyGoal" id="storyGoal" placeholder="An event that triggers the AI's final response regarding this story"/>
                </div>
            </div>
            <div className="flex justiy-center items-center gap-[1rem]">
                {step === 1 && (
                    <Button type="button" usage="MainActionBtn" label="NEXT" onClick={handleFormPageChange}/>
                )}

                {step === 2 && (
                    <>
                        <Button type="button" usage="FormPageChanger" label="BACK" onClick={() => setStep(1)}/>
                        <Button type="submit" usage="MainActionBtn" label="CREATE"/>
                    </>
                )}
            </div>
        </form>
    </div>
  )
}

export default CreateForm