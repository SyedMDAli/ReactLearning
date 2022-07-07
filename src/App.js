import logo from './logo.svg';
import './App.css';
/*
import Welcome from './Welcome';
import Message from './Message';
import Clock from './Clock';

import ToggleButton from './ToggleButton';

import Greeting from './Greeting'
*/
import LoginControl from './LoginControl';
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

   return (
    <div>
      <LoginControl hasNewMessages={true} credit={100} hasWarning={true}/>
    </div>
  );

}

export default App;
