GraphQL client demo for Stripe API.

* We use official [Swagger 2.0](https://github.com/stripe/openapi/raw/master/openapi/spec2.json) spec of Stripe API with some minor changes. We removed some array fields since [swagger-to-graphql](https://github.com/yarax/swagger-to-graphql) does not process them correctly.
* We build a GraphQL client using [apollo-link-swagger](https://github.com/mstn/apollo-link-swagger).
* The apollo link is used by GraphiQL to introspect the schema and process GraphQL queries.
* Demo runs [here]( http://mstn.github.io/apollo-link-swagger-stripe) (open Network tab to see the actual http request).

We are able to browser "Stripe" GraphQL documentation and queries are formed correctly.
However, the response will be always 401 error since the API key is missing.

You should not share API keys on the client side. There are at least two possible solutions:
* Use [apollo-link-swagger](https://github.com/mstn/apollo-link-swagger) on the server.
* Modify swagger schema to point to a proxy server that forwards requests to Stripe API with auth tokens.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
