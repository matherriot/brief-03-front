export interface IRegisterData {
  error?: string;
  jwt:   string;
  user:  User;
}

export interface User {
  id:          string;
  username:    string;
  displayName: string;
  firstName:   string;
  lastName:    string;
}