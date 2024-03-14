import logo from "./logo.svg";
import "./App.css";

function App() {
  let healthItems = [
    "Toothpaste",
    "Soap",
    "Pizza",
    "Insurance",
    "Vitamins"
   ];

   let materialItems = [
    "Shoes",
    "Keychain",
    "Money",
    "Clothes",
    "Phone"
   ];

   let allItems = [...healthItems, ...materialItems];
   
   let ask = prompt("Hey, what item are you looking for?");

   let searchItems = () => {
     if (ask === allItems.indexOf(9)) {
      alert(`We have ${allItems.indexOf(9)}`)
     } else {
       alert(`We dont have ${allItems.indexOf(9)}`)
      }
    return searchItems
   };
 
    // for ( let i = ''; i === allItems.includes(); i++) {
      //    alert(i)
      // };
  //state
  //alert(`You've just added ${addItems} to your wishlist!`)
  return (
    <div className="App">
      <header className="App-header">
        <h1>List Search</h1>
      {(searchItems())}
        <a
          className="App-link"
          href="https://github.com/kreddc5/concept-practice"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Repo
        </a>
      </header>
    </div>
  );
}
export default App;


//fetch api to display results on page... potential idea, once you get the array back, filter through index to get the value that contains the most characters ??

// if(1 === 1) {
//   pear = 'a fruit';
// }
// console.log(pear);

// function greeting() {
//   let person = 'Meg';
//   alert(`Hi, ${person}!`);
// 