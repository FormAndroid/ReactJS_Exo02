import {nanoid} from 'nanoid';

import './App.css';
import StudentTable from './components/student-table/student-table';

function App() {

  const students = [
    {id: nanoid(), firstname: 'Della',     lastname: 'Duck',   option: 'Science',      sexe:'F', result: 76},
    {id: nanoid(), firstname: 'Riri',      lastname: 'Duck',   option: 'Informatique', sexe:'M', result: 49},
    {id: nanoid(), firstname: 'Donald',    lastname: 'Duck',   option: 'Lettre',       sexe:'X', result: 5},
    {id: nanoid(), firstname: 'Balthazar', lastname: 'Picsou', option: 'Economie',     sexe:'M', result: null},
    {id: nanoid(), firstname: 'Zaza', lastname: 'Vanderquack', option: 'Informatique', sexe:'F', result: 96}
  ];

  return (
    <div className="App">
      <h1>Liste d'étudiant</h1>
      <StudentTable students={students} />
    </div>
  );
}

export default App;
