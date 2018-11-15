import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    //1.Stop the form from submitting
    event.preventDefault();
    //2. Get the text from the form
    const storeName = this.myInput.value.value;
    //3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  render() {
    return (
      <React.Fragment>
        <form action="" className="store-selector" onSubmit={this.goToStore}>
          <h2>Please Enter a Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required="required"
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store &rarr;</button>
        </form>
      </React.Fragment>
    );
  }
}

export default StorePicker;
