import PropTypes from 'prop-types'
//const newMessage = {
  //message: 'Hola Mundo',
  //title: 'Sara'
//};

//const getResult = (a, b) => {
 // return a + b;
//}

export const FirstApp = ({ title, subTitle, name }) => {

  return (
    <>
      <h1 data-testid="test-title">{ title }</h1>
      { /* <code> { JSON.stringify (newMessage) } </code>*/}
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
    </>
  )
}

FirstApp.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
  name: 'Sara Cortés',
  subTitle: 'No hay subtitulo',
  title: 'No hay titulo',
}