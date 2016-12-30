import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fromSocial } from 'store/selectors'
import { socialLogin, socialLogout } from 'store/actions'

import { App } from 'components'

const googleClientId = 'GOOGLE_CLIENT_ID.apps.googleusercontent.com'
const facebookAppId = 'FACEBOOK_APP_ID'

class AppContainer extends Component {
  static propTypes = {
    prepareGoogle: PropTypes.func.isRequired,
    prepareFacebook: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.prepareGoogle()
    this.props.prepareFacebook()
  }

  render () {
    return <App {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  user: fromSocial.getUser(state)
})

const mapDispatchToProps = (dispatch) => ({
  prepareGoogle: () => dispatch(socialLogin.prepare('google', { client_id: googleClientId })),
  prepareFacebook: () => dispatch(socialLogin.prepare('facebook', { appId: facebookAppId })),
  loginFacebook: () => dispatch(socialLogin.request('facebook')),
  loginGoogle: () => dispatch(socialLogin.request('google')),
  logout: () => dispatch(socialLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
