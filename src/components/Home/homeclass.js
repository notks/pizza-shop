import React, { Component } from 'react'
import Auth from '../../Auth'
export default class homeclass extends Component {
  async componentWillMount () {
    await Auth.checkAuth()

  }
    render() {
        return (
            <div>
                HOME
            </div>
        )
    }
}
