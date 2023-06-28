let input = document.getElementById('search-input');

// Add an event listener for the keypress event
document.addEventListener("keypress", function(event) {
  // Check if the focused element is the input element and if the pressed key is Enter (key code 13)
  if (document.activeElement === input && event.keyCode === 13) {
    // Call your function here
    if(input.value.length > 0) searchAndLoad(input.value);
  }
});

// Define your function to be executed
async function searchAndLoad(query) {
  let res = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBrL1L1LWSvVqg_Uja8qO2vtxTvgo-L9xw&cx=a39f89260b35547c0&q=${query}`).then(res=>{
    if(res.ok) return res.json();
    else throw new Error('Something went wrong');
  })

  if(res.items.length > 0) {
    document.getElementById('search-results').innerHTML = '';
    res.items.forEach(item=>{
      let div = document.createElement('div');
      div.classList.add('search-result');
      div.innerHTML = `
        <div class="search-result-header">
          <span class="favicon"><img src="${item.pagemap.cse_thumbnail[0].src?item.pagemap.cse_thumbnail[0].src:'other-assets/icons/favicon-empty.svg'}" alt="${item.title}"></span>
          <h4>${item.pagemap.metatags[0]['og:site_name']?item.pagemap.metatags[0]['og:site_name']:item.displayLink}</h4>      
        </div>
        <a href="${item.link}" target="_self">
          <h2>${item.title}</h3>
        </a>
        <p>${item.snippet}</p>
      `;
      document.getElementById('search-results').appendChild(div);
    })
  }else{
    document.getElementById('search-results').innerHTML = '<h3>No results found</h3>';
  }
  console.log(res);
}

window.addEventListener('scroll', function() {
  var filters = document.getElementsByClassName('filters')[0];
  var rect = filters.getBoundingClientRect();
  
  if (rect.top <= 0) {
    filters.classList.add('sticky');
    filters.sty
  } else {
    filters.classList.remove('sticky');
  }

  var search = document.getElementsByClassName('search')[0];
  var searchRect = search.getBoundingClientRect();
  if(searchRect.bottom >= 0){
    filters.classList.remove('sticky');
  }
});