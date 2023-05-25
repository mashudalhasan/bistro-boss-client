import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <div className="brightness-100">
        <SectionTitle
          heading={"From Our Menu"}
          subHeading={"Check it out"}
        ></SectionTitle>
      </div>
      <div className="md:flex justify-center items-center pb-20 pt-12 px-36 brightness-100">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>May 24, 2023</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            nesciunt incidunt vitae ut alias blanditiis, illum quibusdam officia
            cumque architecto vero quod non numquam, vel aliquid maiores earum
            quos a, autem eveniet voluptates est distinctio recusandae deserunt?
            Voluptatibus ea a molestiae veniam reprehenderit corporis ipsam
            facere excepturi atque iure. Deleniti.
          </p>
          <button className="px-3 py-2 rounded-lg border-0 border-b-4 mt-5 hover:bg-white border-b-white hover:text-black">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
