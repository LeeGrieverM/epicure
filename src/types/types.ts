
export interface CardData {
  title: string;
  image: string;
  expansionComponent?: React.ReactNode;
}

export interface IChef {
  id: string;
  name: string;
  image: string;
  description: string;
  restaurants: string[];
  isChefOfTheWeek: boolean;
  isActive?: boolean;
}


export interface IDish {
  id: string;
  name: string;
  image: string;
  ingredients: string[];
  icon: string;
  price: number;
  isActive?: boolean;

}


export interface IRestaurant {
  id: string;
  name: string;
  image: string;
  chef: string;
  dishes: string[];
  stars: number;
  isActive?: boolean;
}
