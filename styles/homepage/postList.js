import css from "styled-jsx/css";

export const postListStyles = css.global`
  .blog-main {
    max-width: 700px;
    margin: auto;
  }

  .blog-post {
    margin-bottom: 3rem;
  }

  .blog-post h2 {
    margin: 0;
    font-weight: bold;
  }

  .blog-post h2:hover {
    color: #FF0000;
    text-decoration: underline;
  }

  .blog-post-meta {
    color: #9a9a9a;
    font-family: helvetica;
    margin-bottom: 8px;
  }

  @media (max-width: 767px) {
    .blog-post-meta,
    .blog-post-meta {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 768px) {
    .blog-post-meta {
      font-size: 16px;
    }
  }
`;
