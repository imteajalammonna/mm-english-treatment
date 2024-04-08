

const Card = ({ data }) => {
    const { name, img, post, quotes } = data;
    console.log(data);
    return (
        <div className="card w-96 shadow-xl">
            <img className="" src={img} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <h2 className="card-title">
                    {post}
                </h2>

                <p>{quotes}</p>
            </div>
        </div>
    );
};

export default Card;