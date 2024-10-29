interface User {
  name: string;
  age: number;
  email: string;
  address: {
    street: string;
    city: string;
  };
  tags: string[];
 }

 type MakeNullable<T> = {
  [K in keyof T]?: MakeNullable<T[K]> | null;
}

 type NullableUser = MakeNullable<(User)>;

 const nullableUser: NullableUser = {
  name: 'alice',
  age: null,
  address: {
    street: null,
    city: 'wonderland',
  },
  tags: [null, 'cap']
  // null values in age, address.street and tags[0]
  // email is not given
 }
