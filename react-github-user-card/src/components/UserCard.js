import React from 'react';

const UserCard = props => {
    return (
        <div className="card">
            <img src={props.user.avatar_url} />
            <div className="card-info">
                <h3 className="name">{props.user.name}</h3>
                <p className="user-blog"><a href={props.user.blog}>{props.user.blog}</a></p>
                <p><a href={props.user.html_url}>{props.user.html_url}</a></p>
                <p>{props.user.location}</p>
                <p>{props.user.bio}</p>
            </div>
        </div>
    );
}
export default UserCard;