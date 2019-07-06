# AngularAspnetDemoApp

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website
We can now start the server in almost exactly the same way as previously, but with the devstart command specified:

On Windows, use this command:
SET DEBUG=<project name here>:* & npm run devstart
On macOS or Linux, use this command:
DEBUG=<project name here>:* npm run devstart


Ref Testing REST APIS with CURL CLI: 

https://www.codepedia.org/ama/how-to-test-a-rest-api-from-command-line-with-curl/

https://www.youtube.com/watch?v=8f9DfgRGOBo

https://curl.haxx.se/
https://reqres.in/
--------------------------------------------------------------------------------------------
GET ONLY RESPONSE
curl url
--------------------------------------------------------------------------------------------
GET RESPONSE AND HEADERS
curl -i url
--------------------------------------------------------------------------------------------
GET ONLY HEADERS
curl --head url
curl -I url
--------------------------------------------------------------------------------------------
GET DETAILS OF CLIENT SERVER INTERACTION
-v verbose
curl -v url
--------------------------------------------------------------------------------------------
GET EVEN MORE DETAILS AND LOG ALL INTERACTION TO FILE
--trace
curl --trace FILE URL
--------------------------------------------------------------------------------------------
SEND HEADERS IN REQUEST
-H
curl -H "Accept:application/json"
--------------------------------------------------------------------------------------------
POST
-d or --data

 "name": "morpheus",
    "job": "leader"

-X POST 
curl -X POST -H "Accept:application/json" https://reqres.in/api/users -d '{"name": "morpheus", "job": "leader"}'


--------------------------------------------------------------------------------------------

PUT
-X PUT

curl -i -X PUT https://reqres.in/api/users/2 -d '{"name": "morpheus", "job": "zion resident"}'

--------------------------------------------------------------------------------------------
DELETE
-X DELTE
curl -i -X DELETE https://reqres.in/api/users/2
--------------------------------------------------------------------------------------------

Responsive SPA template Ref:
https://medium.com/@nima_ap/creating-a-responsive-dashboard-in-angular-5-from-scratch-147f6a493d9e

https://github.com/start-angular/SB-Admin-BS4-Angular-8/blob/master/README.md

JWT and AUTH Ref:

https://www.npmjs.com/package/express-jwt

https://medium.com/javascript-in-plain-english/creating-a-rest-api-with-jwt-authentication-and-role-based-authorization-using-typescript-fbfa3cab22a4

https://codesquery.com/build-secure-nodejs-rest-api-using-json-web-token/

https://codebrains.io/add-jwt-authentication-to-an-express-api-with-passport-and-es6/

https://auth0.com/blog/node-js-and-express-tutorial-building-and-securing-restful-apis/

https://blog.slatepeak.com/refactoring-a-basic-authenticated-api-with-node-express-and-mongo/

https://auth0.com/blog/using-json-web-tokens-as-api-keys/

https://medium.com/swlh/a-practical-guide-for-jwt-authentication-using-nodejs-and-express-d48369e7e6d4

https://jonathanmh.com/express-passport-json-web-token-jwt-authentication-beginners/


Ref strongly typed routes :

https://blog.falcross.com/introducing-restyped-end-to-end-typing-for-rest-apis-with-typescript/

Ref Route Guards:

https://www.youtube.com/watch?v=F1GUjHPpCLA

https://www.youtube.com/watch?v=-17zqLtgy_0

https://www.dunebook.com/how-to-set-up-authentication-and-authorization-in-angular-2/

https://musttoknow.com/use-interceptor-angular-error-handling-angular-authentication-using-http-client-http-interceptor/

https://jasonwatmore.com/post/2018/11/16/angular-7-jwt-authentication-example-tutorial