/* eslint-disable react/prop-types */
import InfluenceerPost from "./InfluencerPost";
import Post from "./Post";

const normal_posts = [
  {
    retailName: "Syma verma",
    name: "Syma verma",
    avatar:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_32,c_limit,fl_progressive/assets/images/2022/5/31/ba2be1af-a2c6-478f-a450-1f6bd903dce41653984308484-F99CAC4D-27E0-43D3-A8CF-5284A98AD8CF.jpeg",
    src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/12/2/189a7c51-c14a-4f7f-bc0d-a165043e64b01701513184996-IMG_3034.jpeg",
    description: "Wear it like you own it !!🎀🎀 ",
    time: 3,
  },
  {
    retailName: "Carlton London Beauty",
    name: "Carlton London Beauty",
    avatar:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_32,c_limit,fl_progressive/assets/images/2022/4/8/48306f39-3cf6-4665-9ce0-44bea9899e441649420915363-CL-Logo.png",
    src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/12/8/e0989b2d-c14d-4c85-bd85-7f5ba48995c81702016734680-A7407900--2-.jpg",
    description:
      "Grace Perfume: Where elegance meets enchantment in every spray ✨🤎 ",

    time: 2,
  },
  {
    retailName: "Abhishek Sah",
    name: "Abhishek Sah",
    avatar:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_32,c_limit,fl_progressive/assets/images/2023/8/16/79defde3-c679-44ff-aa98-b4d4f52cf8701692190881760-photo-output--3-.JPG",
    src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/12/8/d7264997-308f-4e05-8a62-5e9e4fb923ff1702026720604-IMG_3860.jpeg",
    description: "winter season ready✨  ",
    time: 4,
  },
  {
    retailName: "Bhavyamehta",
    name: "Bhavyamehta",
    avatar:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_32,c_limit,fl_progressive/assets/images/2023/1/2/15756fe8-e3d2-4858-a7c2-dabfca1258291672644496686-croppedImage-1672644446218.jpg",
    src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/12/8/76df9838-6328-4379-ab11-9ff69b69deb61702026076915-IMG_8198.jpeg",
    description:
      "The sleek design and vibrant colors add a pop of personality to your ensemble, making a statement without saying a word. Elevate your shoe game and embrace the perfect blend of comfort and style. Step out in SoleRadiance and let your shoes do the talking! 👟💃 #StepIntoStyle #SoleRadiance ",
  },
];
const social_posts = [
  {
    retailName: "RIGO",
    name: "RIGO",
    avatar:
      "https://images.unsplash.com/photo-1605993439219-9d09d2020fa5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/12/1/179a6627-9d71-46e1-adc8-891aa42147931701445811455-AEFB3A9F-9E62-410C-A82D-32CF0767C894.jpeg",
    description:
      "Step into the spotlight with our enchanting Pink Bliss Dress! 💖. Available now to make every moment magical. #PrettyInPink #FashionElegance",
    images: [
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/20637304/2022/12/12/fa0a3ac4-1740-489f-9017-800905ab6b461670846154247-ANVI-Be-Yourself-Women-Pink-Solid-Faux-Fur-Open-Front-Jacket-1.jpg",
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/12737872/2020/10/23/70f4377d-1f96-4a80-9a8b-b9844610bfcd1603451223200-SASSAFRAS-Women-Sweatshirts-5911603451221405-1.jpg",
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/15159094/2022/9/20/21a909e3-a7bc-4df0-bd0a-f267e34d7bcb1663660379864-Roadster-Women-Lavender-Sweatshirt-131663660379282-1.jpg",
    ],
    time: 3,
  },

  {
    retailName: "DeBelle",
    name: "DeBelle",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/12/4/eaeca7c7-844f-4fea-a2c2-0f1abf8f451a1701672993094-1.jpg",
    description:
      "Make a fashion statement with this exclusive shade Copper Glaze at your nail tips !  ",
    images: [
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/14691008/2023/12/11/f34057f2-6361-4638-8e3a-cd31448382701702281517721-DeBelle-Gel-Nail-Lacquer---Copper-Glaze-8-ml-824170228151757-1.jpg",
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/14691010/2021/10/18/a313708e-bef3-4380-9fda-23184cd02f001634558559562DeBelleWomenBrownNailPolish-CocoBean1.jpg",
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/14691012/2021/10/18/ceed4919-5f2d-49b0-9560-2dfcc6b3d49e1634558560901DeBelleMagentaGelNailLacquer-LauraAura1.jpg",
    ],
    time: 3,
  },
  {
    retailName: "Wanderlust Finds Co.",
    name: "Wanderlust Finds Co.",
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/12/13/068ae2e1-9996-4d57-be16-c5aa8544c7fb1702475989696-DB-15.12.23---1.jpeg",
    description:
      "Step into a world of style with our latest footwear collection! 👟✨ Introducing the SoleRadiance Sneakers – where comfort meets fashion effortlessly. Walk confidently in these chic kicks designed for the modern adventurer. From casual strolls to urban explorations, these shoes keep you on trend every step of the way. Step out in SoleRadiance and let your shoes do the talking! 👟💃 #StepIntoStyle #SoleRadiance",
    images: [
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/22103478/2023/8/29/53f091ba-e6f8-4e52-b609-832d514f10b01693310043604-DressBerry-Women-Running-Shoes-6731693310043211-1.jpg",
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/22202470/2023/8/29/66918724-64fd-4b8b-84be-aa117c46b2cf1693310055528-DressBerry-Women-Running-Shoes-4101693310055061-1.jpg",
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/22103482/2023/7/12/9744029f-b058-4c29-b415-66158276320a1689166145649-DressBerry-Women-Running-Shoes-1631689166145250-1.jpg",
    ],
    time: 3,
  },
  {
    retailName: "Urban Bliss ",
    name: "Urban Bliss ",
    avatar:
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_32,c_limit,fl_progressive/assets/images/2022/5/31/ba2be1af-a2c6-478f-a450-1f6bd903dce41653984308484-F99CAC4D-27E0-43D3-A8CF-5284A98AD8CF.jpeg",
    src: "https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_400,c_limit,fl_progressive/assets/images/2023/12/2/324646da-6ce1-452b-bc09-a965c119a4c01701513068171-IMG_4745.jpeg",
    description:
      "Embracing the warmth of autumn in style! 🍂✨ Our latest brown coat is not just an outfit; it's a mood. Picture-perfect for chilly days, it wraps you in cozy elegance. Step into fall with confidence! 🍁🧥 #AutumnStyle #CozyChic",
    images: [
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/21400926/2023/1/3/503f41d3-418a-41e2-b820-e3a186fa1f471672750185407ForeverNewWomenBlackFlaredHigh-RiseTrousers1.jpg",
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/20535914/2022/10/28/4cb85f0a-fae2-4f84-b2fe-a708a25d17c51666957398491Coats1.jpg",
      "https://assets.myntassets.com/w_200,q_60,dpr_1,fl_progressive/assets/images/25130654/2023/9/23/0150694b-01cb-49ce-874f-5caf0121df061695473716399TrendyolWomenPufferJacket1.jpg",
    ],
    time: 3,
  },
];

const Posts = ({ isFeatured }) => {
  return (
    <>
      {isFeatured
        ? social_posts.map((post, id) => (
            <InfluenceerPost key={id} post={post} />
          ))
        : normal_posts.map((post, id) => <Post key={id} post={post} />)}
    </>
  );
};

export default Posts;
