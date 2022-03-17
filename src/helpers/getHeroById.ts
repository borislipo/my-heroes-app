import { Hero } from "../components/hero/heroesList";
import { heroes } from "../data/heroes";

export const getHeroById = (id: string): Hero | undefined => {
  const hero = heroes.find((hero) => hero.id === id);

  return hero;
};
