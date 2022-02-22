import PropTypes from 'prop-types'

const Header = ({title,appname}) => {
  return (
    <header>
        {/* <h1>Hello {title}, Welcome to {appname}</h1>  */}
        {/* <h1 style={{color:'red', backgroundColor:'yellow'}}>Welcome to {appname}</h1> */}
        <h1 style={headingStyle}>Welcome to {appname}</h1>

    </header>
  )
}
// Sets defalt value
Header.defaultProps = {
    title: 2,
    appname: 'Task Tracker'
}
const headingStyle = {
    color:'red',
    backgroundColor:'yellow'
}
Header.propTypes = {
    title: PropTypes.number,
    appname: PropTypes.string
}
export default Header