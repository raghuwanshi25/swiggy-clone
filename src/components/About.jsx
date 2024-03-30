import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      personInfo: {
        id: 6,
        title: "Hello",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await data.json();
    this.setState({
      personInfo: json,
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.personInfo.id}</h2>
        <h3>{this.state.personInfo.title}</h3>
        <UserContext.Consumer>
          {({user})=><h3>{user}</h3>}
        </UserContext.Consumer>
        <UserContext.Consumer>
          {({user})=><h3>{user}</h3>}
        </UserContext.Consumer>

      </div>
    );
  }
}
export default About;
