window.onload = function () {
  let colorArray2 = document.body.getElementsByClassName("boxdiv");
  for (let i = 0; i < colorArray2.length; i++) {
    var innerHtml = "";
    for (let j = 1; j <= 100; j++) {
      innerHtml += '<div class="boxtikcit" id=' + j + '>' + j + '</div>';




    }
    colorArray2[i].innerHTML = innerHtml;
  }
  let container = document.querySelector('.boxdiv');
  container.addEventListener('click', function (event) {
    if (event.target.classList.contains('boxtikcit')) {
      event.target.classList.toggle('active');
    }


  });
if(container.className=='boxtikcit active'){
  console.log(container.className);
}



};