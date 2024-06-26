import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";


const Card = ({ data }) => {
    const { name, img, post, quotes, fbLink } = data;
    // console.log(data);
    return (
        <div className="card w-[350px] md:w-96 shadow-xl bg-slate-200 p-3 m-10">
            <img className="h-[330px] mb-4 rounded-xl" src={img} alt="Shoes" />
            <div className="flex flex-col poppins-thin text-center">
                <h2 className="text-2xl  font-bold">
                    {name}
                </h2>
                <h2 className="text-xl text-[#fd1a66] font-semibold mb-3">
                    {post}
                </h2>

                <p>{quotes}</p>
            </div>
            <div className="flex justify-center items-center p-4 space-x-10 text-3xl cursor-pointer">
                <a href={fbLink} target="_blank" rel="noopener noreferrer"><BsFacebook /></a>
                <BsWhatsapp />
                <IoMdMail />
            </div>
        </div>
    );
};

export default Card;