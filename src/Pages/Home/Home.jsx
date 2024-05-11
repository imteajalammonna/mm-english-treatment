import { Link } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import Button from "../../Shared/Button";
// import BG from "https://i.ibb.co/B6MmVRW/wuj930enmyfwih0ghhl0.webp";
// import logo from "../../assets/logo.png";
import About from "../About/About";

const Home = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Set smooth scrolling behavior
        });
    }
    return (<>
        <div className="bg-[#cce8ff] min-h-screen w-full" >
            <div className="md:flex items-center justify-around pt-28">
                <div className="ml-6 mb-4 md:m-0">
                    <span className="text-5xl md:text-[93px] md:leading-[1.15] !font-extrabold uppercase archivo-black-regular text-[#fd1a66]">MM ENGLISH <h1 className="md:tracking-[3.6px] tracking-wider">TREATMENT</h1></span>
                    <p className="text-xs md:text-xl ml-2 mt-4 md:mt-6 mb-6 md:mb-10 poppins">Expert guidance, practice tests, and tips to ace the IELTS exam<br />and achieve your desired English proficiency goals.</p>
                    <div className="flex items-center justify-center md:block">
                        <Link to="/courses" className="md:ml-2"><Button>Courses</Button></Link>
                        <Link to="/faq" className="ml-3 md:ml-5 button2"><button>FAQ ? </button></Link>
                    </div>
                </div>
                <div className="flex">
                    <img src="https://i.ibb.co/B6MmVRW/wuj930enmyfwih0ghhl0.webp" alt="" />
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex poppins-thin p-3 m-2 md:p-10 bg-white rounded-xl space-x-6 md:space-x-28 mt-10 text-xl text-center md:text-3xl">
                    <div className="">
                        <h5 className="text-[#ff3c7d] font-bold">100+ Students</h5>
                    </div>
                    <div className="">
                        <h5 className="text-[#1bcaff] font-bold">3+ Mentors</h5>
                    </div>
                    <div className="">
                        <h5 className="text-[#2be650] font-bold">5+ IELTS Passed</h5>
                    </div>
                </div>
            </div>
        </div>
        {/* <Features></Features> */}
        {showButton && <button className="topBtn fixed bottom-2 right-2 z-50 text-2xl" onClick={scrollToTop}><IoIosArrowUp />
        </button>}
        <About></About>
    </>
    );
};

export default Home;