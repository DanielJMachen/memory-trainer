export default function GenerateLetters(difficulty) {
    let letterList = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetLength = alphabet.length;
    let i = 0;
    
    while (i < difficulty) {
      let randomLetter = alphabet.charAt(Math.floor(Math.random() * alphabetLength));
      letterList.push(randomLetter)
      i++;
    }
    return letterList;
}