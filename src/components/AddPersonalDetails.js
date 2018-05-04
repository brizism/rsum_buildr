import React, { Component } from 'react';

class AddPersonalDetails extends Component {
  state = {
    file: '',
    imgPreviewURL: ''
  }

  imageRef = React.createRef();
  nameRef = React.createRef();
  lastNameRef = React.createRef();
  titleRef = React.createRef();
  phoneNumberRef = React.createRef();
  emailRef = React.createRef();
  websiteRef = React.createRef();
  cityRef = React.createRef();
  stateRef = React.createRef();

  createProfile = e => {
    e.preventDefault();
    const personalDetails = {
      avatar: this.imageRef.current.value,
      name: this.nameRef.current.value,
      lastName: this.lastNameRef.current.value,
      title: this.titleRef.current.value,
      phoneNumber: this.phoneNumberRef.current.value,
      email: this.emailRef.current.value,
      website: this.websiteRef.current.value,
      city: this.cityRef.current.value,
      state: this.stateRef.current.value,
    }

    console.log(personalDetails)
    console.log(this.imageRef);

    e.currentTarget.reset();
  }

  previewImg = e => {
    e.preventDefault();
    console.log(this.imageRef.current.files[0]);

    let reader = new FileReader();
    let file = this.imageRef.current.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        imgPreviewURL: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    let { imgPreviewURL } = this.state;
    let imgPreview = null;
    imgPreviewURL ? imgPreview = (<img  src={imgPreviewURL} />) : null;
    return (
      <form inverted onSubmit={this.createProfile}>
        <input name="avatar" ref={this.imageRef} type="file" accept="image/*" onChange={this.previewImg} />
        <div>{imgPreview}</div>
        <input name="name" ref={this.nameRef} type="text" placeholder="First Name"/>
        <input name="lastName" ref={this.lastNameRef} type="text" placeholder="Last Name"/>
        <input name="title" ref={this.titleRef} type="text" placeholder="Job Position Title"/>
        <label htmlFor="">Contact Details</label>
        <input name="phoneNumber" ref={this.phoneNumberRef} type="text" placeholder="Phone Number"/>
        <input name="email" ref={this.emailRef} type="text" placeholder="Email Address"/>
        <input name="website" ref={this.websiteRef} type="text" placeholder="Personal Website (Optional)"/>
        <label htmlFor="">Location</label>
        <input name="city" ref={this.cityRef} type="text" placeholder="City"/>
        <input name="state" ref={this.stateRef} type="text" placeholder="State or Country"/>
        <button type="submit">Add Personal Details</button>
      </form>   
    );
  }
}

export default AddPersonalDetails;
