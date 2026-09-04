import type { FeedbackProps } from "../types"

const Feedback = ({type, msg}:FeedbackProps) => {
  return (
    <div className={`${type} fixed top-0 right-0 m-[1rem] p-[1rem] rounded`}>
        <p>{msg}</p>
    </div>
  )
}

export default Feedback