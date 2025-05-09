const realfilebtn = document.getElementById("upload");
const custombtn = document.getElementById("custom-btn");
const customtext = document.getElementById("custom-text");
custombtn.addEventListener("click", function() {
 realfilebtn.click();
});
 realfilebtn.addEventListener("change", function(){
   if  (realfilebtn.value) {
       customtext.innerHTML = realfilebtn.value
   }
   else {
       customtext.innerHTML = "No file choosen yet"
   }
 })