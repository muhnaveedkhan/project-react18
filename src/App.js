import './App.css';
import Header from './components/UI/Header';
import Sidebar from './components/UI/Sidebar';
import Footer from './components/UI/Footer';
import HelloMsg from './components/HelloMsg';

function MyButton(props) {

  console.log('props = ',  props);

  function helloBro(){
    alert('Hello Brother From MyButton')
  }

  return (
    <button onClick={myEvent}>
      I'm a button
    </button>
  );
}


function App() {

  let myData = [
    {id: 1, stdName: "Naveed", age: 36},
    {id: 2, stdName: "Noman", age: 33},
    {id: 3, stdName: "Ali", age: 30},
    {id: 4, stdName: "Rehman", age: 32},
    {id: 5, stdName: "Wasim", age: 41},
  ];

  function helloBro(){
    alert('Hello Brother From App Component');
  }

  return (
    <>
      <div className='App'>

      <HelloMsg data = { myData } />

      <MyButton myEvent="helloBro" />

        {/* <Header />
        <Sidebar />
        <Footer /> */}
      </div>
    </>
  );
}

export default App;
