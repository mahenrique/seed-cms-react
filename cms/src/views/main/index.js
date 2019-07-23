import React, { Component } from 'react'

import api from '../../services/api'

import { List, ListItem } from './styles'

class Main extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    this.getData()
  }

  getData =  async () => {
    try {
      const response = await api.get('/products')
      this.setState({ data: response.data.docs })

      console.log(this.state.data)
    } catch (error) {
      console.log('Error getProduct()', error)
    }
  }

  render() {
    return (
      <div className="App">
        <List>
          {
            this.state.data.map(item => (
              <ListItem key={item._id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </ListItem>
            ))
          }
        </List>
      </div>
    )
  }
}

export default Main
