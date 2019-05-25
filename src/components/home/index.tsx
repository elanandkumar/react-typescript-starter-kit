import React from "react";
import { WithStyles } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { IShowMessage } from "../../actions/homePage";

interface IProps extends WithStyles<typeof styles> {
  headingTitle: {
    text: string;
  };
  changeMessage: IShowMessage;
  classes: {
    headingText: string;
  };
}

interface IState {}

class Home extends React.PureComponent<IProps, IState> {
  componentDidMount() {
    setTimeout(() => {
      this.props.changeMessage("Say hello to react with typescript!");
    }, 1000);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.headingText}>
        <h2>{this.props.headingTitle.text}</h2>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
