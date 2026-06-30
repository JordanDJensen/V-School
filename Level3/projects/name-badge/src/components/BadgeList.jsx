import Badge from "./Badge"

export default function BadgeList(props){
    const {badges} = props

    return(
        <div>
        <h2>BadgeList</h2>
        {badges.map((badge) => (
            <Badge key={badge.user} badge={badge}/>
        ))}
        </div>
    )
}