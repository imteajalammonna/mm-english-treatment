import Card from "../../Shared/Card";
import Monna from "../../assets/RonyBhai-Photoroom.jpg";
import Rony from "../../assets/Monna3-Photoroom.jpg";

const team = [
    {
        id: 1,
        name: "Mehede Hasan Rony",
        img: Monna,
        post: "Conductor",
        quotes: "Learn about various data structures and algorithms used in software development."
    },
    {
        id: 2,
        name: "Mahmudul Hasan",
        img: Rony,
        post: "Trainer",
        quotes: "Learn about various data structures and algorithms used in software development."
    }
]
const About = () => {
    return (
        <div className="min-h-screen container mx-auto">
            <h1 className="text-6xl text-[#fd1a66] text-center font-bold mt-28 underline">About Us</h1>
            <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-3 mt-20">
                {team.map(data => <Card key={data.id} data={data}></Card>)}
            </div>
        </div>
    );
};

export default About;