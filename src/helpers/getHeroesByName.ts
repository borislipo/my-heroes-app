import { Hero } from "../components/hero/heroesList";
import { heroes } from "../data/heroes";

export const getHeroesByName = (
  name: string | undefined
): Hero[] | undefined => {
  if (name) {
    const heroName = name.toLowerCase();
    return heroes.filter((hero) =>
      hero.superhero.toLowerCase().includes(heroName)
    );
  }
  return undefined;
};
