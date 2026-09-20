import { useEffect, useState } from "react"
import Button from "./Button"
import Story from "./Home/Story"

interface User {
    userid: number,
    username: string,
    displayname: string,
    pfp: string,
    banner: string,
    followercount: number,
    followingcount: number
}

interface UserStories {
    storyid: number,
    storyname: string,
    titleimg: string
}

const ProfileInfo = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userStories, setUserStories] = useState<UserStories[] | null>(null);
  const [loading, isLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLoggedInUserData = async () => {
        try {
            isLoading(true);
            const loggedInUserData = await fetch('/api/user/profileData');

            if(!loggedInUserData.ok) {
                const errorData = await loggedInUserData.json().catch(() => null);
                setError(errorData?.message || "Failed to fetch user's data, try again later!");
            }

            const data = await loggedInUserData.json();
            setUser(data);
        }
        catch(e) {
            setError("Something went wrong, try again later!")
        }
        finally {
            isLoading(false);
        }
    }

    const getUserStories = async () => {
        try {
            isLoading(true);
            const userStories = await fetch('/api/user/profileStories');

            if(!userStories.ok) {
                const errorData = await userStories.json().catch(() => null);
                setError(errorData?.message || "Failed to fetch user's data, try again later!");
            }

            const data = await userStories.json();
            setUserStories(data);
        }
        catch (e) {
            setError("Something went wrong, try again later!")
        }
        finally {
            isLoading(false)
        }
    }

    getLoggedInUserData();
    getUserStories();
  }, [])

  return (
    <div className="flex flex-col flex-1 items-center md:h-[100dvh] overflow-y-auto md:overflow-x-hidden">
        <div className="ProfileBanner">
            <img src={user?.banner} alt="User's banner image" />
        </div>
        <div className="flex flex-col items-start md:items-center w-[90dvw] md:w-[70dvw] xl:w-[80dvw] mt-[-50px] md:mt-[-100px] gap-[0.25rem] md:py-[2rem]">
            <div className="ProfilePfp">
                <img src={user?.pfp} alt="User's profile picture" />
            </div>
            <div>
                <p className="text-[20px] font-bold tracking-[5%]">{user?.displayname}</p>
                {/* There will be a 'Follow'/'Unfollow" button here, if it is another user's profile */}
            </div>
            <div className="flex gap-[1rem] mt-[0.5rem]">
                <div className="flex flex-col items-center">
                    <div>{user?.followercount}</div>
                    <div className="italic">Followers</div>
                </div>
                <div className="flex flex-col items-center">
                    <div>{user?.followingcount}</div>
                    <div className="italic">Following</div>
                </div>
                <div className="flex flex-col items-center">
                    <div>0</div>
                    <div className="italic">Stories Created</div>
                </div>
            </div>
        </div>
        <div className="flex flex-col flex-1 items-center w-[90dvw] md:w-[70dvw] xl:w-[80dvw] mt-[1.5rem] md:mt-0 gap-[1rem] md:p-[2rem]">
            <div className="text-left w-full md:text-center">
                <h2 className="text-[20px]">My Stories</h2>
            </div>
            {userStories == null && (
                <div className="flex flex-col flex-1 items-center justify-center gap-[0.5rem] w-full">
                    <p className="text-[18px]">No stories yet</p>
                    <Button type="button" usage="MainActionBtn" label="+ CREATE STORY" />
                </div>
            )}
            {userStories !== null && (
                <div className="flex justify-start items-center gap-[1rem] max-w-[90dvw] overflow-x-auto md:grid grid-cols-3 xl:grid-cols-5">
                    {userStories.map((story) => (
                        <Story storyID={story.storyid} storyName={story.storyname} titleImg={story.titleimg}/>
                    ))}
                </div>
            )}
        </div>
    </div>
  )
}

export default ProfileInfo