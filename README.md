# Frontend Mentor - Intro section with dropdown navigation

![Design preview for the Intro section with dropdown navigation coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page


### Links

- Live Site URL: [Live Demo](#)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Flexbox


### What I learned

- Javascript forEach

```js
mDropdownMenus.forEach(function(currentDropdownMenu, i) {
    currentDropdownMenu.addEventListener('click', function(e) {
        e.preventDefault()
        hideAllAndShowCurrentMobile(i);
        if (mDropdownList[i].style.display == "none" || !(mDropdownList[i].style.display)) {
            mDropdownList[i].style.display = "block";
        } else {
            mDropdownList[i].style.display = "none";
        }
    })
})
loadAdvice();

```


## Author
- Frontend Mentor - [@Master-Osaro](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@iyoha_osaro](https://www.twitter.com/yourusername)

**Really had fun building!** 🚀