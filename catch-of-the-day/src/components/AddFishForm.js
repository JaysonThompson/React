import React from "react";

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: this.priceRef.current.value,
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value
    };
    console.log(fish);
  };

  render() {
    return (
      <form action="" className="fish-edit" onSubmit={this.createFish}>
        <input
          ref={this.nameRef}
          name="name"
          placeholder="Fish Name"
          type="text"
        />
        <input
          ref={this.priceRef}
          name="price"
          placeholder="Fish Price"
          type="text"
        />
        <select ref={this.statusRef} name="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea ref={this.descRef} name="desc" placeholder="Desc" />
        <input
          ref={this.imageRef}
          name="image"
          placeholder="Image"
          type="text"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
