import gql from "graphql-tag";

const getUserRepositoryQuery = gql`
  query($login: String!, $first: Int) {
    user(login: $login){
      repositories(first: $first) {
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

const getLoggedUserQuery = gql`
  query($first: Int, $login: String!) {
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
  getUserRepositoryQuery,
  getLoggedUserQuery,
  getFollowersQuery,
  getFollowingQuery,
  getStarredRepoQuery,
};
