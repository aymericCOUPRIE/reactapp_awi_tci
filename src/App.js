import logo from './logo.svg';
import './App.css';

import Person from './greetings/person'
import GreetingForm from './greetings/greetingForm'
import Greetings from "./greetings/Greetings";

const App = () => {
    return (
        <Greetings name={'Bob'}/>
    )
}

export default App;
