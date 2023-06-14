const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const firstBtn = document.querySelector("#first-front-btn")
const lastBtn = document.querySelector("#last-front-btn")
const zoomInBtn = document.querySelector("#zoomIn-btn")
const zoomOutBtn = document.querySelector("#zoomOut-btn")
const book = document.querySelector("#libro");
const content = document.querySelector("#content")

const menuBtn = document.querySelector("#indice-btn")
const menu = document.querySelector("#caja-indice")

const tporBtn = document.querySelector("#tportada")
const tconBtn = document.querySelector("#tcontra")
tconBtn.addEventListener('click', (e) => {
    if(currentLocation<26){
        paper1.classList.add("arrastre");
        paper1.style.zIndex=1;

        paper2.classList.add("arrastre");
        paper2.style.zIndex=2;

        paper3.classList.add("arrastre");
        paper3.style.zIndex=3;

            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;

                paper5.classList.add("arrastre");
                paper5.style.zIndex = 5;
           
   
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
  
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;

            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;

            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;


            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;

            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
 
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;

            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;

            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;

            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;

            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;

            paper17.classList.add("arrastre");
            paper17.style.zIndex = 17;

            paper18.classList.add("arrastre");
            paper18.style.zIndex = 18;
 
            paper19.classList.add("arrastre");
            paper19.style.zIndex = 19;

            paper20.classList.add("arrastre");
            paper20.style.zIndex = 20;

            paper21.classList.add("arrastre");
            paper21.style.zIndex = 21;

            paper22.classList.add("arrastre");
            paper22.style.zIndex = 22;

            paper23.classList.add("arrastre");
            paper23.style.zIndex = 23;

            paper24.classList.add("arrastre");
            paper24.style.zIndex = 24;
            paper25.classList.add("arrastre");
            paper25.style.zIndex = 25;
            closeBook(false);
            currentLocation=26;
    }
})
tporBtn.addEventListener('click', (e) => {
    if(currentLocation>1){
        closeBook(true);
        paper1.classList.remove("arrastre");
                paper1.style.zIndex = 25;
          
                paper2.classList.remove("arrastre");
                paper2.style.zIndex = 24;
       
                paper3.classList.remove("arrastre");
                paper3.style.zIndex = 23;
         
                paper4.classList.remove("arrastre");
                paper4.style.zIndex = 22;
           
                paper5.classList.remove("arrastre");
                paper5.style.zIndex = 21;
          
                paper6.classList.remove("arrastre");
                paper6.style.zIndex = 20;
           
                paper7.classList.remove("arrastre");
                paper7.style.zIndex = 19;
        
                paper8.classList.remove("arrastre");
                paper8.style.zIndex = 18;
          
                paper9.classList.remove("arrastre");
                paper9.style.zIndex = 17;
           
                paper10.classList.remove("arrastre");
                paper10.style.zIndex = 16;
        
                paper11.classList.remove("arrastre");
                paper11.style.zIndex = 15;
          
                paper12.classList.remove("arrastre");
                paper12.style.zIndex = 14;
          
                paper13.classList.remove("arrastre");
                paper13.style.zIndex = 13;
           
                paper14.classList.remove("arrastre");
                paper14.style.zIndex = 12;
          
                paper15.classList.remove("arrastre");
                paper15.style.zIndex = 11;
           
                paper16.classList.remove("arrastre");
                paper16.style.zIndex = 10;
         
                paper17.classList.remove("arrastre");
                paper17.style.zIndex = 9;
          
                paper18.classList.remove("arrastre");
                paper18.style.zIndex = 8;
        
                paper19.classList.remove("arrastre");
                paper19.style.zIndex = 7;
         
                paper20.classList.remove("arrastre");
                paper20.style.zIndex = 6;
        
                paper21.classList.remove("arrastre");
                paper21.style.zIndex = 5;
          
                paper22.classList.remove("arrastre");
                paper22.style.zIndex = 4;
         
                paper23.classList.remove("arrastre");
                paper23.style.zIndex = 3;
        
                paper24.classList.remove("arrastre");
                paper24.style.zIndex = 2;
                paper25.classList.remove("arrastre");
                paper25.style.zIndex = 1;
                currentLocation=1;
    }
})

const t1Btn = document.querySelector("#t1")
const t2Btn = document.querySelector("#t2")
const t3Btn = document.querySelector("#t3")
const t4Btn = document.querySelector("#t4")
const t5Btn = document.querySelector("#t5")
const t6Btn = document.querySelector("#t6")
const t7Btn = document.querySelector("#t7")
const t8Btn = document.querySelector("#t8")
const t9Btn = document.querySelector("#t9")
const t10Btn = document.querySelector("#t10")
const t11Btn = document.querySelector("#t11")
const t12Btn = document.querySelector("#t12")
const t13Btn = document.querySelector("#t13")
const t14Btn = document.querySelector("#t14")
const t15Btn = document.querySelector("#t15")
const t16Btn = document.querySelector("#t16")
const t17Btn = document.querySelector("#t17")
const t18Btn = document.querySelector("#t18")
const t19Btn = document.querySelector("#t19")
const t20Btn = document.querySelector("#t20")
const t21Btn = document.querySelector("#t21")
const t22Btn = document.querySelector("#t22")
const t23Btn = document.querySelector("#t23")
const t24Btn = document.querySelector("#t24")
const t25Btn = document.querySelector("#t25")



menuBtn.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
});

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11");
const paper12 = document.querySelector("#p12");
const paper13 = document.querySelector("#p13");
const paper14 = document.querySelector("#p14");
const paper15 = document.querySelector("#p15");
const paper16 = document.querySelector("#p16");
const paper17 = document.querySelector("#p17");
const paper18 = document.querySelector("#p18");
const paper19 = document.querySelector("#p19");
const paper20 = document.querySelector("#p20");
const paper21 = document.querySelector("#p21");
const paper22 = document.querySelector("#p22");
const paper23 = document.querySelector("#p23");
const paper24 = document.querySelector("#p24");
const paper25 = document.querySelector("#p25");

nextBtn.addEventListener("click",goNextPage);
prevBtn.addEventListener("click",goPrevPage);
firstBtn.addEventListener("click",goFirstPage);
lastBtn.addEventListener("click",goLastPage);
zoomInBtn.addEventListener("click",zoomIn);
zoomOutBtn.addEventListener("click",zoomOut);

let currentLocation = 1;
let numOfPaper = 25;
let maxLocation = numOfPaper + 1; 
let zoomLevel=1;

function zoomIn() {
    zoomLevel+=0.1
    content.style.transform="scale("+zoomLevel+") translateY(10%)";
}
function zoomOut() {
    zoomLevel-=0.1
    content.style.transform="scale("+zoomLevel+")";
}


function goFirstPage() {
    if(currentLocation>1){
        closeBook(true);
                paper1.classList.remove("arrastre");
                paper1.style.zIndex = 25;
          
                paper2.classList.remove("arrastre");
                paper2.style.zIndex = 24;
       
                paper3.classList.remove("arrastre");
                paper3.style.zIndex = 23;
         
                paper4.classList.remove("arrastre");
                paper4.style.zIndex = 22;
           
                paper5.classList.remove("arrastre");
                paper5.style.zIndex = 21;
          
                paper6.classList.remove("arrastre");
                paper6.style.zIndex = 20;
           
                paper7.classList.remove("arrastre");
                paper7.style.zIndex = 19;
        
                paper8.classList.remove("arrastre");
                paper8.style.zIndex = 18;
          
                paper9.classList.remove("arrastre");
                paper9.style.zIndex = 17;
           
                paper10.classList.remove("arrastre");
                paper10.style.zIndex = 16;
        
                paper11.classList.remove("arrastre");
                paper11.style.zIndex = 15;
          
                paper12.classList.remove("arrastre");
                paper12.style.zIndex = 14;
          
                paper13.classList.remove("arrastre");
                paper13.style.zIndex = 13;
           
                paper14.classList.remove("arrastre");
                paper14.style.zIndex = 12;
          
                paper15.classList.remove("arrastre");
                paper15.style.zIndex = 11;
           
                paper16.classList.remove("arrastre");
                paper16.style.zIndex = 10;
         
                paper17.classList.remove("arrastre");
                paper17.style.zIndex = 9;
          
                paper18.classList.remove("arrastre");
                paper18.style.zIndex = 8;
        
                paper19.classList.remove("arrastre");
                paper19.style.zIndex = 7;
         
                paper20.classList.remove("arrastre");
                paper20.style.zIndex = 6;
        
                paper21.classList.remove("arrastre");
                paper21.style.zIndex = 5;
          
                paper22.classList.remove("arrastre");
                paper22.style.zIndex = 4;
         
                paper23.classList.remove("arrastre");
                paper23.style.zIndex = 3;
        
                paper24.classList.remove("arrastre");
                paper24.style.zIndex = 2;
                paper25.classList.remove("arrastre");
                paper25.style.zIndex = 1;
    }
    currentLocation=1
}
function goLastPage() {
    if(currentLocation<maxLocation){
        paper1.classList.add("arrastre");
        paper1.style.zIndex=1;

        paper2.classList.add("arrastre");
        paper2.style.zIndex=2;

        paper3.classList.add("arrastre");
        paper3.style.zIndex=3;

            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;

                paper5.classList.add("arrastre");
                paper5.style.zIndex = 5;
           
   
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
  
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;

            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;

            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;


            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;

            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
 
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;

            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;

            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;

            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;

            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;

            paper17.classList.add("arrastre");
            paper17.style.zIndex = 17;

            paper18.classList.add("arrastre");
            paper18.style.zIndex = 18;
 
            paper19.classList.add("arrastre");
            paper19.style.zIndex = 19;

            paper20.classList.add("arrastre");
            paper20.style.zIndex = 20;

            paper21.classList.add("arrastre");
            paper21.style.zIndex = 21;

            paper22.classList.add("arrastre");
            paper22.style.zIndex = 22;

            paper23.classList.add("arrastre");
            paper23.style.zIndex = 23;

            paper24.classList.add("arrastre");
            paper24.style.zIndex = 24;
            paper25.classList.add("arrastre");
            paper25.style.zIndex = 25;
            closeBook(false);

    }
    currentLocation=26
}
function openBook() {
    book.style.transform="translateX(50%)";
}
function closeBook(isAtBeggining) {
    if(isAtBeggining){
        book.style.transform="translateX(0%)"
    }else{
        book.style.transform="translateX(100%)"
    }
}

function goPrevPage() {
    if(currentLocation > 1){
        switch(currentLocation){
            case 2:
                closeBook(true);
                paper1.classList.remove("arrastre");
                paper1.style.zIndex = 25;
                break;
            case 3:
                paper2.classList.remove("arrastre");
                paper2.style.zIndex = 24;
                break;
            case 4:
                paper3.classList.remove("arrastre");
                paper3.style.zIndex = 23;
                break;
            case 5:
                paper4.classList.remove("arrastre");
                paper4.style.zIndex = 22;
            break;
            case 6:
                paper5.classList.remove("arrastre");
                paper5.style.zIndex = 21;
            break;
            case 7:
                paper6.classList.remove("arrastre");
                paper6.style.zIndex = 20;
            break;
            case 8:
                paper7.classList.remove("arrastre");
                paper7.style.zIndex = 19;
            break;
            case 9:
                paper8.classList.remove("arrastre");
                paper8.style.zIndex = 18;
            break;
            case 10:
                paper9.classList.remove("arrastre");
                paper9.style.zIndex = 17;
            break;
            case 11:
                paper10.classList.remove("arrastre");
                paper10.style.zIndex = 16;
            break;
            case 12:
                paper11.classList.remove("arrastre");
                paper11.style.zIndex = 15;
            break; 
            case 13:
                paper12.classList.remove("arrastre");
                paper12.style.zIndex = 14;
            break; 
            case 14:
                paper13.classList.remove("arrastre");
                paper13.style.zIndex = 13;
            break;        
            case 15:
                paper14.classList.remove("arrastre");
                paper14.style.zIndex = 12;
            break;   
            case 16:
                paper15.classList.remove("arrastre");
                paper15.style.zIndex = 11;
            break;   
            case 17:
                paper16.classList.remove("arrastre");
                paper16.style.zIndex = 10;
            break;   
            case 18:
                paper17.classList.remove("arrastre");
                paper17.style.zIndex = 9;
            break;   
            case 19:
                paper18.classList.remove("arrastre");
                paper18.style.zIndex = 8;
            break;   
            case 20:
                paper19.classList.remove("arrastre");
                paper19.style.zIndex = 7;
            break;   
            case 21:
                paper20.classList.remove("arrastre");
                paper20.style.zIndex = 6;
            break;
            case 22:
                paper21.classList.remove("arrastre");
                paper21.style.zIndex = 5;
            break;   
            case 23:
                paper22.classList.remove("arrastre");
                paper22.style.zIndex = 4;
            break;                       
            case 24:
                paper23.classList.remove("arrastre");
                paper23.style.zIndex = 3;
            break;        
            case 25:
                paper24.classList.remove("arrastre");
                paper24.style.zIndex = 2;
            break;        
            case 26:
                openBook();
                paper25.classList.remove("arrastre");
                paper25.style.zIndex = 1;
            break;        
            default:
                throw new Error("Estado Irreconocible");
        }
        currentLocation--;
    }
}
t1Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>2){
            paper2.classList.remove("arrastre");
            paper2.style.zIndex=24;
            paper3.classList.remove("arrastre");
            paper3.style.zIndex = 23;
     
            paper4.classList.remove("arrastre");
            paper4.style.zIndex = 22;
       
            paper5.classList.remove("arrastre");
            paper5.style.zIndex = 21;
      
            paper6.classList.remove("arrastre");
            paper6.style.zIndex = 20;
       
            paper7.classList.remove("arrastre");
            paper7.style.zIndex = 19;
    
            paper8.classList.remove("arrastre");
            paper8.style.zIndex = 18;
      
            paper9.classList.remove("arrastre");
            paper9.style.zIndex = 17;
       
            paper10.classList.remove("arrastre");
            paper10.style.zIndex = 16;
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
        }
        currentLocation=2;
    }
})
t2Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>3){
            paper3.classList.remove("arrastre");
            paper3.style.zIndex = 23;
     
            paper4.classList.remove("arrastre");
            paper4.style.zIndex = 22;
       
            paper5.classList.remove("arrastre");
            paper5.style.zIndex = 21;
      
            paper6.classList.remove("arrastre");
            paper6.style.zIndex = 20;
       
            paper7.classList.remove("arrastre");
            paper7.style.zIndex = 19;
    
            paper8.classList.remove("arrastre");
            paper8.style.zIndex = 18;
      
            paper9.classList.remove("arrastre");
            paper9.style.zIndex = 17;
       
            paper10.classList.remove("arrastre");
            paper10.style.zIndex = 16;
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
        }
        currentLocation=3;
    }
})
t3Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>4){
     
            paper4.classList.remove("arrastre");
            paper4.style.zIndex = 22;
       
            paper5.classList.remove("arrastre");
            paper5.style.zIndex = 21;
      
            paper6.classList.remove("arrastre");
            paper6.style.zIndex = 20;
       
            paper7.classList.remove("arrastre");
            paper7.style.zIndex = 19;
    
            paper8.classList.remove("arrastre");
            paper8.style.zIndex = 18;
      
            paper9.classList.remove("arrastre");
            paper9.style.zIndex = 17;
       
            paper10.classList.remove("arrastre");
            paper10.style.zIndex = 16;
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
        }
        currentLocation=4;
    }
})
t4Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>5){
    
       
            paper5.classList.remove("arrastre");
            paper5.style.zIndex = 21;
      
            paper6.classList.remove("arrastre");
            paper6.style.zIndex = 20;
       
            paper7.classList.remove("arrastre");
            paper7.style.zIndex = 19;
    
            paper8.classList.remove("arrastre");
            paper8.style.zIndex = 18;
      
            paper9.classList.remove("arrastre");
            paper9.style.zIndex = 17;
       
            paper10.classList.remove("arrastre");
            paper10.style.zIndex = 16;
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
        }
        currentLocation=5;
    }
})
t5Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>6){

            paper6.classList.remove("arrastre");
            paper6.style.zIndex = 20;
       
            paper7.classList.remove("arrastre");
            paper7.style.zIndex = 19;
    
            paper8.classList.remove("arrastre");
            paper8.style.zIndex = 18;
      
            paper9.classList.remove("arrastre");
            paper9.style.zIndex = 17;
       
            paper10.classList.remove("arrastre");
            paper10.style.zIndex = 16;
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
        }
        currentLocation=6;
    }
})
t6Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>6){

       
            paper7.classList.remove("arrastre");
            paper7.style.zIndex = 19;
    
            paper8.classList.remove("arrastre");
            paper8.style.zIndex = 18;
      
            paper9.classList.remove("arrastre");
            paper9.style.zIndex = 17;
       
            paper10.classList.remove("arrastre");
            paper10.style.zIndex = 16;
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.remove("arrastre");
            paper4.style.zIndex = 4;
                
       
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
        }
        currentLocation=7;
    }
})
t7Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>7){
    
       
            
    
            paper8.classList.remove("arrastre");
            paper8.style.zIndex = 18;
      
            paper9.classList.remove("arrastre");
            paper9.style.zIndex = 17;
       
            paper10.classList.remove("arrastre");
            paper10.style.zIndex = 16;
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
        }
        currentLocation=8;
    }
})
t8Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>8){
    
       
          
      
            paper9.classList.remove("arrastre");
            paper9.style.zIndex = 17;
       
            paper10.classList.remove("arrastre");
            paper10.style.zIndex = 16;
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
        }
        currentLocation=9;
    }
})
t9Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>9){
    
       
           
       
            paper10.classList.remove("arrastre");
            paper10.style.zIndex = 16;
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
        }
        currentLocation=10;
    }
})
t10Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>10){
    
       
         
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
        }
        currentLocation=11;
    }
})
t11Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>11){
    
       
          
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
        }
        currentLocation=12;
    }
})
t12Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>12){
    
       
         
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
        }
        currentLocation=13;
    }
})
t13Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>13){
    
       
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
        }
        currentLocation=14;
    }
})
t14Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>14){
    
       
           
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
        }
        currentLocation=15;
    }
})
t15Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>15){
    
       
            
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
      
            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;
        }
        currentLocation=16;
    }
})
t16Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>16){
    
       
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
      
            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;
       
            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;
     
        }
        currentLocation=17;
    }
})
t17Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>17){
    
       
          
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
      
            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;
       
            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;
     
            paper17.classList.add("arrastre");
            paper17.style.zIndex = 17;
        }
        currentLocation=18;
    }
})
t18Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>18){
    
       
          
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
    
            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;
       
            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;
     
            paper17.classList.add("arrastre");
            paper17.style.zIndex = 17;
      
            paper18.classList.add("arrastre");
            paper18.style.zIndex = 18;
    
        }
        currentLocation=19;
    }
})
t19Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>19){
    
       
           
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
      
            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;
       
            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;
     
            paper17.classList.add("arrastre");
            paper17.style.zIndex = 17;
      
            paper18.classList.add("arrastre");
            paper18.style.zIndex = 18;
    
            paper19.classList.add("arrastre");
            paper19.style.zIndex = 19;
        }
        currentLocation=20;
    }
})
t20Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>20){
    
       
            
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
      
            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;

            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;
     
            paper17.classList.add("arrastre");
            paper17.style.zIndex = 17;
      
            paper18.classList.add("arrastre");
            paper18.style.zIndex = 18;
    
            paper19.classList.add("arrastre");
            paper19.style.zIndex = 19;
     
            paper20.classList.add("arrastre");
            paper20.style.zIndex = 20;
        }
        currentLocation=21;
    }
})
t21Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>21){
    
       
           
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
      
            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;
       
            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;
     
            paper17.classList.add("arrastre");
            paper17.style.zIndex = 17;
      
            paper18.classList.add("arrastre");
            paper18.style.zIndex = 18;
    
            paper19.classList.add("arrastre");
            paper19.style.zIndex = 19;
     
            paper20.classList.add("arrastre");
            paper20.style.zIndex = 20;
    
            paper21.classList.add("arrastre");
            paper21.style.zIndex = 21;
      
        }
        currentLocation=22;
    }
})
t22Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>22){
    
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            
       
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
      
            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;
       
            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;
     
            paper17.classList.add("arrastre");
            paper17.style.zIndex = 17;
      
            paper18.classList.add("arrastre");
            paper18.style.zIndex = 18;
    
            paper19.classList.add("arrastre");
            paper19.style.zIndex = 19;
     
            paper20.classList.add("arrastre");
            paper20.style.zIndex = 20;
    
            paper21.classList.add("arrastre");
            paper21.style.zIndex = 21;
      
            paper22.classList.add("arrastre");
            paper22.style.zIndex = 22;
        }
        currentLocation=23;
    }
})
t23Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>23){
    
       
           
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
      
            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;
       
            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;
     
            paper17.classList.add("arrastre");
            paper17.style.zIndex = 17;
      
            paper18.classList.add("arrastre");
            paper18.style.zIndex = 18;
    
            paper19.classList.add("arrastre");
            paper19.style.zIndex = 19;
     
            paper20.classList.add("arrastre");
            paper20.style.zIndex = 20;
    
            paper21.classList.add("arrastre");
            paper21.style.zIndex = 21;
      
            paper22.classList.add("arrastre");
            paper22.style.zIndex = 22;
     
            paper23.classList.add("arrastre");
            paper23.style.zIndex = 23;
        }
        currentLocation=24;
    }
})
t24Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>24){

            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.add("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.add("arrastre");
            paper4.style.zIndex = 4;
                
       
            paper5.classList.add("arrastre");
            paper5.style.zIndex = 5;
      
            paper6.classList.add("arrastre");
            paper6.style.zIndex = 6;
       
            paper7.classList.add("arrastre");
            paper7.style.zIndex = 7;
    
            paper8.classList.add("arrastre");
            paper8.style.zIndex = 8;
      
            paper9.classList.add("arrastre");
            paper9.style.zIndex = 9;
       
            paper10.classList.add("arrastre");
            paper10.style.zIndex = 10;
    
            paper11.classList.add("arrastre");
            paper11.style.zIndex = 11;
      
            paper12.classList.add("arrastre");
            paper12.style.zIndex = 12;
      
            paper13.classList.add("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.add("arrastre");
            paper14.style.zIndex = 14;
      
            paper15.classList.add("arrastre");
            paper15.style.zIndex = 15;
       
            paper16.classList.add("arrastre");
            paper16.style.zIndex = 16;
     
            paper17.classList.add("arrastre");
            paper17.style.zIndex = 17;
      
            paper18.classList.add("arrastre");
            paper18.style.zIndex = 18;
    
            paper19.classList.add("arrastre");
            paper19.style.zIndex = 19;
     
            paper20.classList.add("arrastre");
            paper20.style.zIndex = 20;
    
            paper21.classList.add("arrastre");
            paper21.style.zIndex = 21;
      
            paper22.classList.add("arrastre");
            paper22.style.zIndex = 22;
     
            paper23.classList.add("arrastre");
            paper23.style.zIndex = 23;
    
            paper24.classList.add("arrastre");
            paper24.style.zIndex = 24;
        }
        currentLocation=25;
    }
})
t25Btn.addEventListener('click', (e) =>{
    if(currentLocation<maxLocation||currentLocation>1){
        if(currentLocation==1||currentLocation==26){
            openBook();
        }
        if(currentLocation>2){
    
       
            paper5.classList.remove("arrastre");
            paper5.style.zIndex = 21;
      
            paper6.classList.remove("arrastre");
            paper6.style.zIndex = 20;
       
            paper7.classList.remove("arrastre");
            paper7.style.zIndex = 19;
    
            paper8.classList.remove("arrastre");
            paper8.style.zIndex = 18;
      
            paper9.classList.remove("arrastre");
            paper9.style.zIndex = 17;
       
            paper10.classList.remove("arrastre");
            paper10.style.zIndex = 16;
    
            paper11.classList.remove("arrastre");
            paper11.style.zIndex = 15;
      
            paper12.classList.remove("arrastre");
            paper12.style.zIndex = 14;
      
            paper13.classList.remove("arrastre");
            paper13.style.zIndex = 13;
       
            paper14.classList.remove("arrastre");
            paper14.style.zIndex = 12;
      
            paper15.classList.remove("arrastre");
            paper15.style.zIndex = 11;
       
            paper16.classList.remove("arrastre");
            paper16.style.zIndex = 10;
     
            paper17.classList.remove("arrastre");
            paper17.style.zIndex = 9;
      
            paper18.classList.remove("arrastre");
            paper18.style.zIndex = 8;
    
            paper19.classList.remove("arrastre");
            paper19.style.zIndex = 7;
     
            paper20.classList.remove("arrastre");
            paper20.style.zIndex = 6;
    
            paper21.classList.remove("arrastre");
            paper21.style.zIndex = 5;
      
            paper22.classList.remove("arrastre");
            paper22.style.zIndex = 4;
     
            paper23.classList.remove("arrastre");
            paper23.style.zIndex = 3;
    
            paper24.classList.remove("arrastre");
            paper24.style.zIndex = 2;
            paper25.classList.remove("arrastre");
            paper25.style.zIndex = 1;
        }else{
            paper1.classList.add("arrastre");
            paper1.style.zIndex=1;
            paper2.classList.add("arrastre");
            paper2.style.zIndex=2;
            paper3.classList.remove("arrastre");
            paper3.style.zIndex = 3;
            paper4.classList.remove("arrastre");
            paper4.style.zIndex = 4;
        }
        currentLocation=4;
    }
})
function goNextPage() {
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1:
                openBook();
                paper1.classList.add("arrastre");
                paper1.style.zIndex=1;
                break;
            case 2:
                paper2.classList.add("arrastre");
                paper2.style.zIndex=2
                break;
            case 3:
                paper3.classList.add("arrastre");
                paper3.style.zIndex=3;
                break;
                case 4:
                    paper4.classList.add("arrastre");
                    paper4.style.zIndex = 4;
                    break;
            case 5:
                        paper5.classList.add("arrastre");
                        paper5.style.zIndex = 5;
                        break;        
                case 6:
                    paper6.classList.add("arrastre");
                    paper6.style.zIndex = 6;
                break;
                case 7:
                    paper7.classList.add("arrastre");
                    paper7.style.zIndex = 7;
                break;
                case 8:
                    paper8.classList.add("arrastre");
                    paper8.style.zIndex = 8;
                break;
                case 9:
                    paper9.classList.add("arrastre");
                    paper9.style.zIndex = 9;
                break;
                case 10:
                    paper10.classList.add("arrastre");
                    paper10.style.zIndex = 10;
                break;
                case 11:
                    paper11.classList.add("arrastre");
                    paper11.style.zIndex = 11;
                break;
                case 12:
                    paper12.classList.add("arrastre");
                    paper12.style.zIndex = 12;
                break;
                case 13:
                    paper13.classList.add("arrastre");
                    paper13.style.zIndex = 13;
                break; 
                case 14:
                    paper14.classList.add("arrastre");
                    paper14.style.zIndex = 14;
                break; 
                case 15:
                    paper15.classList.add("arrastre");
                    paper15.style.zIndex = 15;
                break;        
                case 16:
                    paper16.classList.add("arrastre");
                    paper16.style.zIndex = 16;
                break;   
                case 17:
                    paper17.classList.add("arrastre");
                    paper17.style.zIndex = 17;
                break;   
                case 18:
                    paper18.classList.add("arrastre");
                    paper18.style.zIndex = 18;
                break;   
                case 19:
                    paper19.classList.add("arrastre");
                    paper19.style.zIndex = 19;
                break;   
                case 20:
                    paper20.classList.add("arrastre");
                    paper20.style.zIndex = 20;
                break;   
                case 21:
                    paper21.classList.add("arrastre");
                    paper21.style.zIndex = 21;
                break;   
                case 22:
                    paper22.classList.add("arrastre");
                    paper22.style.zIndex = 22;
                break;
                case 23:
                    paper23.classList.add("arrastre");
                    paper23.style.zIndex = 23;
                break;   
                case 24:
                    paper24.classList.add("arrastre");
                    paper24.style.zIndex = 24;
                break;                       
                case 25:
                    closeBook();
                    paper25.classList.add("arrastre");
                    paper25.style.zIndex = 25;
                break;               
            default:
                throw new Error("Estado Irreconocible");
        }
        currentLocation++;
    }
}