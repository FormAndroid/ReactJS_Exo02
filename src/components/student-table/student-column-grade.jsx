import PropTypes from 'prop-types';

const StudentColumnGrade = ({result}) => {
    // const {result} = props;   -> Ici, on a fait le destructuring dans l'argument
 
    let grade;
    switch (true) {
        case result > 95:
            grade = 'E';
            break;
        case result >= 80:
            grade = 'TB';
            break;
        case result >= 60:
            grade = 'B';
            break;
        case result >= 50:
            grade = 'S';
            break;
        case result >= 40:
            grade = 'I';
            break;
        default:
            grade = 'IG';
            break;
    }

    return (
        <td>{grade}</td>
    );
}

StudentColumnGrade.propTypes = {
    result: PropTypes.number.isRequired
}

export default StudentColumnGrade;