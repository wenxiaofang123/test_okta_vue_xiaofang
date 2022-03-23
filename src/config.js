// const { CLIENT_ID, ISSUER } = process.env

export default {
  oidc: {
    clientId: '0oa4c1kft6fWBpNeD5d7',//CLIENT_ID,
    issuer: 'https://dev-8429879.okta.com/oauth2/default', //ISSUER,
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email']
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages'
  }
}
