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
query ($first: Int, $login: String!) {
  user(login: $login) {
    login
    name
    email
    websiteUrl
    avatarUrl
    bio
    location
    pinnedRepositories(first: 10) {
      nodes {
        name
        description
        forkCount
        stargazers {
          totalCount
        }
        languages(first: 1) {
          nodes {
            color
            name
          }
        }
      }
    }
    starredRepositories(first: $first) {
      nodes {
        name
      }
    }
  }
}

`;

const getFollowersQuery = gql`
  query($first: Int, $login: String!) {
    user(login: $login) {
      followers(first: $first) {
        nodes {
          name
          login
          email
          avatarUrl
          bio
          company
          location
        }
      }
    }
  }
`;

const getFollowingQuery = gql`
  query($first: Int, $login: String!) {
    user(login: $login) {
      following(first: $first) {
        nodes {
          name
          login
          email
          avatarUrl
          bio
          company
          location
        }
      }
    }
  }
`;

const getStarredRepoQuery = gql`
  query($first: Int, $login: String!) {
    user(login: $login) {
      starredRepositories(first: $first) {
        nodes {
          name
          description
          forkCount
          stargazers {
            totalCount
          }
          languages(first: 1) {
            nodes {
              color
              name
            }
          }
        }
      }
    }
  }
`;

export {
  getUserRepository,
  getLoggedUser,
  getFollowersQuery,
  getFollowingQuery,
  getStarredRepoQuery
};
