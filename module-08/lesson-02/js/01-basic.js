/**
 * Деструктуризація об'єкта
 */

const user = {
  username: "Jacob Mercer",
  skills: {
    html: true,
    css: false,
    js: true,
  },
};

// const { username, skills } = user;
// // console.log(username);
// // console.log(skills);

/**
 * Глибока деструктуризація об'єкта
 */

const { skills: { html, css, js }, skills } = user;

// console.log(html);
// console.log(js);
// console.log(skills);

// console.log("html", html);
// console.log("css", css);
// console.log("js", js);

/**
 * Деструктуризація масива
 */

const arr = [1, 2, ["Neptun", "Earth", "Jupiter"], 4, 5, {x: 12, y: 13}];

arr[0] = 100
arr["abc"] = false


const [a, b, [neptun], , c, {x, y}] = arr;
console.log(" x:", x)
console.log(" y:", y)
console.log(" neptun:", neptun)

// // console.log(" a:", a)
// // console.log(" b:", b)
// // console.log(" c:", c)

// // console.log(arr);
// // console.log(arr.abc);






// const data = {
//   status: "ok",
//   totalResults: 45951,
//   articles: [
//     {
//       source: {
//         id: "the-verge",
//         name: "The Verge"
//       },
//       author: "Tom Warren, Jess Weatherbed",
//       title: "The EU isn’t happy with Apple’s tax on alternative app stores",
//       description: "The European Commission has just issued its first Digital Markets Act (DMA) fines to Apple and Meta, and now it’s telling Apple that it’s not impressed with the company’s approach to alternative app stores. The DMA originally forced Apple to begrudgingly allo…",
//       url: "https://www.theverge.com/news/636196/apple-eu-dma-probe-alternative-app-stores-tax",
//       urlToImage: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/03/STK450_EU_G-1.jpg?quality=90&strip=all&crop=0%2C9.9676601489831%2C100%2C80.064679702034&w=1200",
//       publishedAt: "2025-04-23T11:30:48Z",
//       content: "The European Commission has also closed its investigation into the iPhones browser choice screen.\r\nThe European Commission has also closed its investigation into the iPhones browser choice screen.\r\nT…"
//     },
//     {
//       source: {
//         id: "wired",
//         name: "Wired"
//       },
//       author: "Adrienne So",
//       title: "The Apple Watch Turns 10. Here's How Far It's Come",
//       description: "When the Apple Watch launched, it was unclear if smartwatches would pan out. Ten years later, Apple has a $100-billion hit that reshaped the watch industry and ushered in a new age of fitness tracking.",
//       url: "https://www.wired.com/story/apple-watch-turns-10/",
//       urlToImage: "https://media.wired.com/photos/6809646e58f463c0470389a0/191:100/w_1280,c_limit/Apple-Watch-10th-Anniversary_042025_Lede.jpg",
//       publishedAt: "2025-04-24T14:02:22Z",
//       content: "Every year, Apple launches one standout health feature, from measuring VO2 Max on the Series 3 to the ECG sensor on the Series 4, all the way to sleep apnea notifications on the Series 10. If you zoo… [+2825 chars]"
//     },
//     {
//       source: {
//         id: "the-verge",
//         name: "The Verge"
//       },
//       author: "Chris Welch",
//       title: "Apple stumbles with latest AirPods Max firmware",
//       description: "Last week, Apple announced that lossless audio and ultra low latency would be coming to the AirPods Max with USB-C. It was a pleasant surprise for owners of Apple’s over-ear headphones, which have fallen behind the AirPods Pro in recent years when it comes to…",
//       url: "https://www.theverge.com/news/642140/apple-airpods-max-lossless-audio-update-delay",
//       urlToImage: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/24775818/DSCF2505_Enhanced_NR.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
//       publishedAt: "2025-04-02T20:45:54Z",
//       content: "Lossless audio and ultra low latency are still MIA after the release of iOS 18.4.\r\nLossless audio and ultra low latency are still MIA after the release of iOS 18.4.\r\nLast week, Apple announced that l… [+1786 chars]"
//     }
//   ]
// }

// // console.log(data.articles[0].source.name);

