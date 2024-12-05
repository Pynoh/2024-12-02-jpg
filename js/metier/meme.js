class Meme {
  id = undefined;
  text = "";
  x = 0;
  y = 10;
  fontSize = 10;
  fontWeight = 500;
  underline = false;
  italic = false;
  color = "#FFFFFF";
  imageId = -1;
  #endpoint = "/memes";

  constructor() {}
  save() {
    fetch(
      `http://localhost:5679${this.#endpoint}${
        this.underline !== this.id ? "/" + this.id : ""
      }`,
      {
        method: undefined !== this.id ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this),
      }
    )
      .then((r) => r.json())
      .then((o) => {
        Object.assign(this, o);
      });
    //console.log("save " + this.id + " at " + this.#endpoint, this);
    //this.publicSave();
    //this.#privateSave();
  }
  publicSave() {
    console.log("public saving");
  }
  #privateSave() {
    console.log("private saving");
  }
}
let meme = new Meme();
//meme.save();
