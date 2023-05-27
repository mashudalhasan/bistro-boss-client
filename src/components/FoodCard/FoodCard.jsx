const FoodCard = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="card w-96 bg-base-200 shadow-md rounded-none">
      <figure>
        <img src={image} alt="Food" />
      </figure>
      <p className="absolute text-center bg-slate-900 text-white right-0 mr-4 mt-4 px-4 py-2">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title justify-center">{name}</h2>
        <p className="text-gray-500">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="px-3 py-2 rounded-lg border-0 border-b-4 mt-5 bg-base-300 hover:bg-black border-b-yellow-600 text-yellow-600 uppercase font-medium text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
