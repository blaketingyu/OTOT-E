import { useForm } from "react-hook-form";

import { ContactSchema } from "../types/contacts.models";
import { axiosObj } from "../utils/axios.utils";

function Form() {
  const { register, handleSubmit, reset } = useForm<
    ContactSchema & { _id: string }
  >();
  const onSubmit = (data: ContactSchema & { _id: string }) => {
    axiosObj
      .delete(`/api/contacts/${data._id}`)
      .then((value) => {
        reset();
        console.log(value);
      })
      .catch(() => `unable to delete ${data._id}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        id="ID"
        placeholder="id"
        {...register("_id", {
          required: true,
          minLength: { message: "id should be at least 1 character", value: 1 },
        })}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        <input type="submit" value={"Delete"} />
      </button>
    </form>
  );
}

export default Form;
