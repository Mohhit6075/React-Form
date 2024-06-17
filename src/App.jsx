import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: "",
  });

  const changeHandler = (event) => {
    setFormData((prev) => {
      const { name, value, checked, type } = event.target;

      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert("Your form has been submitted");
    console.log(formData);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      street: "",
      city: "",
      state: "",
      postalCode: "",
      comments: false,
      candidates: false,
      offers: false,
      pushNotifications: "",
    });
  };
  return (
    <>
      <div className="w-full md:max-w-[50%] mx-auto shadow p-8">
        <form className="space-y-2" onSubmit={submitHandler}>
          <label
            htmlFor="firstName"
            className="text-gray-900 leading-6 text-sm font-medium"
          >
            First Name <br />
          </label>
          <input
            type="text"
            onChange={changeHandler}
            name="firstName"
            value={formData.firstName}
            id="firstName"
            placeholder="Mohhit"
            className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2"
          />
          <br />

          <label
            htmlFor="lastName"
            className="text-gray-900 leading-6 text-sm font-medium"
          >
            Last Name <br />
          </label>
          <input
            type="text"
            onChange={changeHandler}
            name="lastName"
            id="lastName"
            value={formData.lastName}
            placeholder="Singh"
            className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2"
          />
          <br />

          <label className="text-gray-900 leading-6 text-sm font-medium">
            Email <br />
            <input
              type="text"
              onChange={changeHandler}
              name="email"
              id="email"
              value={formData.email}
              placeholder="Mohitsingh6266@gmail.com"
              className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2"
            />
          </label>
          <br />

          <label className="text-gray-900 leading-6 text-sm font-medium">
            Country <br />
            <select
              name="country"
              id="country"
              onChange={changeHandler}
              value={formData.country}
              className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2"
            >
              <option className="font-semibold">Select Country</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="belgium">Belgium</option>
              <option value="france">France</option>
              <option value="singapore">Singapore</option>
            </select>
          </label>
          <br />

          <label className="text-gray-900 leading-6 text-sm font-medium">
            Street Address <br />
            <input
              type="text"
              onChange={changeHandler}
              name="street"
              id="street"
              value={formData.street}
              placeholder="Street No.4"
              className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2"
            />
          </label>
          <br />

          <label className="text-gray-900 leading-6 text-sm font-medium">
            City <br />
            <input
              type="text"
              onChange={changeHandler}
              name="city"
              id="city"
              value={formData.city}
              placeholder="Gwalior"
              className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2"
            />
          </label>
          <br />

          <label className="text-gray-900 leading-6 text-sm font-medium">
            State / Province <br />
            <input
              type="text"
              onChange={changeHandler}
              name="state"
              id="state"
              value={formData.state}
              placeholder="Madhya Pradesh"
              className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2"
            />
          </label>
          <br />

          <label className="text-gray-900 leading-6 text-sm font-medium">
            ZIP / Postal Code <br />
            <input
              type="text"
              onChange={changeHandler}
              name="postalCode"
              id="postalCode"
              value={formData.postalCode}
              placeholder="474006"
              className="w-full border mt-2 rounded-md  p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400 placeholder:font-normal focus:outline-none focus:ring-2"
            />
          </label>
          <br />

          <fieldset className="mb-10">
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              By Email <br />
            </legend>
            <div className="mt-4 space-y-2">
              <div className="flex">
                <input
                  type="checkbox"
                  name="comments"
                  id="comments"
                  checked={formData.comments}
                  onChange={changeHandler}
                  className="h-4 w-4 mt-1 rounded"
                />
                <div className="flex flex-col ml-3">
                  <label
                    htmlFor="comments"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Comments
                  </label>
                  <p className="text-gray-500">
                    Get notified when someones posts a comment on a posting.
                  </p>
                </div>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  name="candidates"
                  id="candidates"
                  checked={formData.candidates}
                  onChange={changeHandler}
                  className="h-4 w-4 mt-1 rounded"
                />
                <div className="flex flex-col ml-3">
                  <label
                    htmlFor="candidates"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Candidates
                  </label>
                  <p className="text-gray-500">
                    Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>
              <div className="flex">
                <input
                  type="checkbox"
                  name="offers"
                  id="offers"
                  checked={formData.offers}
                  onChange={changeHandler}
                  className="h-4 w-4 mt-1 rounded"
                />
                <div className="flex flex-col ml-3">
                  <label
                    htmlFor="offers"
                    className="text-gray-900 leading-6 text-sm font-medium"
                  >
                    Offers
                  </label>
                  <p className="text-gray-500">
                    Get notified when a candidate accepts or rejects an offer.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="mt-20">
            <legend className="text-sm font-semibold leading-6 text-gray-900 mt-20">
              Push Notification
            </legend>
            <p className="text-gray-500">
              These are delivered via SMS to your mobile phone.
            </p>

            <div className="mt-4 space-y-2">
              <div className="flex gap-x-4">
                <input
                  type="radio"
                  name="pushNotifications"
                  id="pushEverything"
                  value="Everything"
                  onChange={changeHandler}
                />
                <label
                  htmlFor="pushEverything"
                  className="text-gray-900 leading-6 text-sm font-medium"
                >
                  Everything
                </label>
              </div>
              <div className="flex gap-x-4">
                <input
                  type="radio"
                  name="pushNotifications"
                  id="pushEmail"
                  value="Same as email"
                  onChange={changeHandler}
                />
                <label
                  htmlFor="pushEmail"
                  className="text-gray-900 leading-6 text-sm font-medium"
                >
                  Same as email
                </label>
              </div>
              <div className="flex gap-x-4">
                <input
                  type="radio"
                  name="pushNotifications"
                  id="pushNothing"
                  value="No push notification"
                  onChange={changeHandler}
                />
                <label
                  htmlFor="pushNothing"
                  className="text-gray-900 leading-6 text-sm font-medium"
                >
                  No push notification
                </label>
              </div>
            </div>
          </fieldset>

          <button
            type="submit"
            className="bg-[#fc5011] hover:scale-95 hover:bg-blue-500 transition-all duration-200 text-white font-bold py-2 px-6 rounded mt-20 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
