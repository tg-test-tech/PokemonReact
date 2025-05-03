export interface PokemonAbility {
  ability: {
    name: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface PokemonSprites {
  front_default: string;
  other?: {
    dream_world?: {
      front_default: string;
    };
  };
}

export interface Pokemon {
  id: number;
  name: string;
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  sprites: PokemonSprites;
}

export interface PokemonListItem {
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}
