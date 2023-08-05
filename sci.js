function handleSubmit() {
  const emailValue = document.getElementById("email").value.toLocaleLowerCase();
  const errorEmail = document.getElementById("loi");
  const checkMail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  console.log("check value email", emailValue);
  const check = emailValue.match(checkMail);
  console.log("email", check);

  const phanan1 = document.querySelector(".phanan");
  console.log("check section", phanan1);
  const submitcontrol = document.querySelector(".dienemail");
  if (check) {
    phanan1.style.display = "block";
    submitcontrol.style.display = "none";
    errorEmail.innerHTML = " ";
  } else {
    errorEmail.innerHTML = "Baka ko bt nhập đúng gmail à!!!. BAKA nhập lại đê";
    console.log(errorEmail);
  }
}
//view more
function handleOnMouseOver(element) {
  const viewMore = element.querySelector(".an");
  viewMore.style.display = "inline-block";
}

function handleOnMouseOut(element) {
  const viewMore = element.querySelector(".an");
  viewMore.style.display = "none";
}

function handleViewMore(element) {
  const parentElement = element.closest(".parent");
  const viewMore = parentElement.querySelector(".control-view");
  const sectionContent = parentElement.querySelectorAll("._nd");
  if (viewMore.classList.value.includes("view-more")) {
    sectionContent.forEach((element) => {
      element.style.display = "block";
    });
    viewMore.classList.remove("view-more");
    viewMore.classList.add("less-more");
    viewMore.innerHTML = "Less more";
  } else {
    sectionContent.forEach((element) => {
      element.style.display = "none";
    });
    viewMore.classList.remove("less-more");
    viewMore.classList.add("view-more");
    viewMore.innerHTML = "View more";
  }
}
