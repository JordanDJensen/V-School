import Friend from "./Friend";

export default function FriendList(props){

    return(
        <div className="friend-list">
             {props.friends.map((friend) => (
                <Friend key={friend.name} friend={friend} />
                
             ))}
        </div>
    )
}