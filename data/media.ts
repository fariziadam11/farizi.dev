export type MediaType = 'anime' | 'book' | 'movie' | 'drama' | 'game' | 'song'
export type MediaState = 'done' | 'doing' | 'todo'

export interface MediaRecord {
  name: string
  creator?: string
  state?: MediaState
  date?: string
  note?: string
  lang?: string
}

export const anime: MediaRecord[] = [
  {
    name: 'Naruto',
    creator: 'Masashi Kishimoto',
  },
]

export const book: MediaRecord[] = [
  {
    name: 'Hujan',
    creator: 'Tere Liye',
  },
  {
    name: 'How To Master Your Habits',
    creator: 'Felix Y. Siauw',
  },
  {
    name: 'Cinta dan Kehilangan',
    creator: 'SenyumSyukur',
  },
  {
    name: 'Jika Nanti Kita Jatuh Cinta Lagi',
    creator: 'Alfialghazi',
  },
  {
    name: 'Tuhan Selamatkan Aku',
    creator: 'Rizki Athaillah',
  },
  {
    name: 'Atomic Habits',
    creator: 'James Clear',
  },
  {
    name: 'Baitul Maqdis For Dummies',
    creator: 'Felix Y. Siauw',
  }
]

export const movie: MediaRecord[] = [
  {
    name: 'Avatar',
    creator: 'James Cameron',
  },
  {
    name: 'The Dark Knight',
    creator: 'Christopher Nolan',
  },
  {
    name: 'Inception',
    creator: 'Christopher Nolan',
  },
  {
    name: 'Spider-Man: Across the Spider-Verse',
    creator: 'Joaquim Santos, Kemp Powers, Justin Thompson',
  },
  {
    name: 'Interstellar',
    creator: 'Christopher Nolan',
  },
  {
    name: 'Tenet',
    creator: 'Christopher Nolan',
  },
  {
    name: 'Dune',
    creator: 'Denis Villeneuve',
  },
  {
    name: 'The Imitation Game',
    creator: 'Morten Tyldum',
  },
  {
    name: 'HER',
    creator: 'Spike Jonze',
  },
  {
    name: 'Anonymous',
    creator: 'Akan Satayev',
  },
]

export const drama: MediaRecord[] = [
  {
    name: 'Descendants of the Sun',
  },
]

export const game: MediaRecord[] = [
  {
    name: 'Harvest Moon Back to Nature',
    creator: 'Natsume Inc.',
  },
]

export const song = [
  {
    name: 'About You',
    creator: 'The 1975',
  },
]

export const media: Record<MediaType, MediaRecord[]> = {
  anime,
  drama,
  movie,
  game,
  song,
  book,
}
