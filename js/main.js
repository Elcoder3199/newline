let slide_b = document.querySelectorAll(".cd-slider-nav ul li a");

slide_b.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    slide_b.forEach((btn) => {
      btn.classList.remove("selected");
    });
    btn.classList.add("selected");
  });
});

/*
      =============================
      ----- SECTION WORKING ------.
      =============================
      */

let imgSlider = document.querySelectorAll(".image-icon"),
sec = document.querySelectorAll(".sec");

imgSlider.forEach(slider => {
  slider.addEventListener("click", function (e) {
    let dataClass = e.target.dataset.class;
    console.log(dataClass)
    sec.forEach(sec => {
      sec.classList.remove("active");
    })
    document.querySelector("." + dataClass).classList.add("active");
  });
});


/*
      =============================
      ----- PROJECTS WORKING ------
      =============================
      */
let pro_img = Array.from(document.querySelectorAll(".projects .content img")),
imgLength = pro_img.length,
image_show = document.querySelector(".img_show .show_image"),
img_show = document.querySelector(".img_show"),
close = document.querySelector(".close"),
overlay_pro = document.querySelector(".overlay_pro"),
prev = document.querySelector(".prev img"),
next = document.querySelector(".next img"),
currentIndex = 0;

pro_img.forEach(img => {
  img.addEventListener("click", (e) => {
    let src = e.target.dataset.img;
    image_show.src = "img/" + src;
    img_show.classList.add("show");
    overlay_pro.classList.add("show");
    currentIndex = img.dataset.index;
  })
})

close.addEventListener("click", () => {
  img_show.classList.remove("show");
  overlay_pro.classList.remove("show");
})

/* ####### on click on overlay remove the class ######## */

overlay_pro.addEventListener("click", () => {
  img_show.classList.remove("show");
  overlay_pro.classList.remove("show");
})

/*
      =============================================================
      ----- on click the prev arrow change to the prev image ------
      =============================================================
      */

prev.addEventListener("click", () => {
  if (currentIndex <= 0) {
    currentIndex = imgLength - 1;
  }
  else {
    currentIndex--;
  }
  checker ();
})

/*
      =============================================================
      ----- on click the next arrow change to the next image ------
      =============================================================
      */


next.addEventListener("click", () => {
  if (currentIndex >= imgLength - 1) {
    currentIndex = 0;
    checker ();
  } else {
    currentIndex++;
  }
  checker ();
})

/*
    ====================================================================================
    ----- Check currentIndex variable to change image Resource on click the arrow ------
    ====================================================================================
   */

function checker () {
  image_show.src = pro_img[currentIndex].src;
}

checker ();