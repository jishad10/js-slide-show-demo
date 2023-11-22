// dummy data
// const posts = [
//   {
//     title: "this is title1",
//     body: "this is body1",
//   },
//   {
//     title: "this is title2",
//     body: "this is body2",
//   },
//   {
//     title: "this is title3",
//     body: "this is body3",
//   },
//   {
//     title: "this is title4",
//     body: "this is body4",
//   },
//   {
//     title: "this is title5",
//     body: "this is body5",
//   },
//   {
//     title: "this is title6",
//     body: "this is body6",
//   },
//   {
//     title: "this is title7",
//     body: "this is body7",
//   },
//   {
//     title: "this is title8",
//     body: "this is body8",
//   },
// ];

/*  card ei rokom hobe

//  <div class="post">
//    <h4 class="post-title">post title 1</h4>
//    <p class="post-body">post description 1</p>
//  </div>;
*/


//fetch data
const fecthData = async (config) => {     //config er modde je keno url pass kora jabe ,jodi config na di e url link ta ditam taile ekta link ni e kaj korto partam arki
  try {
    const res = await axios(config);
    return res.data;  //res.data di  te hobe jate data golo return ko re
  } catch (error) {
    throw Error("data is not fetched");
  }
};


//amra cacchi je posts div er modde dynamically card golo made korbo
//tai posts ta ke select ko re div create korchi and post ta add korchi
//oi post er jaigai tittle and body te ja aace ta dekabe
//fetch data er link ta actually amra fakeapi theke nici
//okhane database create kora aace
//okhan theke just tittle and body er joono dataload hobe



// selection
const postsElement = document.querySelector(".posts");

const loadAllData = async () => {      //async await dichi bcz amra axios ni e kaj kortechi
  const posts = await fecthData("https://jsonplaceholder.typicode.com/posts");    //data golo ke load korbo ei link theke
  posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
         <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
    `;
    postsElement.appendChild(postElement);
  });
};

loadAllData();
