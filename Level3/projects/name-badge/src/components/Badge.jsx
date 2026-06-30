export default function Badge(props){

    const { badge } = props
    return(
        <div>
            <h1>{badge.user}</h1>
            <p>{badge.description}</p>
            <p>{badge.phone}</p>
            <p>Access type: {badge.access}</p>
            <p>Agreed to term? {badge.termAgreement ? 'Yes' : 'No'}</p>
        </div>
    )
}