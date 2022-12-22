const { log } = console;
// relye ficjye css mwen an ak html la
const styleCss = document.createElement("link");
styleCss.setAttribute("rel", "stylesheet");
styleCss.setAttribute("href", "./idex.css");
const link = document.head;

link.append(styleCss);
log(StyleSheet);
log(link);

let object = [
  {
    userId: 1,
    id: 1,
    date: "2011-10-05T14:48:00.000",
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    photo: "https://via.placeholder.com/150/92c952",
  },
  {
    userId: 1,
    id: 2,
    date: "2011-11-05T16:28:00.000",
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    photo: "https://via.placeholder.com/150/92c952",
  },
  {
    userId: 1,
    id: 3,
    date: "2011-10-05T14:48:00.000",
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    photo: "https://via.placeholder.com/150/92c952",
  },
  {
    userId: 1,
    id: 4,
    date: "2011-10-05T14:48:00.000",
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    photo: "https://via.placeholder.com/150/92c952",
  },
    {
      userId: 1,
      id: 5,
      date: "2011-10-05T14:48:00.000",
      title: "occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      photo: "https://via.placeholder.com/150/92c952",
    },
    {
      userId: 1,
      id: 4,
      date: "2011-10-05T14:48:00.000",
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      photo: "https://via.placeholder.com/150/92c952",
    },
    {
      userId: 1,
      id: 5,
      date: "2011-10-05T14:48:00.000",
      title: "occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      photo: "https://via.placeholder.com/150/92c952",
    },
    {
      userId: 1,
      id: 4,
      date: "2011-10-05T14:48:00.000",
      title: "eum et est occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      photo: "https://via.placeholder.com/150/92c952",
    },
    {
      userId: 1,
      id: 5,
      date: "2011-10-05T14:48:00.000",
      title: "occaecati",
      body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
      photo: "https://via.placeholder.com/150/92c952",
    },
];

// // creation footer
const footer = document.getElementById("foot");
const div = document.createElement("div");
div.className = "selection";
div.id = "selection";
const select = document.createElement("select");
select.id = "MySelect";
select.style["margin-left"] = "20px";
select.style["margin-right"] = "20px";
for (const key in object) {
  const option = document.createElement("option");
  // option.append(key)
  select.innerHTML += `<option value=${parseInt(key) + 1}>${
    parseInt(key) + 1
  }</option>`;
  div.append(select);
  footer.append(div);
}
let show = document.createElement("span");
let showT = document.createTextNode("Show \t");
show.append(showT);
footer.prepend(show);

let of1 = document.createElement("span");
let ofT = document.createTextNode(`of ${object.length}`);
of1.append(ofT);
select.after(of1);

let btn1 = document.createElement("button");
btn1.className = "btn";
btn1.id = "show";
let btn1T = document.createTextNode(`Show`);
btn1.append(btn1T);
of1.after(btn1);
btn1.style["font-size"] = "18px";


let btn2 = document.createElement("button");
btn2.className = "btn";
btn2.id = "reset";
btn1.style["margin-left"] = "15px";
btn2.style["font-size"] = "18px";

let btn2T = document.createTextNode(`reset`);
btn2.append(btn2T);
btn1.after(btn2);

function formatDate(fullDate) {
  let date, month, year,result;

  date = fullDate.getDate();
  month = fullDate.getMonth() + 1;
  year = fullDate.getFullYear();

    date = date
        .toString()
        .padStart(2, '0');

    month = month
        .toString()
        .padStart(2, '0'); 

  return  result =`${date}/${month}/${year}`;
}



function CreatePost(object,select) {
  let j=""
  const aside1 = document.createElement('aside')
  const aside = document.getElementById('bwat')
  const pre = document.createElement('pre')
  const code = document.createElement('code')
  for (let key = 0; key < select; key++) {
    // if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      // const select = document.getElementById("MySelect").value;
      let ass=document.getElementById('bwat')
      let postK=document.createElement('div')
      postK.id='post'
      ass.append(postK)

      const post = document.getElementById("post");
      // paran
      let wrp = document.createElement("div");
      wrp.setAttribute("class", "waper");
      wrp.id = "waper";
      // pitit
      const img = document.createElement("img");
      img.setAttribute("class", "img");
      img.setAttribute("src", element.photo);
      img.setAttribute("alt", "");
      // log(img)
      // kontni
      const kontni = document.createElement("div");
      kontni.setAttribute("class", "kontni");
      kontni.id = "kontni";

      // tit
      const tit = document.createElement("h1");
      tit.append(element.title);
      //
      // date
      const date = document.createElement("p");
      
      date.setAttribute("class", "date");
      // const teks1 = document.createTextNode('2011-10-05T14:48:00.000')
      const fullDate = element.date
      const dateformater = formatDate(new Date(fullDate))
      date.append(dateformater);

      // article
      const article = document.createElement("p");
      article.setAttribute("class", "article");
      // const teks2 = document.createTextNode('ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit')
      article.append(element.body);

      // kreyasyon post la

      // ajoute tit
      kontni.append(tit);
      // ajoute br
      kontni.append(document.createElement("br"));
      // ajoute date
    
      kontni.append(date);
      // ajoute br
      kontni.append(document.createElement("br"));
      // ajoute article
      kontni.append(article);

      const hr = document.createElement("hr");
      kontni.append(hr);

      //######
      // ajoute img nan wapper
      wrp.append(img);
      // // ajoute img nan wapper
      wrp.append(kontni);

      // ajoute wapper la nan post la
      post.append(wrp);

      
      j+="\n"+(JSON.stringify(element, null, 2))
      code.append(j)
      pre.append(code)
      aside1.id = 'api-content'
      aside1.append(pre)
      post.before(aside1)

    }
  }

  // return wrp;
//}

function showAllPost(object) {
  
}

let btno2 = document.getElementById("show");
btno2.addEventListener("click", function () {
  let re = document.getElementById("waper");
  let w=document.getElementById("post")
    w=w.remove()
  // log(re.textContent);
  // for (const key in re) {
  //   if (Object.hasOwnProperty.call(object, key)) {
  //     const element = object[key].remove();
      
  //   }
  // }
  // re = re.remove();
  const select = document.getElementById("MySelect").value;
  const post = document.getElementById("post");
  log(post);
  const kontni = document.getElementsByClassName("kontni");
 CreatePost(object,select);
});


let btno3 = document.getElementById("reset");
btno3.addEventListener("click", function () {
  let w=document.getElementById("post")
    w=w.remove()
  const select = object.length;
  const post = document.getElementById("post");
 CreatePost(object,select);
});


