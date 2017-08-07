// @flow

import React, { Component } from 'react'
import Spinner from './Spinner'

class AsyncRoute extends Component {
  state = {
    loaded: false
  };
  
  componentDidMount(){
    // module is from webpack
    this.props.loadingPromise.then(module => {
      this.component = module.default;
      this.setState({ loaded: true })
    })
  }

  props: {
    props: mixed,
    loadingPromise: Promise<{ default: Class<React.Component<*, *, *>>}>    
  };

  // if the component lives on the class, react won't check to force a rerender
  component = null;

  render(){
    if(this.state.loaded){
      return <this.component {...this.props.props} />
    }

    return <Spinner />
  }

}

export default AsyncRoute
