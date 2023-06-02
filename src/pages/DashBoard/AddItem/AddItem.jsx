import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <div className="w-full mx-auto my-5">
      <SectionTitle
        subHeading={"What's New"}
        heading={"Add an Item"}
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 120 })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick the best fantasy franchise</span>
          </label>
          <select
            {...register("category", { required: true })}
            className="select select-bordered"
          >
            <option disabled selected>
              Pick one
            </option>
            <option>Pizza</option>
            <option>Soup</option>
            <option>Salad</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            {...register("price", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Put your recipe details here"
            {...register("details", { required: true })}
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Item Image*</span>
          </label>
          <input
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <div>
          <input type="submit" value="Add Item" className="btn btn-sm mt-4" />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
