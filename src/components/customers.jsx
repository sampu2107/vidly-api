import React from "react";
//import jwtDecode from "jwt-decode";

const Customers = () => {
  return <h1>Customers</h1>;
};

export default Customers;

/*class Customers extends Component {
  state = {
    name: "",
  };

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const { name } = jwtDecode(jwt);
      this.setState({ name: name });
      console.log(name);
    } catch (ex) {}
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default Customers; */
