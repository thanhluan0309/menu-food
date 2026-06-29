export interface MenuItem {
  name: string;
  desc: string;
  price: number;
  tag?: string;
  image: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface RestaurantInfo {
  name: string;
  slogan: string;
  address: string;
  phone: string;
  hours: string;
}
