const ProfileInfo = () => {
  return (
    <div className="flex flex-col flex-1 items-center">
        <div className="ProfileBanner">
            <img src="imgs/defaultProfileBg.jpg" alt="User's banner image" />
        </div>
        <div className="flex flex-col items-start w-[90dvw] mt-[-50px] gap-[0.25rem]">
            <div className="ProfilePfp">
                <img src="imgs/defaultProfilePfp.jpg" alt="User's profile picture" />
            </div>
            <div>
                <p className="text-[20px] font-bold tracking-[5%]">Displayname</p>
                {/* There will be a 'Follow'/'Unfollow" button here, if it is another user's profile */}
            </div>
            <div className="flex gap-[1rem] mt-[0.5rem]">
                <div className="flex flex-col items-center">
                    <div>999</div>
                    <div className="italic">Followers</div>
                </div>
                <div className="flex flex-col items-center">
                    <div>999</div>
                    <div className="italic">Following</div>
                </div>
                <div className="flex flex-col items-center">
                    <div>0</div>
                    <div className="italic">Stories Created</div>
                </div>
            </div>
        </div>
        <div className="flex flex-col flex-1 items-start w-[90dvw] mt-[1.5rem] gap-[1rem]">
            <div>
                <h2 className="text-[20px]">My Stories</h2>
            </div>
            {/* Egyenlőre statikusan egy középre helyetett content, de majd ez a story számtól függően dinamikus content lesz itt */}
            <div className="flex flex-col flex-1 items-center justify-center gap-[0.25rem] w-full">
                <p className="text-[18px]">No stories yet</p>
                <button type="button" className="bg-[#ffa000] text-black text-[14px] p-[0.5rem] rounded-[10px] border-1 border-slate-300">+ CREATE STORY</button>
            </div>
        </div>
    </div>
  )
}

export default ProfileInfo