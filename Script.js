
var nav = document.querySelector("nav");

var tabContent1 = document.querySelector(".tab-content1");
var tabContent2 = document.querySelector(".tab-content2");
var tabContent3 = document.querySelector(".tab-content3");
var tabContent4 = document.querySelector(".tab-content4");
var tabContent5 = document.querySelector(".tab-content5");
var tabContent6 = document.querySelector(".tab-content6");
var tabContent7 = document.querySelector(".tab-content7");
var tabContent8 = document.querySelector(".tab-content8");


window.onscroll = function() {
    if (scrollY >= 74) {
        nav.style.position = ("fixed")
        nav.style.top = (0)
    } else {
        nav.style.position = ("absolute")
        nav.style.top = (74+"px")
    }
    if (scrollY >= 0) {
        tabContent1.classList.add("active");
        tabContent2.classList.remove("active");
        tabContent3.classList.remove("active");
        tabContent4.classList.remove("active");
        tabContent5.classList.remove("active");
        tabContent6.classList.remove("active");
        tabContent7.classList.remove("active");
        tabContent8.classList.remove("active");
    } else {
        tabContent1.classList.remove("active");
    }
    if (scrollY >= 2100) {
        tabContent1.classList.remove("active");
        tabContent2.classList.add("active");
        tabContent3.classList.remove("active");
        tabContent4.classList.remove("active");
        tabContent5.classList.remove("active");
        tabContent6.classList.remove("active");
        tabContent7.classList.remove("active");
        tabContent8.classList.remove("active");
    } else {
        tabContent2.classList.remove("active");
    }
    if (scrollY >= 6940) {
        tabContent1.classList.remove("active");
        tabContent2.classList.remove("active");
        tabContent3.classList.add("active");
        tabContent4.classList.remove("active");
        tabContent5.classList.remove("active");
        tabContent6.classList.remove("active");
        tabContent7.classList.remove("active");
        tabContent8.classList.remove("active");
    } else {
        tabContent3.classList.remove("active");
    }
    if (scrollY >= 9040) {
        tabContent1.classList.remove("active");
        tabContent2.classList.remove("active");
        tabContent3.classList.remove("active");
        tabContent4.classList.add("active");
        tabContent5.classList.remove("active");
        tabContent6.classList.remove("active");
        tabContent7.classList.remove("active");
        tabContent8.classList.remove("active");
    } else {
        tabContent4.classList.remove("active");
    }
    if (scrollY >= 10461) {
        tabContent1.classList.remove("active");
        tabContent2.classList.remove("active");
        tabContent3.classList.remove("active");
        tabContent4.classList.remove("active");
        tabContent5.classList.add("active");
        tabContent6.classList.remove("active");
        tabContent7.classList.remove("active");
        tabContent8.classList.remove("active");
    } else {
        tabContent5.classList.remove("active");
    }
    if (scrollY >= 11947) {
        tabContent1.classList.remove("active");
        tabContent2.classList.remove("active");
        tabContent3.classList.remove("active");
        tabContent4.classList.remove("active");
        tabContent5.classList.remove("active");
        tabContent6.classList.add("active");
        tabContent7.classList.remove("active");
        tabContent8.classList.remove("active");
    } else {
        tabContent6.classList.remove("active");
    }
    if (scrollY >= 12611) {
        tabContent1.classList.remove("active");
        tabContent2.classList.remove("active");
        tabContent3.classList.remove("active");
        tabContent4.classList.remove("active");
        tabContent5.classList.remove("active");
        tabContent6.classList.remove("active");
        tabContent7.classList.add("active");
        tabContent8.classList.remove("active");
    } else {
        tabContent7.classList.remove("active");
    }
    if (scrollY >= 13191) {
        tabContent1.classList.remove("active");
        tabContent2.classList.remove("active");
        tabContent3.classList.remove("active");
        tabContent4.classList.remove("active");
        tabContent5.classList.remove("active");
        tabContent6.classList.remove("active");
        tabContent7.classList.remove("active");
        tabContent8.classList.add("active");
    } else {
        tabContent8.classList.remove("active");
    }
}

tabContent1.onclick = () => {
    tabContent1.classList.add("active");
    tabContent2.classList.remove("active");
    tabContent3.classList.remove("active");
    tabContent4.classList.remove("active");
    tabContent5.classList.remove("active");
    tabContent6.classList.remove("active");
    tabContent7.classList.remove("active");
    tabContent8.classList.remove("active");
    window.scrollTo ({
        top:0,
        behavior:"smooth",
    });
}
tabContent2.onclick = () => {
    tabContent1.classList.remove("active");
    tabContent2.classList.add("active");
    tabContent3.classList.remove("active");
    tabContent4.classList.remove("active");
    tabContent5.classList.remove("active");
    tabContent6.classList.remove("active");
    tabContent7.classList.remove("active");
    tabContent8.classList.remove("active");
    window.scrollTo ({
        top:2100,
        behavior:"smooth",
    });
}
tabContent3.onclick = () => {
    window.scrollTo ({
        top:6940,
        behavior:"smooth",
    });
    tabContent1.classList.remove("active");
    tabContent2.classList.remove("active");
    tabContent3.classList.add("active");
    tabContent4.classList.remove("active");
    tabContent5.classList.remove("active");
    tabContent6.classList.remove("active");
    tabContent7.classList.remove("active");
    tabContent8.classList.remove("active");
}
tabContent4.onclick = () => {
    window.scrollTo ({
        top:9040,
        behavior:"smooth",
    });
    tabContent1.classList.remove("active");
    tabContent2.classList.remove("active");
    tabContent3.classList.remove("active");
    tabContent4.classList.add("active");
    tabContent5.classList.remove("active");
    tabContent6.classList.remove("active");
    tabContent7.classList.remove("active");
    tabContent8.classList.remove("active");
}
tabContent5.onclick = () => {
    window.scrollTo ({
        top:15240,
        behavior:"smooth",
    });
    tabContent1.classList.remove("active");
    tabContent2.classList.remove("active");
    tabContent3.classList.remove("active");
    tabContent4.classList.remove("active");
    tabContent5.classList.add("active");
    tabContent6.classList.remove("active");
    tabContent7.classList.remove("active");
    tabContent8.classList.remove("active");
}
tabContent6.onclick = () => {
    window.scrollTo ({
        top:18040,
        behavior:"smooth",
    });
    tabContent1.classList.remove("active");
    tabContent2.classList.remove("active");
    tabContent3.classList.remove("active");
    tabContent4.classList.remove("active");
    tabContent5.classList.remove("active");
    tabContent6.classList.add("active");
    tabContent7.classList.remove("active");
    tabContent8.classList.remove("active");
}
tabContent7.onclick = () => {
    window.scrollTo ({
        top:19140,
        behavior:"smooth",
    });
    tabContent1.classList.remove("active");
    tabContent2.classList.remove("active");
    tabContent3.classList.remove("active");
    tabContent4.classList.remove("active");
    tabContent5.classList.remove("active");
    tabContent6.classList.remove("active");
    tabContent7.classList.add("active");
    tabContent8.classList.remove("active");
}
tabContent8.onclick = () => {
    tabContent1.classList.remove("active");
    tabContent2.classList.remove("active");
    tabContent3.classList.remove("active");
    tabContent4.classList.remove("active");
    tabContent5.classList.remove("active");
    tabContent6.classList.remove("active");
    tabContent7.classList.remove("active");
    tabContent8.classList.add("active");
}

var svgHeader = document.querySelector("header svg");

svgHeader.onclick = function() {
    document.querySelector("header ul").classList.toggle("active")
}