banner = document.getElementsByClassName("banner")[0];

banner.addEventListener("mousemove", function(event){
    banner.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-in-out";
    banner.style.opacity = "0.5";
    var x = (event.clientX/window.innerWidth)*40;
    var y = (event.clientY/window.innerHeight)*40;
    banner.style.transform = "translate3d("+x+"px, "+y+"px, 0)";
    
});


banner.addEventListener("mouseleave", function(){
    banner.style.transition = "transform 0.3s ease-out, opacity 0.3s ease-in-out";
    banner.style.transform = "translate3d(0,0,0)";
    banner.style.opacity = "1";
});

// socials


(function () {
  // add click animation to social links
  var socials = document.querySelectorAll("[class*=social_lnk]");
  var i = socials.length;
  var cls = "-clicked";
  while (i--) {
    socials[i].addEventListener("click", function(e){
      var lnk = e.target;
      lnk.classList.add(cls);

      // Allow time for animation to complete then remove
      setTimeout(function() {
        lnk.classList.remove(cls);
      }, 300);
    }, false);
  }
})();


// Add target=_blank and rel=external to social buttons
var socialButtons = document.querySelectorAll("[class*=social_lnk]");
socialButtons.forEach(function(btn) {
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "external");
});

var cards = document.querySelectorAll("[class*=cardlink]");
cards.forEach(function(btn) {
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "external");
});

    // Add smooth scroll to internal links
var internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

document.body.classList.add("animate-in");

window.addEventListener("beforeunload", function () {
  setdocument.body.classList.add("animate-out");
});

function redirecthome(time) {
  setTimeout(function() { window.location = "index.html"; }, time); // 3 seconds.location = "main.html";
}

function toggleUpdate(updateId) {
    var updates = document.getElementsByClassName('changelog');
    for (var i = 0; i < updates.length; i++) {
        if (updates[i].id === updateId) {
            updates[i].style.display = 'block';
        } else {
            updates[i].style.display = 'none';
        }
    }
}

// Show the most recent update (1.3) by default
toggleUpdate('1.4');

let availablekeywords = [
    '1.2',
    '1.3',
    '1.4'
];

const resultsbox = document.querySelector('.result-box');

const inputbox = document.querySelector('#search-bar');

inputbox.addEventListener('keyup', (e) => {
    const filteredKeywords = availablekeywords.filter(keyword => keyword.includes(e.target.value));
    const limitedResult = filteredKeywords.slice(0, 4);

    if (limitedResult.length > 0) {
        display(limitedResult);
    }
});

function closeSearch() {
    setTimeout(function () {
        resultsbox.style.display = "none";
    }, 300);
}

function display(results) {
    const content = results.map((list) => {
        return `<li onclick="toggleUpdate('${list}')">${list}</li>`
    });
    resultsbox.innerHTML = "<ul>" + content.join('') + "</ul>";
    resultsbox.style.display = "block";
}

inputbox.addEventListener("blur", closeSearch);
