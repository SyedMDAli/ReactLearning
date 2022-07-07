import logo from './logo.svg';
import './App.css';
/*
import Welcome from './Welcome';
import Message from './Message';
import Clock from './Clock';

import ToggleButton from './ToggleButton';

import Greeting from './Greeting'

import LoginControl from './LoginControl';
*/
import NumberList from './NumberList';
function App() {
  /*
  function formatName(userName){
    return userName.toUpperCase();
  }
  
  const name = "Syed Ali";
  
  function getGreetings(userName){
    if(userName){
      return <h1> Hello {formatName(userName)}</h1>;
    }else{
      return <h1>Hello Stranger</h1>
    }
  }

  const userImage ="/logo192.png";
  const image = <img className="sample-class" src={userImage} alt="Logo" />;
  const para = "Good to See You!";
  const element = (
    <div>
      <Welcome name={formatName(name)} />
      <Message message={para} />
      {image}
    </div>
  );

  return element;
  
  return (
    <div>
      <Clock date={new Date()} />
    </div>
  );
 

  return (
    <div>
      <ToggleButton/>
    </div>
  );
   */
/*
   return (
    <div>
      <LoginControl hasNewMessages={true} credit={100} hasWarning={true}/>
    </div>
  );
*/

  const numbers = [1,2,3,4];
  const numbers2 = [11,2,23,24];
  const todos = [
    {id:1, name:'Coding', isDone: false},
    {id:2, name:'Walking', isDone: true}
    ];
  return (
    
    <div>
      <NumberList numbers={numbers}/>
      <NumberList numbers={numbers2}/>
      <ul>
        {
          todos.map(todo => (<li key={todo.id}> {todo.name } - {todo.isDone ? 'Done' : ''} </li>))
        }
      </ul>
    </div>
  );

}

export default App;
