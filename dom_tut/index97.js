    // ! Dom Tree

    const rootNode = document.getRootNode();
    const html = rootNode.childNodes[0];
    const head = html.childNodes[0].childNodes;
    const body = html.childNodes[2].childNodes;

    const h1 = document.querySelector("h1");
    h1.parentNode.style.color = "white";
    h1.parentNode.style.backgroundColor = "orange";
    h1.parentNode.parentNode.style.backgroundColor = "grey";
    h1.parentNode.style.padding = "10px";
    h1.parentNode.style.margin = "1px";
    h1.parentNode.style.borderRadius = "10px";
    h1.parentNode.style.border = "2px solid black";

    console.log(h1);