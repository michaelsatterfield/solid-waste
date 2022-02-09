import { Component } from 'react'
import MyContext from './MyContext'
import firebase from 'firebase/app'

export default class MyProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      materials: [],
      categories: [],
    }
  }

  componentDidMount() {
    this.getCategories()
    this.getMaterials()
  }

  getCategories = () => {
    let categories = []
    firebase
      .firestore()
      .collection('categories')
      .orderBy('name')
      .get()
      .then((data) => {
        data.forEach((doc) => {
          categories.push(doc.data())
          this.setState({ categories })
        })
      })
      .catch((err) => console.log(err.message))
  }

  getMaterials = () => {
    let materials = []
    firebase
      .firestore()
      .collection('materials')
      .orderBy('name')
      .get()
      .then((data) => {
        data.forEach((doc) => {
          materials.push(doc.data())
          this.setState({ materials })
        })
      })
      .catch((err) => console.log(err.message))
  }

  render() {
    return (
      <MyContext.Provider
        value={{
          materials: this.state.materials,
          categories: this.state.categories,
          getCategories: () => this.getCategories(),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
