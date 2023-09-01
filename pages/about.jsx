import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="dark:bg-gray-900 bg-zinc-100 h-screen overflow-y-auto">
      <Header />
      <div className="max-w-7xl mx-auto space-y-10 pt-20 pb-10 px-20">
        <h1 className="text-2xl font-medium text-amber-600">About</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem excepturi, porro consequatur recusandae, culpa numquam
          ad esse molestias maiores modi tempore nisi, eos explicabo cumque
          mollitia saepe aliquam architecto deleniti necessitatibus! Corrupti
          ut, accusantium eaque optio consequatur amet odio dignissimos.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque error
          aliquid esse sit itaque vitae, enim nisi sunt, distinctio sed,
          blanditiis modi! Exercitationem, delectus laudantium! Non facere
          tempore praesentium minima placeat suscipit nemo dolorum fuga nesciunt
          fugiat ullam quibusdam ratione doloremque voluptas libero, quos
          excepturi ducimus consequatur temporibus! Ut hic nam deleniti facere
          nobis eligendi laboriosam porro eveniet rerum dolore.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          dolore suscipit consequuntur qui nihil earum labore! Consequuntur quis
          eveniet, sit ratione perferendis sapiente ipsa id labore laboriosam
          porro. Adipisci eos quidem maiores iure eum obcaecati quam autem nobis
          deserunt enim illum, distinctio, omnis totam assumenda accusamus
          laudantium harum mollitia consequuntur voluptatem architecto voluptas
          deleniti perspiciatis in animi? Itaque, at impedit? Dolores recusandae
          consequuntur commodi cupiditate incidunt rerum fuga deserunt
          exercitationem, ad nihil id quod dolore iure dolor sunt, unde itaque?
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
