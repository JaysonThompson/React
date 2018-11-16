import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    // Prevents the form from automatically submitting
    e.preventDefault();
    // Create fish object from form inputs
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };
    // Add newly created fish to current state
    this.props.addFish(fish);
    // Resets the form after submitting
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input
          type="text"
          ref={this.nameRef}
          placeholder="Fish Name"
          name="name"
        />
        <input
          type="text"
          ref={this.priceRef}
          placeholder="Fish Price"
          name="price"
        />
        <select ref={this.statusRef} name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={this.descRef} placeholder="Desc" name="desc" />
        <input
          type="text"
          ref={this.imageRef}
          placeholder="Fish Image"
          name="image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
