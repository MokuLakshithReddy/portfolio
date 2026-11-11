import part1 from './character-data/hires-01.txt?raw'
import part2 from './character-data/hires-02.txt?raw'
import part3 from './character-data/hires-03.txt?raw'
import part4 from './character-data/hires-04.txt?raw'
import part5 from './character-data/hires-05.txt?raw'
import part6 from './character-data/hires-06.txt?raw'
import part7 from './character-data/hires-07.txt?raw'
import part8 from './character-data/hires-08.txt?raw'

/**
 * Transparent WebP cutout of the original illustrated character artwork.
 * The background checkerboard was removed while preserving the original
 * pose, clothing, facial details, and proportions.
 */
export const lakshithCharacterSrc = `data:image/webp;base64,${[
  part1,
  part2,
  part3,
  part4,
  part5,
  part6,
  part7,
  part8,
].join('')}`
