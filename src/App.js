import React, { Component } from 'react'
import MovieIntro from './MovieIntro'
import Header from './components/Header'
import Container from './components/Container'
import swapi from './swapi'
import { BrowserRouter as Router, Route, Link } from "react-browser-router";
import './App.css';
import human from './images/006-human.svg';
import planet from './images/007-universe.svg';
import vehicle from './images/002-star-wars.svg';


export class App extends Component {
  constructor () {
    super()
    this.state = {
      category: '',
      isFavorited: false,
      data: '',
      error: ''
    }
  }

  // collapseBtns = () => {

  // }

  selectCategory = (page) => {
    this.setState({ category: page})
  }

  componentDidMount(){
    const url = `https://swapi.co/api/${this.state.category}/?page=${this.state.pageNumber}`

  }


  render() {
    const People = () => {
      return ( 
        <Container data={this.state.people}/>
      )
    }

    const Planets = () => {
      return (
        <Container data={this.state.planets}/>
      )
    }

    const Vehicles = () => {
      return (
        <Container data={this.state.vehicles} />
      )
    }

    return (
      <div className='App'>
        <Header />
        <section className='btnContainer'>
        <Router>
          <Link to='/People'>
            <button className='selectCategoryBtn' onClick={() => this.selectCategory('people')}>
              <span className='selectCategoryBtnText'>People</span>
              <img className='icon' src={human} alt=''/>
            </button>
          </Link>
          <Link to='/Planets'>
            <button className='selectCategoryBtn' onClick={() => this.selectCategory('planets')}>
              <span className='selectCategoryBtnText'>Planets</span>
              <img className='icon' src={planet} alt=''/>
            </button>
          </Link>
          <Link to='/Vehicles'>
            <button className='selectCategoryBtn' onClick={() => this.selectCategory('vehicles')}>
              <span className='selectCategoryBtnText'>Vehicles</span>
              <img className='icon' src={vehicle} alt=''/>
            </button>
          </Link>
          <Route path='People' component={People} />
          <Route path='Planets' component={Planets} />
          <Route path='Vehicles' component={Vehicles} />
        </Router>
        </section>
        {this.state.data && <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2c110454-5b33-4416-bf9b-72992c7cb56f/d60eb1v-79212624-e842-4e55-8d58-4ac7514ca8e4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJjMTEwNDU0LTViMzMtNDQxNi1iZjliLTcyOTkyYzdjYjU2ZlwvZDYwZWIxdi03OTIxMjYyNC1lODQyLTRlNTUtOGQ1OC00YWM3NTE0Y2E4ZTQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9LDpLmLlbA507H7fKa8aEDxFr8k3SlwCGC1zuJ13d1w' alt='loading gif'/> }
      </div>
    )
  }

}

export default App

