import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img className="img" src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts </h1>
    <Card
      name="beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123456789"
      email="b@beyonce.com"
    />
    <Card
      name="Hafedh Ben Haj Ali"
      img="https://media.licdn.com/dms/image/C4E03AQEZeO5dKvPeIQ/profile-displayphoto-shrink_800_800/0/1610805705361?e=2147483647&v=beta&t=ntzT9xevXW81lftP2SQf45P-gVBTPXSPuED6zZU9XC4"
      tel="97772722"
      email="b.hafedh@protonmail.com"
    />
    <input type="fName" />
  </div>,
  document.getElementById("root")
);
