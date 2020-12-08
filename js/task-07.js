const inputRef = document.querySelector("input#font-size-control");
// console.dir(inputRef);

const contentRef = document.querySelector("span#text");
// console.dir(contentRef);

const contentSizeHandler = (event) => {
  contentRef.style.fontSize = `${event.target.value}px`;
  //   console.dir(contentRef.style.fontSize);
};

inputRef.addEventListener("input", contentSizeHandler);
