import chai from "chai";
import store from "../store";
import { showMessage } from "../actions/homePage";

chai.should();

describe("react typescript starter kit app store", () => {
  // add board
  describe("store.dispatch(showMessage('New Message'))", () => {
    it("should change the message to 'New Message'", () => {
      store.dispatch(showMessage("New Message"));
      const headingTitle = store.getState().reactTypescriptStarterKit
        .headingTitle;
      headingTitle.should.have.property("text");
      headingTitle.text.should.be.equal("New Message");
    });
  });
});
