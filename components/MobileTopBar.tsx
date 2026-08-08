const MobileTopBar = () => {
  return (
    <div className="flex justify-between items-center px-[5dvw] MobileTopBar">
        <div>
            <h1 className="text-[24px] tracking-[10%]">S.A.I. RPG</h1>
        </div>
        <div className="flex justify-evenly items-center gap-[0.3rem]">
            <div>
                <p className="text-[16px]">999+</p>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="23" fill="currentColor" className="bi bi-credit-card-fill" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1H0zm0 3v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7zm3 2h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default MobileTopBar