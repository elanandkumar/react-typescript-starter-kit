import { connect } from "react-redux";
import { IState } from "../reducers";
import { getHeadingTitle } from "../selectors/homePage";
import Home from "../components/home";
import { showMessage } from "../actions/homePage";

const mapStateToProps = (state: IState) => ({
  headingTitle: getHeadingTitle(state)
});

const mapDispatchToProps = {
  changeMessage: showMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
