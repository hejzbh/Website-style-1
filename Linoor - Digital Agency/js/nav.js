const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const businessLi = document.querySelectorAll('.business-li');
const businessFloat = document.querySelectorAll('.business-float');

const workLi = document.querySelectorAll('.work-li');
const All = document.querySelectorAll('.product');
const branding = document.querySelector('.branding-product');
const graphics = document.querySelector('.graphics');
const span = document.querySelectorAll('.sub');

burger.addEventListener('click', function(){
 navLinks.classList.toggle('active-nav');
});

function toggle (){
    if (businessFloat[0].classList.contains('float-active'))
    businessFloat[0].classList.toggle('float-active');
}

for (let i=0; i<businessLi.length; i++) {
    for (let j=0; j<businessFloat.length; j++) {
         businessLi[0].addEventListener('click', function(){
             businessFloat[0].classList.toggle('float-active');
             if (businessFloat[1].classList.contains('float-active'))
             businessFloat[1].classList.toggle('float-active');
             if (businessFloat[2].classList.contains('float-active'))
             businessFloat[2].classList.toggle('float-active');
         });
         businessLi[1].addEventListener('click', function(){
            businessFloat[1].classList.toggle('float-active');
            toggle ();
            if (businessFloat[2].classList.contains('float-active'))
            businessFloat[2].classList.toggle('float-active');
        });
        businessLi[2].addEventListener('click', function(){
            businessFloat[2].classList.toggle('float-active');
            toggle ();
            if (businessFloat[1].classList.contains('float-active'))
            businessFloat[1].classList.toggle('float-active');
        });
       
    }
};
function maxheight () {
    businessFloat[i].classList.toggle('float-active');
}

for (let i=0; i<workLi.length; i++) {
    workLi[0].addEventListener('click', function(){
        for (let j=0; j<All.length; j++){
           
            All[j].classList.remove('hidden');
        }

        for (let s=0; s<span.length; s++){
          span[0].textContent=`{${All.length}}`;
        }

        
      
    });
 workLi[1].addEventListener('click', function(){
     for (let j=0; j<All.length; j++){
        All[j].classList.add('hidden');
         if (All[j].classList.contains('branding-product'))
         All[j].classList.remove('hidden');
     }
 });

 workLi[2].addEventListener('click', function(){
    for (let j=0; j<All.length; j++){
        All[j].classList.add('hidden');
        if (All[j].classList.contains('graphics'))
        All[j].classList.remove('hidden');
    }
});

workLi[3].addEventListener('click', function(){
    for (let j=0; j<All.length; j++){
        All[j].classList.add('hidden');
        if (All[j].classList.contains('illustration'))
        All[j].classList.remove('hidden');
    }
});

workLi[4].addEventListener('click', function(){
    for (let j=0; j<All.length; j++){
        All[j].classList.add('hidden');
        if (All[j].classList.contains('photography'))
        All[j].classList.remove('hidden');
    }
});

workLi[5].addEventListener('click', function(){
    for (let j=0; j<All.length; j++){
        All[j].classList.add('hidden');
        if (All[j].classList.contains('web-design'))
        All[j].classList.remove('hidden');
    }
});
}


//-------------------------------
const productContainers = [...document.querySelectorAll('.slider')];
const nxtBtn = [...document.querySelectorAll('.next')];
const preBtn = [...document.querySelectorAll('.prev')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener('click', () => {
          item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
  })
})

//-------------------------------
const agencyLi = document.querySelectorAll('.agency-li');
const agencyText = document.querySelectorAll('.agency-text');

for (let i=0; i<agencyLi.length; i++){
    for (let x=0; x<agencyText.length; x++) {
        agencyLi[0].addEventListener('click', function(){
         agencyText[0].classList.remove('hidden');
         agencyText[1].classList.add('hidden');
         agencyText[2].classList.add('hidden');
        });
        agencyLi[1].addEventListener('click', function(){
            agencyText[0].classList.add('hidden');
            agencyText[1].classList.remove('hidden');
            agencyText[2].classList.add('hidden');
           });
           agencyLi[2].addEventListener('click', function(){
            agencyText[0].classList.add('hidden');
            agencyText[1].classList.add('hidden');
            agencyText[2].classList.remove('hidden');
           });
    };

    agencyLi[0].addEventListener('click', function(){
     agencyLi[0].classList.toggle('after-div');
     agencyLi[1].classList.remove('after-div');
     agencyLi[2].classList.remove('after-div');
    });
    agencyLi[1].addEventListener('click', function(){
        agencyLi[1].classList.toggle('after-div');
        agencyLi[0].classList.remove('after-div');
        agencyLi[2].classList.remove('after-div');
       });
       agencyLi[2].addEventListener('click', function(){
        agencyLi[2].classList.toggle('after-div');
        agencyLi[0].classList.remove('after-div');
        agencyLi[1].classList.remove('after-div');
       });

  
}

 