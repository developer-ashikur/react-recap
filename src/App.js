import { useEffect, useState } from 'react';
import './App.css';

const divStyle ={
  color: 'tomato',
  border: '1px solid yellowgreen',
  borderRadius: '10px',
  margin: '10px'
}
const gridStyle ={
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)'
}
// const allStudnets = [
//   {name: 'anika', age: 14, year: 8},
//   {name: 'tamim', age: 10, year: 5},
//   {name: 'sakib', age: 20, year: 12}
// ]
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=6')
    .then(res => res.json())
    .then(data => setUsers(data.results))
  }, [])
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count+1)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Students Added: {count}</h1>
        <div style={gridStyle}>
          {
            users.map(user => <Students student={user} key={user.phone} click={handleClick}></Students>)
          }
        </div>
      </header>
    </div>
  );
}

function Students(props) {
  const {picture, email, name, phone, gender, dob}= props.student;
  return(
    <div style={divStyle}>
      <img src={picture.large} alt=""/>
      <h4>My name is {name.title + ' ' + name.first + ' ' + name.last}.</h4>
      <h4>Gender: {gender}</h4>
      <h4>Age: {dob.age}</h4>
      <h4>Phone: {phone}</h4>
      <h4>Email: {email}.</h4>
      <h4><button onClick={props.click}>Add to Cart</button></h4>
    </div>
  )
}
export default App;
