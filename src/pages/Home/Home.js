import React, { Component } from 'react'
import GeneralTemplate from '../../templates/GeneralTemplate/GeneralTemplate';
import HomeContent from '../../components/organisms/HomeContent/HomeContent';
import './home.css'


class Home extends Component{
  constructor(){
    super();
    // estado da classe
    this.state = {
      inputValue: "",
      data: []
    }
  }

  // compomente já foi montado, ai faz algo, é um ciclo de vida da classe
  componentDidMount = async () =>{
    const getData = await this.props.data;
    this.setState({data: getData})
  }

  onClick = async() =>{
    const {inputValue, data } = this.state;
    if(inputValue && data.length){
      const result = await data.filter(item => item.position.toLowerCase().includes(inputValue.toLowerCase()))
      console.log(result)
      this.setState({inputValue: ""})
    } else {
      console.log("sem input ou sem data");
    }

  }

  onChange = (e) => {
    // e será o elemento, target é uma propriedade dentro do elemento, value do que foi clicado
    const value = e.target.value;
    console.log(value);
    this.setState({ inputValue: value });
  }

  render(){
    const {inputValue, data } = this.state;
    return(
      <GeneralTemplate>
        {/* Todos os compomentes aqui dentro são filhos (children) do General Template */}
        <HomeContent
        texto='Buscar'
        onClick={this.onClick}
        placeholder={'O que você procura?'}
        type='text'
        onChange={this.onChange}
        value={inputValue}
        data={data}
        />
      </GeneralTemplate>
    )
  }

}

export default Home;
