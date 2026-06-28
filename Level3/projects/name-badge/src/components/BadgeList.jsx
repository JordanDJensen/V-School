export default function BadgeList(props){
    const {badges} = props

    const userElement = badges.map((badge, i) =>{
        return(
            <div key={i}>
                <h1>{badge.user}</h1>
            </div>
        )
    })

    return(
        <div>
        <h2>BadgeList</h2>
        {userElement}
        </div>
    )
}