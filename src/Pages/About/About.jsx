import Card from "../../Shared/Card";

const team = [
    {
        id: 1,
        name: "Mehede Hasan Rony",
        img: 'https://i.ibb.co/2ZGsSQz/Rony-Bhai-Photoroom.jpg',
        post: "Conductor",
        quotes: "Learn about various data structures and algorithms used in software development.",
        fbLink: 'https://www.facebook.com/mdmehede.hasanrony',
        whatsapp: '+880 1872-327343'
    },
    {
        id: 2,
        name: "Mahmudul Hasan",
        img: 'https://i.ibb.co/TmbSXxq/Screenshot-132-Photoroom.jpg',
        post: "Trainer",
        quotes: "Learn about various data structures and algorithms used in software development.",
        fbLink: 'https://www.facebook.com/mhamadulhasan.mustak',
        whatsapp: '+880 1403-730539'
    },
    {
        id: 3,
        name: "Imteaj Alam Monna",
        img: 'https://i.ibb.co/F3G77mP/Monna3-Photoroom.jpg',
        post: "Web Developer",
        quotes: "Learn about various data structures and algorithms used in software development.",
        fbLink: '',
        whatsapp: '01'
    }
]
const About = () => {
    return (
        <div className="min-h-screen container mx-auto">
            <h1 className="text-6xl text-[#fd1a66] text-center font-bold mt-28 underline">Our Team</h1>
            <div className="grid grid-cols-1 place-items-center gap-5 md:grid-cols-3 mt-20">
                {team.map(data => <Card key={data.id} data={data}></Card>)}
            </div>
        </div>
    );
};

export default About;