import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  
const nayok = ["anwar","jafor","bappi"]
const product = [
  {name:'photoshop',price: '$90'},
  {name:'illustrator',price: '$80'},
  {name:'PDF reader',price: '$40'},
  {name:'photoshop',price: '$90'},
]
const productName = product.map(product => product.name);
console.log(productName);
  return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
        <Counter></Counter>
        <ul>
          {
            nayok.map(nayok=><li>{nayok}</li>)
          }
        </ul>
        <ul>
          {
            product.map(product=><li>{product.name}</li>)
          }
        </ul>
        {
          product.map(pd =>  <Product product ={pd}></Product>)
        }
        {/* <Product product ={product[0]}></Product>
        <Product product ={product[1]}></Product>
        <Product product ={product[2]}></Product>
        <Product product ={product[3]}></Product> */}

        {/* <Product name ={product[1].name} price ={product[1].price}></Product>
        */}
        <Person name="rubel"></Person>
        <Person name = {nayok[0]}></Person>
        <Person name = {nayok[1]}></Person> 

      </header>
    </div>
  );
}
function Users(){
  const [users,setUsers] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setUsers(data)
    },[])
  })
  return(
    <div>
       <h3>Dynamic user: {users.length}</h3>
      <ul style={{textAlign:'left'}}>
        {
          users.map(user => <li>{user.name+', Email: '+user.email}</li>)
        }
      </ul>
      </div>
  ) 
}
function Product(props){
  const productStyle = {
    border : '1px solid gray',
    borderRadious : '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px'
  }
  //const {name,price}= {name:'photoshop',price: '$90'};
  const {name,price}= props.product;
 // console.log(name,price)
    return (
    <div style={productStyle}>
      {/* <h3>Name: {props.product.name}</h3> */}
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
      <button>Buy now</button>
    </div>
  )
}
function Person(props){
  return(
    <div style = {{backgroundColor : 'rgb(52 40 40)', border: '2px solid red',marginTop: '10px'}}>
      <h3>Name: {props.name}</h3>
      <p> I am a player</p>
      </div>
  )
}
function Counter(){
  const [count,setCount] =useState(10);
  //const handleDecrease = () => {setCount(count-1)}
  const handleIncrease = () => {setCount(count+1)}
  return(
    <div>
      <h1>count:{count}</h1>
      <button onClick={handleIncrease}>Increase </button>
      <button onClick={() => {setCount(count-1)}}>Decrease</button>
    </div>
  )
}
export default App;
//*************************** */
// ----------- function part -------------
//-----------/ return part -------------

// ----------- function part -------------
// var name = { 
//   name: "syum",
//   job: "developer"
// };
// var style = {
//   color: 'red',
// }
//-----------/ return part -------------
// <h1 style = {style}>{name.job}</h1>

//*************************** */
// ----------- function part -------------
//-----------/ return part -------------

