import Image from "next/image"

const Pattern = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
        <Image src={"/images/pattern.png"} alt="pattern" fill className="w-full h-full object-cover"/>
      </div>
  )
}
export default Pattern