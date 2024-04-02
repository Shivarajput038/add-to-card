import React from "react";
import Itemcard from "../card/itemcard";
import { data } from "../data";
const Home = () => {
  return (
    <>
      <div className="text-center mt-3 fs-3">All item</div>
      <section className="py-4 container ">
        <div className="row justify-content-center d-flex flex-wrap gap-5 w-100">
          {data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
