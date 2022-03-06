import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {product_list} from './product_list.js';
import boardnews from './boardnews.png';
import gryPlanszowe from './gryPlanszowe.png';
import planszeo from './planszeo.png';
import logo from './logo.png';
import przykladowyProdukt from './przykladowyProdukt.png';
import premiera from './premiera.png';
import dodruk from './dodruk.png';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: product_list};
  }
  render() {
    return(
      <>
        <Menu/>
        <SideMenu/>
        <a href="#" className="scroll_up">^</a>
        <Main products={this.state.products}/>
        <div className="bottom_text"><br/><br/>
          Najlepsze gry planszowe, Wsiąść do Pociągu, Catan, Osadnicy z Catanu, najlepsze planszówki, Carcassonne gra, gry planszowe dla 2 osób, gry planszowe sklep, Splendor, Arnak, Everdell, tanie planszówki, gry na imprezę, Brass: Birmingham, Root, Tajniacy, 5 sekund, Pociągi gra planszowa, top gier planszowych, gry planszowe na prezent, Gloomhaven, Monopoly, Terraformacja Marsa, Scrabble cena, Azul, ranking gier planszowych, gry planszowe na imprezę, gry planszowe dla dzieci, top lista, aktualności gier planszowych, zapowiedzi gier, przedsprzedaże planszówek, kalendarz premier, Wiedźmin.
        </div><br/><br/><br/>
        <Footer/>
      </>
    );
  }
}

function Menu() {
  return(
    <>
      <div className="menu1">
        <table>
        <tbody>
          <tr>
            <img src={logo} alt="logo"/>&nbsp;
            <SearchBar></SearchBar>
            <td className="empty_space"></td>
            <RightMenu></RightMenu>
          </tr>
        </tbody>
        </table>
      </div>
      <div className="menu2"><a>APLIKACJA MOBILNA Planszeo</a></div>
      <div className="menu3"><a>KALENDARZ premier i dodruków</a></div>
    </>
  );
}

function SearchBar(){
  return(
    <>
      <td className="search_bar">
          <input type="search" placeholder="Wpisz tytuł gry"/>
      </td>
    </>
  );
}

function RightMenu(){
  return(
  <>
        <td className='rightMenuText'>Nowości</td>
        <td className='rightMenuText'>Rankingi</td>
        <td className='rightMenuText'>O planszeo</td>
        <td className='rightMenuText'>Wspolpraca</td>
        <td className='rightMenuText'>Blog</td>
  </>
  );
}

function SideMenu() {
  return(
    <div className="side">
      <img src={boardnews} alt="Board News" width="50px" height="50px"/><br/>
      <img src={gryPlanszowe} alt="On Table" width="50px" height="50px" /><br/>
      <img src={planszeo} alt="planszeo" width="65px" height="50px"/><br/>

      <button className="side_year">2021</button><br/>
      <button className="side_year">2022</button><br/>

      <button className="side_month">styczeń</button><br/>
      <button className="side_month">luty</button><br/>
      <button className="side_month">marzec</button><br/>
      <button className="side_month">kwiecień</button><br/>
      <button className="side_month">maj</button><br/>
      <button className="side_month">czerwiec</button><br/>
      <button className="side_month">lipiec</button><br/>
      <button className="side_month">sierpień</button><br/>
      <button className="side_month">wrzesień</button><br/>
      <button className="side_month">październik</button><br/>
      <button className="side_month">listopad</button><br/>
      <button className="side_month">grudzień</button><br/>

    </div>
  );
}

function Footer() {
  return(
    <div className="footer">
      Stopka Strony
    </div>
  );
}

function MonthSelect() {
  return(
    <table>
      <tbody>
        <tr>
          <td><button className="main_year">2021</button></td>
          <td><button className="main_year">2022</button></td>
        </tr>
        <tr>
          <td><button className="main_month">styczeń</button></td>
          <td><button className="main_month">luty</button></td>
          <td><button className="main_month">marzec</button></td>
          <td><button className="main_month">kwiecień</button></td>
          <td><button className="main_month">maj</button></td>
          <td><button className="main_month">czerwiec</button></td>
          <td><button className="main_month">lipiec</button></td>
          <td><button className="main_month">sierpień</button></td>
          <td><button className="main_month">wrzesień</button></td>
          <td><button className="main_month">październik</button></td>
          <td><button className="main_month">listopad</button></td>
          <td><button className="main_month">grudzień</button></td>
        </tr>
      </tbody>
    </table>
  );
}



function ProductList(props) {
  return(
    <div className="product_list">
    <Year products={props.products}/>
    </div>
  );
}

function Year(props) {
  let list = props.products;
  let list2 = [];
  for(let i=0; i<=12; i++) {
    list2[i] = list.filter(product=>{return product.month==i});
  }
  for(let i=0; i<list2.length; i++) {
    if(list2[i].length==0) {
      list2.splice(i, 1);
      i--;
    }
  }
  for(let i=0; i<list2.length; i++) {
    console.log(list2[i]);
  }
  list = list2.map((element, index)=>
    <Month key={index} products={element}/>);
  return(
    <div>
      {list}
    </div>
  );
}

function Month(props) {
  let list = props.products;
  let list2 = [];
  for(let i=0; i<=31; i++) {
    list2[i] = list.filter(product=>{return product.day==i});
  }
  for(let i=0; i<list2.length; i++) {
    if(list2[i].length==0) {
      list2.splice(i, 1);
      i--;
    }
  }
  for(let i=0; i<list2.length; i++) {
    console.log(list2[i]);
  }
  list = list2.map((element, index)=>
    <Day key={index} products={element}/>);
  return(
    <div>
      {list}
    </div>
  );
}

function Day(props) {
  let list = props.products;
  let amount = 0;
  let temp;
  for(let i=0; i<2; i++) {
    for(let i=0; i<list.length; i++) {
      if(list[i].type=="dodruk" && i!=list.length-1 && i+amount<list.length) {
        amount++;
        temp=list[list.length-amount];
        list[list.length-amount]=list[i];
        list[i]=temp;
      }
    }
  }
  list = list.map((element, index)=>
    <Product key={index} product={element}/>);
  return(
    <div>
      {list}
    </div>
  );
}

function Main(props) {
  return(
    <div className="main">
      <h1>Kalendarz premier i dodruków. Tworzony przez:</h1>
      <img src={boardnews} alt="Board News" width="80px" height="80px"/>
      <img src={gryPlanszowe} alt="On Table" width="80px" height="80px" className="mid"/>
      <img src={planszeo} alt="planszeo" width="130px" height="80px"/>
      <MonthSelect/><br/>
      <ProductList products={props.products}/><br/>
      <MonthSelect/><br/>
    </div>
  );
}

function Product(props) {
  let a;
  if(props.product.type=="premiera") a = <img src={premiera} alt="premiera"/>;
  else a = <img src={dodruk} alt="dodruk"/>;
  return(
    <p className="product">
      {a}<br/>
      <img src={przykladowyProdukt} alt="product photo" width="150px" height="150px"/><br/>
      <span className="product_name">{props.product.name}</span>
      <br/><br/><br/>
    </p>
  );
}




ReactDOM.render(
  <Page />,
  document.getElementById('root')
);