import Pet from "./Pet"

export default function Friend(props){
    const {name, age, pets }= props.friend
    return(
        <div className="friend-item">
            <h1>Friend: {name}</h1>
            <h1>Age: {age}</h1>

            {pets.map((pet) => (
                <Pet key={pet.name} pet={pet} />
            ))}
        </div>
    )
}