import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Elite Trainers | Hire Certified Personal Trainers",
  description = "Find certified personal trainers in your city with Elite Trainers. Book sessions and start your fitness journey today.",
  keywords = "personal trainers, fitness, hire trainers, gym, certified trainer, fitness coach",
  image = "/cover.jpg",
  url = "https://yourdomain.com",
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;










