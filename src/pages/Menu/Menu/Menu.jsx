import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* Main Cover */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* Offered Menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Dessert Menu items */}
      <MenuCategory items={desserts} img={dessertImg} title="desserts"></MenuCategory>
      {/* Pizza Menu items */}
      <MenuCategory items={pizzas} img={pizzaImg} title="pizza"></MenuCategory>
      {/* Salad Menu items */}
      <MenuCategory items={salads} img={saladImg} title="salads"></MenuCategory>
      {/* Salad Menu items */}
      <MenuCategory items={soups} img={soupImg} title="soups"></MenuCategory>
    </div>
  );
};

export default Menu;
