const page = document.body.dataset.page;

let whiteMode = localStorage.getItem("whiteMode")
const switch_theme = document.querySelector('.switch-theme')

  //Switch Between Dark and White mode
const addWhiteMode = () => {
  document.body.classList.add('whiteMode')
  localStorage.setItem('whiteMode', 'active')
}

const removeDarkMode = () => {
  document.body.classList.remove("whiteMode")
  localStorage.removeItem('whiteMode', null)
}

if (whiteMode === "active")   addWhiteMode();

switch_theme.addEventListener("click", () => {
  whiteMode = localStorage.getItem("whiteMode")
  whiteMode !== 'active' ? addWhiteMode() : removeDarkMode()
})
  
if (page === "advanced") {

}


else {
  const closing = document.querySelector('.close');
  const searchInput = document.querySelector('.input');  
  const searchButton = document.querySelector('.search-icon');
  const logo = document.querySelector('.logo');
  const googleSearchButton = document.querySelectorAll('.searchbutton');
  const IamFeelingLucky = document.getElementById('iamLucky');
  
  closing.style.display = "none";
  
  // Remove Text from bar
  closing.addEventListener('click', () =>{
    searchInput.value = "";
    closing.style.display = "none";
    logo.style.display = "block";
  })
  
  // Prevent search button from submit when filed is empty
  const checkInput = (e) => {
    let value = searchInput.value.trim();
    if (value === "")   e.preventDefault();
  }
  googleSearchButton.forEach((e) => 
  {
      e.addEventListener('click', checkInput);
  })
  searchButton.addEventListener('click', checkInput);
  
  // Appear cloaing cross when writing somehting
  const showClosingTab = () => {
    if (searchInput.value !== "") {
      closing.style.display = "block";
      logo.style.display = "none";
    } 
    else {
      closing.style.display = "none";
      logo.style.display = "block";
    }
  }
  
  searchInput.addEventListener("input", showClosingTab);
  
  //Handling I'm Felling Lucky
  const baseUrl ="https://www.google.com/search?btnI=I%27m+Feeling+Lucky&iflsig=AOw8s4IAAAAAaVB7oNhul9ltN8SekuCswCWGnFhJ0rjJ";
  
  IamFeelingLucky.addEventListener('click', (e) => {
    e.preventDefault();
    value = searchInput.value;
    const url = baseUrl + "&q=" + encodeURIComponent(value);
    window.location.href = url; 
  })
}
