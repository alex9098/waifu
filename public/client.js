window.onload = pics();
async function pics() {
    const data = await fetch('/pics');
    const res = await data.json();
    console.log(res);
    const para = document.createElement("img");
    para.src = res.url;
    document.body.appendChild(para);
    const btn =   document.querySelector("button")
   
   btn.addEventListener("click" , () =>{
        console.log('clicked');
        downloadImage(res.url , "waifu.jpg");
    })
   
}



    function downloadImage(url, filename) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
      

        headers.append('Origin','http://localhost:3000');
    
       
        fetch(url ,{
            mode: 'no-cors',
            credentials: 'include',
            headers: headers})
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
      }

   



