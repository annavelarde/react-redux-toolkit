import { useState } from "react";
import { useDispatch } from "react-redux";
import { update, reset } from "./redux/user";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const dispatch = useDispatch();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    dispatch(update({ name: name, email: email, country: country }));
    // console.log("👉👉 / handleUpdateProfile / update:", update);
  };
  const handleReset = () => {
    dispatch(reset(setName(""), setCountry(""), setEmail("")));
  };

  return (
    <form>
      <div>
        <p>Name:</p>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Email:</p>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Country:</p>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleUpdateProfile}>
        Submit
      </button>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
};

export default UpdateProfile;
