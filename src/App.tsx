import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NoMatch from "./containers/NoMatch";
import HomePage from "./containers/HomePage";

/** @type {{root: React.CSSProperties}} */
const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "white",
    height: "100%"
  }
};
interface Props {}
interface State {}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <main style={{ height: "100%", position: "relative" }}>
          <div style={styles.root}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                width: "100%"
              }}
            >
              {/*<Header bgColor={this.state.bgColor} />*/}
              <Switch>
                <Route exact path="/" component={HomePage} />
                {/*<Route path="/lists/:id" component={Lists} />*/}
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
