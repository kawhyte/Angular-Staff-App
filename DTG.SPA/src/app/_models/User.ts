import { Contact } from './Contact';
import { Photo } from "./Photo";


export interface User {
  // user main view
  id: number;
  username: string;
  knownAs: string;
  age: number;
  dateOfEmployment: number;
  gender: string;
  created: Date;
  lastActive: Date;
  photoUrl: string;
  city: string;
  country: string;
  // optional detailed view
  email?: string;
  telephoneNumber: string;
  extension?: string;
  cellular: string;

  interest?: string;
  introduction?: string;
  lookingFor?: string;
  photos?: Photo[];
  lastName: string;
  firstName: string;
  currentRole: string;
  contact?: Contact[];
}
