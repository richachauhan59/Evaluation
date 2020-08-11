import React from 'react'
// import styles from './UserDetails.module.css'

function UserDetails(props) {
    return (

        <div style={{display:"flex", width:"90%", textAlign: 'center', padding:'2%', border: " 1px solid black", margin:"2%"}} >

            <div>
                <img style={{borderRadius: "50%"}}  src={props.img} alt="img"></img>
            </div>

            <div>
                <h1>{props.f_name + " " + props.l_name}</h1>
                <div >
                    {props.address}
                </div>
            </div>

            <div>
                <h1>{props.karma}</h1>
                <div>Karma</div>
            </div>

            <div>
                <h1>{props.followers}</h1>
                <div>Followers</div>
            </div>

            <div>
                <h1>{props.posts}</h1>
                <div>Posts</div>
            </div>

            <div>
                <button>{props.isfollowing ? "Unfollow" : "Follow"}</button>
            </div>

        </div>
    )
}

export default UserDetails