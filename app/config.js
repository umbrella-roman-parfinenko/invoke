/**
 * Created by iliayurin on 24.10.16.
 */
'use strict';
/* Application variables depending on the environment will be set there. */
angular.module('myAppConfig', [])

    .constant("API_SETTINGS", {
        CLIENT_ID: "375831358157-l25155a97su9u08sqhnml3bepdn9m3re.apps.googleusercontent.com",
        CLIENT_SECRET: " pBWyafeuLq-pMF4rEE4vc6ei",
        API_KEY: "AIzaSyBiBR0lB61wf7oCaImp-5P9hhJgp9H1dV8",
        BASE: 'http://localhost:3000/',
        SCOPES: 'https://www.googleapis.com/auth/gmail.readonly'
    })
;