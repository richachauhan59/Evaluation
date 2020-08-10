import React from 'react'
import Name from '../coding_1/name'
import '../index.css'
import data from '../data.json'

export default class button extends React.Component{
    constructor(props){
        super(props)
    }
  
    render(){
        return(
            <div className="Name">
                <button>Asending</button>
                <button>Decending</button>
                <button>isFollowing</button>
                <button>notFollowing</button>
                <Name/>
            </div>
        )
    }
}