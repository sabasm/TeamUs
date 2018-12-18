import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {getProfile} from '../services/auth'

 class ProfilePage extends Component {

    state={
        user:{}
    }

    componentWillMount(){
        getProfile()
            .then(user=>{
                this.setState({user})
            }).catch(error=>{
                console.log(error)
            })
    }

  render() {
      const {user} = this.state
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
      if(!loggedUser) this.props.history.push('/login')
    return (
      <div>
        {user.name}
        {user.email}
        <Link to="/StarWars"><button>Api de StarWars</button></Link>
      </div>
    )
  }
}
export default ProfilePage