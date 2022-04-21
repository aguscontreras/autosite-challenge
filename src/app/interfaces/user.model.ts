export interface User {
  id?: number;
  name?: string;
  username?: string;
  age?: number;
  email?: string;
  address?: Address;
  phone?: string;
}

export interface Address {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
}
