import logo from './logo.svg';
import './App.css';

function App() {
  
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
      <h1>Hello {formatName(name)}!</h1>
      <p>{para}</p>
      {image}
    </div>
  );

  return element;
}

export default App;
