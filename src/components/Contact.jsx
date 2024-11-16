import { useState } from "react";
import emailjs from "emailjs-com";
import {toast} from "react-hot-toast"

function SignUp() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_tom3kah", // Replace with your EmailJS service ID
        "contact_form", // Replace with your EmailJS template ID
        user,
        "sdx5rEpUhhLiyv3Am" // Replace with your EmailJS user ID
      )
      .then(() => {
        toast.success("Email sent successfully!");
        setUser({
          name: "",
          email: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email.");
      });
  };

  return (
    <div className="flex items-center justify-center py-32">
      <div className="bg-slate-500 h-[400px] w-[270px] sm:h-[400px] sm:w-[700px] flex flex-col items-center gap-5 sm:gap-7 py-7 sm:py-10 rounded-lg shadow-md shadow-white">
        <div>
          <input
            type="text"
            value={user.name}
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="w-60 px-3 py-1 sm:w-[500px] sm:px-4 sm:py-2 focus:outline outline-1 sm:outline-2 placeholder:text-md sm:placeholder:text-lg text-black"
          />
        </div>
        <div>
          <input
            type="text"
            value={user.email}
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-60 px-3 py-1 sm:w-[500px] sm:px-4 sm:py-2 focus:outline outline-1 sm:outline-2 placeholder:text-md sm:placeholder:text-lg text-black"
          />
        </div>
        <div>
          <textarea
            name="message"
            value={user.message}
            onChange={handleChange}
            placeholder="Message..."
            className="w-60 h-40 px-3 py-1 sm:w-[500px] sm:h-32 sm:px-4 sm:py-2 focus:outline outline-1 sm:outline-2 placeholder:text-md sm:placeholder:text-lg text-black"></textarea>
        </div>
        <button className="bg-black text-white w-40 py-1 sm:w-60 sm:py-2 rounded-lg text-md font-bold" onClick={handleSubmit}>
          Send
        </button>
      </div>
    </div>
  );
}

export default SignUp;
