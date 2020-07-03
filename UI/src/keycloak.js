import Keycloak from 'keycloak-js';

let key = {
  "realm": "IAC_realm",
  "auth-server-url": "http://localhost:8082/auth/",
  "ssl-required": "external",
  "url":"http://localhost:8082/auth/",
  "resource": "IAC_UI_Client",
  "public-client": true,
  "confidential-port": 0,
  "onLoad": 'login-required'
}

const keycloak = new Keycloak(key);

export default keycloak;