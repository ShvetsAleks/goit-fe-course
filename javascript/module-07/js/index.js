"use strict";
// // ============ МОДУЛЬ - 7 =======================

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3
    }
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36
    }
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147
    }
  }
];

const post = document.querySelector(`.post`);

const elements = reateCards(posts);

post.append(...elements);


// =====FANCTIONS======

function reateCards(arr) {
  return arr.reduce((acc, el) => acc.concat(createPostCard(el)), []);
};

function createPostCard({img, title, text, stats}) {
  const post = document.createElement(`div`);

  const postImg = document.createElement(`img`);
  postImg.classList.add(`post__image`);
  postImg.setAttribute(`src`, img);
  postImg.setAttribute(`alt`, "post image");

  const postTitle = document.createElement(`h2`);
  postTitle.classList.add(`post__title`);
  postTitle.textContent = title;

  const postText = document.createElement(`p`);
  postText.classList.add(`post__text`);
  postText.textContent = text;

  const postActions = document.createElement(`ul`);
  postActions.classList.add(`actions`, `post__actions`);

  const actionsItem = document.createElement(`li`);
  actionsItem.classList.add(`actions__item`);

  const actionsBtn = document.createElement(`button`);
  actionsBtn.classList.add(`actions__btn`);

  const actionsIcon = document.createElement(`span`);
  actionsIcon.classList.add(`actions__icon`, `actions__icon--like`);

  const actionsCount = document.createElement(`span`);
  actionsCount.classList.add(`actions__count`);
  actionsCount.textContent = stats.likes;

  actionsBtn.append(actionsIcon, actionsCount);
  actionsItem.append(actionsBtn);

  const cloneDislike = actionsItem.cloneNode(true);
  const hasDislike = cloneDislike.querySelector(`.actions__icon`);
  hasDislike.classList.remove(`actions_icon--like`);
  hasDislike.classList.add(`actions__icon--dislike`);
  const addCountDislike = cloneDislike.querySelector(`.actions__count`);
  addCountDislike.textContent = stats.dislikes;

  const cloneFav = actionsItem.cloneNode(true);
  const hasFav = cloneFav.querySelector(`.actions__icon`);
  hasFav.classList.remove(`actions__icon--like`);
  hasFav.classList.add(`actions__icon--fav`);
  const addCountFav = cloneFav.querySelector(`.actions__count`);
  addCountFav.textContent = stats.fav;

  postActions.append(actionsItem, cloneDislike, cloneFav);

  post.append(postImg, postTitle, postText, postActions);

  return post;
}
