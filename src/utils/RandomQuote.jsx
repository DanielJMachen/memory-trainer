
const quoteList = [
    {quote: "The advantage of a bad memory is that one enjoys several times the same good things for the first time.", 
    author:"Friedrich Nietzsche"},
   /* {quote: "Forgetfulness is a form of freedom.", author:"Kahlil Gibran"},*/
]

export default function RandomQuote() {
    const quoteListLength = quoteList.length
    const currentQuote = quoteList[Math.floor(Math.random() * quoteListLength)]
    return currentQuote
}