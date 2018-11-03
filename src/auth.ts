import Oidc from 'oidc-client'

export default async function(): Promise<Oidc.User> {
  const settings: Oidc.OidcClientSettings = {
    authority: 'https://connect.ch.tudelft.nl',
    client_id: 'a2427f8d-dba1-463a-943e-6df6bec8129d',
    redirect_uri:
      process.env.NODE_ENV === 'production'
        ? 'https://www.praseodym.net/mand/'
        : 'http://192.168.1.37:8080',
    scope: 'ldap profile openid',
    response_type: 'id_token token',
    loadUserInfo: false,
  }
  const mgr = new Oidc.UserManager(settings)

  if (window.location.hash.includes('access_token')) {
    try {
      const resp = await mgr.signinRedirectCallback()
      history.replaceState('', document.title, window.location.pathname + window.location.search)
      return resp
    } catch (err) {
      console.error(err)
    }
  }
  return mgr.signinRedirect()
}
