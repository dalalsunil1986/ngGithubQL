import gql from "graphql-tag";

const getUserRepository = gql`
  query($login: String!, $first: Int) {
    repositoryOwner(login: $login) {
      avatarUrl
      resourcePath
      __typename
      repositories(first: $first) {
        nodes {
          name
          url
          description
          resourcePath
          languages(first: $first) {
            nodes {
              name
              color
            }
          }
          milestones(first: $first) {
            nodes {
              title
            }
          }
          createdAt
        }
      }
    }
  }
`;

const getLoggedUser = gql`
 query($first: Int) {
    viewer {
      login
      email
      websiteUrl
      avatarUrl
      bio
      createdAt
      updatedAt
      starredRepositories(first: $first) {
        nodes {
          name
        }
      }
      followers(first: $first) {
        nodes {
          login
          email
          avatarUrl
        }
      }
      following(first: $first) {
        nodes {
          login
          email
          avatarUrl
        }
      }
    }
  }
`;

export { getUserRepository, getLoggedUser };
