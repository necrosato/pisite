apache listens on port 80 and uses a reverseproxy to do the following:

route / requests to www.naookiesato.com to 10.0.0.45:8080/
route / requests to www.necrosato.com to 10.0.0.45:8090/
route / requests to secret.necrosato.com to 10.0.0.45:9000/
route / requests to www.cistutoring.com to 10.0.0.45:10000/

port listening in the applications are done through node.js
