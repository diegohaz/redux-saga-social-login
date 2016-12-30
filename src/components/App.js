import React, { PropTypes } from 'react'

const App = ({ user, loginGoogle, loginFacebook, logout }) => {
  return (
    <div>
      <button onClick={loginGoogle}>Connect with Google</button>
      <button onClick={loginFacebook}>Connect with Facebook</button>
      {user &&
        <div>
          <img src={user.picture} width={30} height={30} />
          {user.name}
          <button onClick={logout}>Sign out</button>
        </div>
      }
    </div>
  )
}

App.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }),
  loginGoogle: PropTypes.func.isRequired,
  loginFacebook: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

export default App
