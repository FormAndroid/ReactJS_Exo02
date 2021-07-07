import PropTypes from 'prop-types';
import StudentTableItem from './student-table-item';
import style from './student-table.module.css';

const StudentTable = (props) => {

    // Sur base de l'array JS "students".
    // On parcourt chaque element (qu'on nomme "s" dans la fonction fléché) 
    // et qu'on transforme en un element React "StudentTableItem"
    const studentsJSX = props.students.map(
        s => <StudentTableItem key={s.id} {...s} />
    );

    return (
        <table className={style.studentTable}>
            <thead>
                <tr>
                    <th>Nom de l'étudiant</th>
                    <th>Sexe</th>
                    <th>Option suivi</th>
                    <th>Resultat</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {studentsJSX}
            </tbody>
        </table>
    )
}

StudentTable.propTypes = {
    students: PropTypes.array
};

StudentTable.defaultProps = {
    students: []
};

export default StudentTable;