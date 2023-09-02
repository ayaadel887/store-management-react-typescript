export interface IEmployee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
const dumyemployeeList: IEmployee[] = [
  {
    id: new Date().toJSON().toString(),
    firstName: "string",
    lastName: "string",
    email: "string",
  },
];
