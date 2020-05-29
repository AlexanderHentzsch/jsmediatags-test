import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let jsmediatags = window.jsmediatags;
console.log(jsmediatags);

let url = `https://bkj6y.csb.app/src/sjjm_X_001.mp3`;

jsmediatags.read(url, {
  onSuccess: function(tag) {
    console.log(tag);
  },
  onError: function(error) {
    console.log(error);
  }
});
