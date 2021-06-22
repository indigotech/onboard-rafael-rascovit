import { gql } from '@apollo/client';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  birthDate: string;
  role: string;
}

export interface PageInfo {
  offset: number;
  limit: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface UsersQueryDataInterface {
  users: {
    nodes: User[];
    count: number;
    pageInfo: PageInfo;
  };
}

export interface Login {
  login: {
    token: string;
    user: User;
  };
}

export const UsersQuery = gql`
  query Users($offset: Int, $limit: Int) {
    users(pageInfo: { offset: $offset, limit: $limit }) {
      nodes {
        id
        name
        phone
        birthDate
        email
        role
      }
      count
      pageInfo {
        offset
        limit
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const UserQuery = gql`
  query User($id: Int!) {
    user(id: $id) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;

export const LoginMutation = gql`
  mutation Login($email: String!, $password: String!) {
    login(data: { email: $email, password: $password }) {
      token
      user {
        id
        name
        phone
        birthDate
        email
        role
      }
    }
  }
`;

export const CreateUserMutation = gql`
  mutation CreateUser(
    $name: String!
    $email: String!
    $phone: String!
    $birthDate: Date!
    $password: String
    $role: UserRole!
  ) {
    createUser(
      data: { name: $name, email: $email, phone: $phone, birthDate: $birthDate, password: $password, role: $role }
    ) {
      id
      name
      phone
      birthDate
      email
      role
    }
  }
`;
