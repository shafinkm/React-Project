import React, { Component } from "react";

class Userlist extends Component {
  state = {
    userdata: [
      {
        id: 1,
        first_name: "Eve",
        last_name: "Holt",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
        address: {
          Line1: "123 Queen Street",
          Line2: "Unit 2341",
          City: "Toronto",
          PostalCode: "M3D1L3"
        }
      },
      {
        id: 2,
        first_name: "Charles",
        last_name: "Morris",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
        address: {
          Line1: "123 Queen Street",
          Line2: "Unit 2341",
          City: "Toronto",
          PostalCode: "M3D1L3"
        }
      },
      {
        id: 3,
        first_name: "Tracey",
        last_name: "Ramos",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",
        address: {
          Line1: "123 Queen Street",
          Line2: "Unit 2341",
          City: "Toronto",
          PostalCode: "M3D1L3"
        }
      },
      {
        id: 4,
        first_name: "Eve",
        last_name: "Holt",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
        address: {
          Line1: "123 Queen Street",
          Line2: "Unit 2341",
          City: "Toronto",
          PostalCode: "M3D1L3"
        }
      },
      {
        id: 5,
        first_name: "Charles",
        last_name: "Morris",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
        address: {
          Line1: "123 Queen Street",
          Line2: "Unit 2341",
          City: "Toronto",
          PostalCode: "M3D1L3"
        }
      },
      {
        id: 6,
        first_name: "Tracey",
        last_name: "Ramos",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",
        address: {
          Line1: "123 Queen Street",
          Line2: "Unit 2341",
          City: "Toronto",
          PostalCode: "M3D1L3"
        }
      }
    ]
  };

  // componentDidMount() {
  //   fetch("http://localhost:5000/api/users/")
  //     .then(results => {
  //       console.log("hi");
  //       return results.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //     });
  // }

  //getMoreUserInfo = () => {};

  render() {
    return (
      <div>
        {this.state.userdata.map(user => (
          <div key={user.id} style={{ float: "left", padding: "30px" }}>
            <img src={user.avatar} height="128" width="128" />
            <div>
              <b>First Name</b> : {user.first_name}
            </div>
            <div>
              <b>Last Name</b> : {user.last_name}
            </div>

            <address>
              {user.address.Line2 +
                ", " +
                user.address.Line1 +
                ", " +
                user.address.City +
                ", " +
                user.address.PostalCode}
            </address>
            <button
              // onClick={getMoreUserInfo}
              className="btn btn-primary btn-small"
            >
              More Info
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default Userlist;
