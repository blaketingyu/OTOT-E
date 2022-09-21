import { useForm } from "react-hook-form";

import { ContactSchema } from "../types/contacts.models";
import { axiosObj } from "../utils/axios.utils";

function Form() {
  const { register, handleSubmit, reset } = useForm<ContactSchema>();
  const onSubmit = (data: ContactSchema) => {
    axiosObj
      .post("/api/contacts", data)
      .then(() => reset())
      .catch(() => {
        console.log("error when adding new contact", data);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="name"
        placeholder="name"
        {...register("name", {
          required: true,
          minLength: {
            message: "name should be at least 1 character",
            value: 1,
          },
        })}
      />

      <input
        type="email"
        id="email"
        placeholder="email"
        {...register("email", {
          required: false,
          minLength: {
            message: "email should be at least 1 character",
            value: 1,
          },
        })}
      />

      <input
        type="text"
        id="gender"
        placeholder="gender"
        {...register("gender", {
          minLength: { message: "Min length is 1", value: 1 },
        })}
      />

      <input
        type="tel"
        id="phone"
        placeholder="phone number"
        {...register("phone", {
          minLength: {
            message: "Phone should be at least 1 character",
            value: 1,
          },
        })}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        <input type="submit" value={"Add"} />
      </button>
    </form>
  );
}

export default Form;
