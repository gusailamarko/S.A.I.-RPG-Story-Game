import type { ButtonProps } from "../types"

const Button = ({type, usage, label, onClick}:ButtonProps) => {
  return (
    <button type={type} className={`${usage} py-[0.5rem] px-[1rem] text-[16px]`} onClick={onClick}>{label}</button>
  )
}

export default Button