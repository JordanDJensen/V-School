export default function Pet(props){
    const {name, breed } = props.pet;
    return(
        <div>
            <ul>
                <li>Pet: {name} , Breed: {breed}</li>
            </ul>
        </div>
    )
}