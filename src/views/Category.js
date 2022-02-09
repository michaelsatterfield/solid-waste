import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import MyContext from '../state/MyContext'
import { Link } from 'react-router-dom'

export default class Category extends Component {
  static contextType = MyContext

  constructor(props) {
    super(props)
    this.state = {
      category: { name: '' },
      filteredMaterials: [],
    }
  }

  componentDidMount() {
    this.getCategory()
  }

  getCategory = () => {
    let context = this.context
    var category = context.categories.find((obj) => {
      return obj.id === this.props.match.params.id
    })
    this.setState({ category })
    this.filterMaterials()
  }

  filterMaterials = () => {
    let context = this.context
    let mats = context.materials
    let filteredMaterials = []
    mats.forEach((mat) => {
      if (mat.category === this.props.match.params.id) {
        filteredMaterials.push(mat)
        this.setState({ filteredMaterials })
      }
    })
  }

  render() {
    return (
      <div style={{ paddingTop: '34px', paddingBottom: '34px' }}>
        <SearchBar />
        <div className="popularCategories">
          <p className="category_title">{this.state.category?.name}</p>
          <ul style={{ listStyle: 'none', marginTop: '44px' }}>
            {this.state.filteredMaterials.map((mat) => {
              return (
                <li style={{ marginTop: '15px' }} key={mat.name}>
                  <Link className={'material_link'} to={`/material/${mat.id}`}>
                    {mat.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}
