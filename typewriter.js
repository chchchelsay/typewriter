const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    console.log(sentence[i])}, i *50);
}
