import Proptypes from 'prop-types';
import StudentColumnGrade from './student-column-grade';

import style from './student-table.module.css';

const StudentTableItem = (props) => {
    const {firstname, lastname, option, sexe, result} = props;

    const resultColor = (result >= 50) ? style.resultSuccess : '';
    const hoverColor = (result === null) ? style.noResult : (result >= 50) ? style.success : style.bad;

    return (
        <tr className={hoverColor}>
            <td>{firstname} {lastname}</td>
            <td>{sexe}</td>
            <td>{option}</td>
            {(result && !isNaN(result)) ? (<>
                <td className={resultColor}>{result}</td>
                <StudentColumnGrade result={result}/>
            </>) : (
                <td colSpan="2" className={style.resultNA}>Pas de résultat</td>
            )}
        </tr>
    );
}

StudentTableItem.propTypes = {
    firstname: Proptypes.string.isRequired,
    lastname: Proptypes.string.isRequired,
    option: Proptypes.string.isRequired,
    sexe: Proptypes.string.isRequired,
    result: Proptypes.number
}

StudentTableItem.defaultProps = {
    result: null
}

export default StudentTableItem;