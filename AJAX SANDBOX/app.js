document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest()

    // Open
    xhr.open('GET', 'data.txt', true);

   // console.log('READYSATE', xhr.readyState);

   // Optional - Used for spinners/loader
   xhr.onprogress = function() {

   }

   xhr.onerror = function(){
    console.log('Request error...');


   }

    xhr.onload = function(){
      console.log('READYSATE', xhr.readyState);

        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById('output').innerHTML = `
            <h1>
            ${this.responseText}</h1>`;

        }
    }

    // xhr.onreadystatechange = function() {
    //  console.log('READYSATE', xhr.readyState);
    //     if(this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();

   
}