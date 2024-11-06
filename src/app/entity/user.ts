// src/app/entity/user.model.ts
export class User {
    id: number;
    name: string;
    email: string;
    isValidEmail?: boolean;
    emailOtp?: string;
    phone: string;
    isValidPhone?: boolean;
    phoneOtp?: string;
    password: string;
    gender?: string;
    address?: string;
    profilePicture?: string;
    isOwner?: boolean;
    
    // Relationships with properties (arrays initialized as empty by default)
    // house: House[] = [];
    // villa: Villa[] = [];
    // room: Room[] = [];
    // flat: Flat[] = [];
    // apartment: Apartment[] = [];
    // shop: Shop[] = [];
    // office: Office[] = [];
    // industrialBuildings: IndustrialBuilding[] = [];
    // propertyReviews: PropertyReview[] = [];
  
    constructor(
      id: number,
      name: string,
      email: string,
      phone: string,
      password: string,
      isValidEmail?: boolean,
      emailOtp?: string,
      isValidPhone?: boolean,
      phoneOtp?: string,
      gender?: string,
      address?: string,
      profilePicture?: string,
      isOwner?: boolean
    ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.isValidEmail = isValidEmail;
      this.emailOtp = emailOtp;
      this.phone = phone;
      this.isValidPhone = isValidPhone;
      this.phoneOtp = phoneOtp;
      this.password = password;
      this.gender = gender;
      this.address = address;
      this.profilePicture = profilePicture;
      this.isOwner = isOwner;
    }
  }
  