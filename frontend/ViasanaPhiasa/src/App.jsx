import MyHeader from './cpmponents/header/MyHeader'
import MyFooter from './cpmponents/footer/MyFooter'
import HomePage from './cpmponents/homePage/homePage'

function App() {

  return (
    <>
      <MyHeader />
      <div className='container'>
        <HomePage />
      </div>
      <MyFooter />
    </>
  )
}

export default App
