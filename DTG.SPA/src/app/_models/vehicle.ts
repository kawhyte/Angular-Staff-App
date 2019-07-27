export interface KeyValuePair { 
  id: number; 
  name: string; 
}

export interface Contact {
  name: string;
  phone: string;
  email: string;
}

export interface Vehicle {
  id: number; 
  model: KeyValuePair;
  make: KeyValuePair;
  isRegistered: boolean;
  features: KeyValuePair[];
  contact: Contact;
  lastUpdate: string;
  projectBudget: number; 
  lowestProjectBid?:number;
  endDate:Date;
}

export interface SaveVehicle {
  id: number; 
  createdByUserId?: number;
  lowestProjectBid?:number;
  projectBudget: number;
  endDate:Date;
  modelId: number;
  makeId: number;
  isRegistered: boolean;
  features: number[];
  contact: Contact;
}

