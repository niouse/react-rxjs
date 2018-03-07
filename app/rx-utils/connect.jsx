import React from "react";

function connect(state$, selector = (state) => state, actionSubjects) {
  
    const actions = Object.keys(actionSubjects)
    .reduce((akk, key) => ({ ...akk, [key.slice(0,-1)]: payload => {/*console.log(payload);*/ actionSubjects[key].next(payload)} }), {});
  
  return function wrapWithConnect(WrappedComponent) {
    return class Connect extends React.Component {
      constructor(props) {
        super(props);
        state$.take(1).map(selector).subscribe(state => this.state = state);
      }

      componentDidMount() {
        this.subscription = state$.map(selector).distinctUntilChanged().subscribe(state => this.setState(state, ()=>(actions.actionDone(state))));
      }

      componentWillUnmount() {
        this.subscription.unsubscribe();
      }

      render() {
        return (
          <WrappedComponent {...this.state} {...this.props} {...actions}/>
        );
      }
    };
  }
}

export default connect;