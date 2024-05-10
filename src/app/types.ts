export interface Product {
    amt: number;
    battery_health: number;
    category: string;
    color: string;
    created_at: string;
    desc: string;
    grade: string;
    id: string;
    img: string;
    name: string;
    price: number;
    storage: number;
    users: {
        businessName: string;
        createdAt: string;
        email: string;
        fullname: string;
        id: string;
        location: string;
        phoneNumber: number;
        vendor: boolean;
      };
  }