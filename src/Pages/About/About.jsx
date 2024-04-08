import Card from "../../Shared/Card";
import Monna from "../../assets/Monna-Photoroom.jpg";
import Rony from "../../assets/RonyBhai.jpg";

const team = [
    {
        id: 1,
        name: "Mehede Hasan Rony",
        img: Monna,
        post: "Conductor",
        quotes: "An introductory course covering fundamental concepts in computer science and algorithms."
    },
    {
        id: 2,
        name: "Data Structures and Algorithms",
        img: Rony,
        post: "Professor Mark Williams",
        quotes: "Learn about various data structures and algorithms used in software development."
    }
]
const About = () => {
    return (
        <div className="min-h-screen container mx-auto">
            <h1 className="text-6xl text-center font-bold mt-28">About Us</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-20">
                {team.map(data => <Card key={data.id} data={data}></Card>)}
            </div>
        </div>
    );
};

export default About;