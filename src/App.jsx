import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import "./App.css";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <main>
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11")}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        </main>

</div>
);
}


export default App;
