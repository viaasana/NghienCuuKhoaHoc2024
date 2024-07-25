import MyHeader from './cpmponents/header/MyHeader'
import MyFooter from './cpmponents/footer/MyFooter'
import AdminContainer from './cpmponents/adminContainer/adminContainer'

function App() {


  return (
    <>
      <MyHeader />
      <div className="container">
        <AdminContainer />
      </div>
      <MyFooter />
    </>
  )
}

export default App
