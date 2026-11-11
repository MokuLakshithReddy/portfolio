import part1 from './character-data/part-1.txt?raw'
import part2 from './character-data/part-2.txt?raw'
import part2b from './character-data/part-2b.txt?raw'
import part3 from './character-data/part-3.txt?raw'
import part4 from './character-data/part-4.txt?raw'
import part4b from './character-data/part-4b.txt?raw'
import part5 from './character-data/part-5.txt?raw'

/**
 * The original full-body character artwork, with its baked checkerboard
 * removed and exported as a transparent WebP. Kept as small raw-text chunks
 * to avoid a large binary asset commit.
 */
export const lakshithCharacterSrc = `data:image/webp;base64,${[
  part1,
  part2,
  part2b,
  part3,
  part4,
  part4b,
  part5,
].join('')}`
