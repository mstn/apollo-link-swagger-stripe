import React from 'react';

import '../node_modules/graphiql/graphiql.css'
import GraphiQL from 'graphiql';

import { execute } from 'apollo-link';
import { SwaggerLink } from 'apollo-link-swagger';
import { parse } from 'graphql';

// original https://github.com/stripe/openapi/raw/master/openapi/spec2.json
const schemaUrl = '/spec2.json';

class App extends React.Component {
  state = {
    loading: true,
    link: undefined
  }
  componentDidMount = () => {
    fetch(schemaUrl)
      .then( response => response.json() )
      .then( schema => this.setState({
        loading:false,
        link: new SwaggerLink({ schema }),
      }));
  }
  render() {
    return (
      <div className="App">
      { this.state.link &&
        <GraphiQL
          schema={undefined}
          fetcher={operation => execute(this.state.link, {
              ...operation,
              query: parse(operation.query),
          })}
        />}
      </div>
    );
  }
}

export default App;
