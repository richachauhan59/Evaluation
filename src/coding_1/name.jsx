import React from 'react'
import data from '../data.json'
import UserDetails from './userDetails'

export default class Name extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div  >

                {
                    
                    data.sort((a, b) => a.first_name.localeCompare(b.last_name))

                    .map(item =>

                        <UserDetails

                            key={item.address}
                            img={item.avatar}
                            f_name={(item.first_name)}
                            l_name={item.last_name}
                            address={item.address}
                            karma={item.karma}
                            followers={item.followers}
                            posts={item.posts}
                            isfollowing={item.is_following}

                        />
                    )
                }



            </div>
        )
    }
}