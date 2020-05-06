import React, {useState} from 'react';

export function Friend(){
    const [friend, setFriend] = useState(null);

    async function getFriend(){
        const res = await fetch("https://www.randomuser.me/api?results=1");
        const data = await res.json();
        console.log(data.results[0]);
        setFriend(data);
        return;
    };
    
    return (
        <div>
            <Button handleClick={getFriend} />
            <FriendProfile friend={friend} />
        </div>
    );
};


function FriendProfile({friend}){ 
    if (friend){
        friend = friend.results[0];
        return(
            <ul>
                <li><strong>First Name:</strong> {friend.name.first}</li>
                <li><strong>Last Name:</strong> {friend.name.last}</li>
                <li><strong>Address:</strong> {friend.location.street.name}, {friend.location.street.number}</li>
                <li><strong>Country:</strong> {friend.location.country}</li>
                <li><strong>Email:</strong> {friend.email}</li>
                <li><strong>Phone Number:</strong> {friend.phone}</li>
            </ul>
        );    
    }else return <></>;     
};


function Button({handleClick}){
    return <button onClick={handleClick}>Get a friend!</button>;
}