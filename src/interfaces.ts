//type alias example
export type Address = {
  street: string;
  city: string;
  postalCode: number;
};

//type alias with optional properties
export type SortFilterTypes = {
  sort?: string;
  filter?: string;
};

//interface example
interface Meta {
  page: number;
  limit: number;
  total: number;
}

//using interface for a user schema
export interface User {
  id: string;
  last_name: string;
  first_name: string;
  email_address: string;
  is_verified: boolean;
  address?: Address;
}

//interface with function types
export interface Props {
  data: User[];
  toggleNavigation: () => void;
  onEdit: (id: string) => void;
}

//union type
export type UserType = "admin" | "user";
//intersection type
export type UserPayload = User & SortFilterTypes;

//interface with optional properties
export interface EditPayload {
  id: string;
  last_name?: string;
  first_name?: string;
  email_address?: string;
  is_verified?: boolean;
}

//interface combining user schema and meta
export interface UserResponse {
  data: User;
  meta: Meta;
}
//interface extends user schema equivalent to intersection type
export interface UserPermissions extends User {
  is_admin: boolean;
}
