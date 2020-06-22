import React, { Component } from 'react'
import GeneralTemplate from '../../templates/GeneralTemplate/GeneralTemplate';
import HomeContent from '../../components/organisms/HomeContent/HomeContent';
import './home.css'


class Home extends Component{
  constructor(){
    super();
    this.state = {
      inputValue: ""
    }
  }

  onClick = () =>{
    console.log('click')
  }

  onChange = () => {
    console.log('click 2')
  }

  render(){
    return(
      <GeneralTemplate>
        {/* todos compomentes que tiver aqui dentro serão filhos do general template */}
        <HomeContent
        texto='Buscar'
        onClick={this.onClick}
        placeholder={'O que você procura?'}
        type='text'
        onChange={this.onChange}
        value={this.state.value}
        />
      </GeneralTemplate>
    )
  }

}

export default Home;
