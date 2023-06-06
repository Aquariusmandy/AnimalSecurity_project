import React from 'react';
import { Helmet } from 'react-helmet';

const Head = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>流浪動物網站</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="description" content="This is meta description" />
        <meta name="author" content="Themefisher" />

        <link rel="preload" href="https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFWJ0bbck.woff2" style="font-display: optional;" />
        <link rel="stylesheet" href="../plugins/bootstrap/bootstrap.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:600%7cOpen&#43;Sans&amp;display=swap" media="screen" />

        <link rel="stylesheet" href="../plugins/themify-icons/themify-icons.css" />
        <link rel="stylesheet" href="../plugins/slick/slick.css" />
      </Helmet>
    </div>
  );
};

export default Head;
