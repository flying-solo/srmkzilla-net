import React, { useEffect, useState } from "react";
import CardProject from "./card_projects";
import sanityClient from "../../shared/client";
import imageUrlBuilder from "@sanity/image-url";

const Service = () => {
  const [serviceCard, setServiceCard] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "services"]{
        title,
        logo{
          asset->{
            _id,
            url
          },
          alt
        },
        description,
        link
    }`
      )
      .then((data) => setServiceCard(data))
      .catch(console.error);
  }, []);

  return (
    <div className="mt-36">
      <h1 className="text-white text-center text-4xl">Services</h1>
      <p className="text-white text-center font-light text-xl mt-3 sm:px-auto px-8">
        Projects that we have done for others
      </p>

      <div className="flex flex-wrap items-center justify-center sm:mt-20 mt-14 pb-10">
        {serviceCard &&
          serviceCard.map(
            (
              card: {
                title: String;
                logo: { asset: { url: String | undefined } };
                description: String;
              },
              index: any
            ) => (
              <CardProject
                name={card.title}
                desc={card.description}
                image={card.logo.asset.url}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Service;