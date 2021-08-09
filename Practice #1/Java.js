
//Function to create child in Div(by ID)
function upload() 
{
    //Pointing on Div by id
    //Creating Img from link if none will just place "dummy" img
    let appendDiv = document.getElementById("mylife");
    let newImage = document.createElement("img");
    let url = document.getElementById("input1").value;
        
    newImage.src = url;
    newImage.width = "250";
    newImage.height = "200";
  
    appendDiv.appendChild(newImage);

    //Creating Paragraph (Discription) like image above
    //taking text from Discription and putting inside paragraph below img
    let text = document.getElementById("input2").value;
    let p = document.createElement("p")
    p.innerText = text;
    appendDiv.appendChild(p);
}
//Function to Change Size from small to normal in Toggle mode
function allImagesSmall() 
{
    let newImage = document.getElementsByTagName("img");
    for (let index = 0; index < newImage.length; index++) 
    {
        newImage[index].classList.toggle("small")
    }
}
//Function to Change Size from large to normal in Toggle mode
function allImagesLarge() 
{
    let newImage = document.getElementsByTagName("img");
    for (let index = 0; index < newImage.length; index++) 
    {
        newImage[index].classList.toggle("large")
    }
}
