var header = document.getElementById('HEADER');

window.addEventListener('scroll', ()=> {

	var scroll = window.scrollY

	if (scroll>0) {
		header.style.backgroundColor = '#121212'
	} else {
		
 	}

})

const galleryContainer = document.querySelector(`.gallery-container`);
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['anterior', 'siguiente'];
const galleryItems = document.querySelectorAll('.gallery-item');


class Carousel {

	constructor(container, items, controls){
		this.carouselContainer = container;
		this.carouselControls = controls;
		this.carouselArray = [...items];
	}
updateGallery() {
  for (let i = 1; i <= 24; i++) {
    this.carouselArray.forEach(el => {
      el.classList.remove(`gallery-item-${i}`);
    });
  }

  this.carouselArray.slice(0, 5).forEach((el, i) => {
    el.classList.add(`gallery-item-${i + 1}`);
  });
}

	setCurrentState(direction){
		if (direction.className == 'gallery-controls-anterior'){
			this.carouselArray.unshift(this.carouselArray.pop());
		}else{
			this.carouselArray.push(this.carouselArray.shift());
		}
		this.updateGallery();
	}

	setControls() {
		this.carouselControls.forEach(control => {
			galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
			document.querySelector(`.gallery-controls-${control}`).innerText = `${control}`;
		});
	}


	useControls(){
		const triggers = [...galleryControlsContainer.childNodes];
		triggers.forEach(control => {
			control.addEventListener('click', e => {
				e.preventDefault();
				this.setCurrentState(control);
			});
		});
	}
}


const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();