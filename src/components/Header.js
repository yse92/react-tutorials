import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    const onClick = () =>{
        console.log('Click')
    }
    return (
        <header>
            <h1>{title}</h1>
            <Button color='green' text='Hello' onClick={onClick}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}


Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//CSS in JS
// const headingStyle ={
//     color: 'white',
//     backgroundColor: 'blue'
// }
export default Header
