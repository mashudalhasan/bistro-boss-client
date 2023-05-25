const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;

  return (
    <div className="flex space-x-4">
      <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[80px]" src={image} alt="" />
      <div>
        <h3>{name} <span className="text-gray-500">--------------------</span></h3>
        <p className="text-gray-500">{recipe}</p>
      </div>
      <p className="text-yellow-500">{price}</p>
    </div>
  );
};

export default MenuItem;
