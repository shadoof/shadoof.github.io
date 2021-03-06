
// Menu - page control
$(document).on('click','.menu .select-items div',function(){
  $('.page, .menu li').removeClass('current');
  $('#page'+ this.innerText).addClass('current')
})

$(document).on('click','.menu .button',function(){
  const currentIdx = parseInt($('.menu .select-selected')[0].innerText);
  const totalPageL = $('.menu select option').length;
  let newIdx = 1;

  if( this.innerText == ">>") { // next page
    newIdx = currentIdx < totalPageL ? currentIdx + 1 : 1;
  } else { // previous page
    newIdx = currentIdx > 1 ? currentIdx - 1 : totalPageL;
  }
  $('.page, .menu li').removeClass('current');
  $('#page'+ newIdx).addClass('current');

  // update select
  $('.select-selected')[0].innerText = newIdx;
  $('.select-items div').removeClass('same-as-selected');
  $('.select-items div').removeClass('hide');
  $('.select-items div:nth(' + (newIdx-1) +')').addClass('same-as-selected');
})


function postMenuPopulation() {
  // https://www.w3schools.com/howto/howto_custom_select.asp
  var x, i, j, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 0; j < selElmnt.length; j++) {
      /* For each option in the original select element,
      create a new DIV that will act as an option item: */
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          /* When an item is clicked, update the original select box,
          and the selected item: */
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", (i== 0 ? "hide ": "")+ "same-as-selected");
              break;
            }
          }
          h.click();
      });
      if (j == 0) {
        c.setAttribute("class", "same-as-selected hide");
      }
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      /* When the select box is clicked, close any other select boxes,
      and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }

}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);
