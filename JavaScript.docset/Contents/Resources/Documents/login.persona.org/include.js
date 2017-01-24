/**
 * Uncompressed source can be found at https://login.persona.org/include.orig.js
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function(){var a;navigator.mozId?navigator.id=navigator.mozId:function(){var a;navigator.id||(navigator.id={});if(!navigator.id.request||navigator.id._shimmed){var b="https://login.persona.org",c=navigator.userAgent,d=c.indexOf("Fennec/")!=-1||c.indexOf("Firefox/")!=-1&&c.indexOf("Android")!=-1,e=d?a:"menubar=0,location=1,resizable=1,scrollbars=1,status=0,width=700,height=375",f="__persona_dialog",g;function h(){g=window.open(b+"/sign_in",f,e)}navigator.id={request:function(){return h()},watch:function(a){},logout:function(a){},get:function(a,b){h()},getVerifiedEmail:function(a){h()},_shimmed:!0}}}()})()