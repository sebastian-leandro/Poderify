import Image from "next/image"


const CardRow = ({img,alt,title}) => {


  return (
    <div className="w-64 md:w-full h-[350px] max-w-[1100px] p-[0.1rem] bg-card rounded-2xl">
        <div className="w-full h-full gradient-07 rounded-2xl">
            <div className="w-full flex items-center h-full justify-center flex-col lg:flex-row">
                <div className="w-full h-full flex relative">
                    <Image
                    src={img}
                    alt={alt}
                    fill
                    className="block rounded-2xl"
                    loading="lazy"
                    />
                </div>
                <div className="w-full h-[75%] flex items-center justify-center">
                    <h3 className="subheading">{title}</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardRow