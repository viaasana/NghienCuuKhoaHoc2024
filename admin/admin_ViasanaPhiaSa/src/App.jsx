import MyHeader from './cpmponents/header/MyHeader'
import MyFooter from './cpmponents/footer/MyFooter'
import AdminContainer from './cpmponents/adminContainer/adminContainer'
import Notification from './cpmponents/notification/Notification'

function App() {


  return (
    <>
      <MyHeader />
      <div className="container">
        <AdminContainer />
      </div>
      <MyFooter />
      <Notification />
    </>
  )
}

export default App
