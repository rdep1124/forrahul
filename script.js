const text_change = [
    '.graf_1',
    '.graf_2',
    '.graf_3',
];

// let gif_container = document.getElementById('gif');

const scroller = new Scroller({
    scene: document.querySelectorAll('.scene'), //call it whatever but this is the class we use in html
    container: document.querySelector('.container'),
  });

scroller.on('scene:enter', d => {
    // Add an active class to the div when it crosses in
    d.element.classList.add('active');    
    // change the text in the graphc container when it comes in
  //   graphic_container_text.innerText = text_change[d.index];
  });

scroller.on('scene:exit', d => {
    // remove active class when it leaves 
    d.element.classList.remove('active');
  });

// scroller.on('init', () => {
//     // intializes the scroller, 
//     console.log('Everything is ready to go!');
//   });
  
  // starts up the IntersectionObserver
scroller.init();
  