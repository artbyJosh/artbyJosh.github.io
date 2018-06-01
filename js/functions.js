// Carousel Script //

/* Span Variables */
var page1 = document.getElementById("pg1");
var page2 = document.getElementById("pg2");
var page3 = document.getElementById("pg3");

/* h Variables */
var opening = document.getElementsByTagName("h1")[0];
var supporting = document.getElementsByTagName("h3")[0];

/* carousel variable */
var bg1 = document.getElementsByClassName("bg1")[0];
var bg2 = document.getElementsByClassName("bg2")[0];
var bg3 = document.getElementsByClassName("bg3")[0];

/* Nav Variables */
var a1 = document.getElementsByTagName("a")[0];
var a2 = document.getElementsByTagName("a")[1];
var a3 = document.getElementsByTagName("a")[2];



/* Slider Variables*/
var i = 0;
var images = [];
var time = 4000;
images[0],images[1],images[2] = "";


function slider()
{
  if(i < images.length)
  {
    if(i == 0)
    {
      changePage1();
      i++;
      setTimeout("slider()", time);
    }
    else if(i == 1)
    {
      changePage2()
      i++;
      setTimeout("slider()", time);
    }
    else if(i == 2)
    {
      changePage3()
      i= 0;
      setTimeout("slider()", time);
    }
  }
  console.log("change pic!");
}

slider();

function changePage1()
{
    bg2.style.opacity = "0";
    bg3.style.opacity = "0";
    opening.style.color = "#086665";
    supporting.style.color = "#086665";
    page1.style.backgroundColor = "#086665";
    page3.style.backgroundColor = "#ccc";
    page2.style.backgroundColor = "#ccc";
    a1.style.color = "#068665";
    a2.style.color = "#068665";
    a3.style.color = "#068665";
}

function changePage2()
{
    bg2.style.opacity = "1";
    bg3.style.opacity = "0";
    opening.style.color = "#ffffff";
    supporting.style.color = "#ffffff";
    page1.style.backgroundColor = "#ffffff";
    page3.style.backgroundColor = "#ffffff";
    page2.style.backgroundColor = "#086665";
    a1.style.color = "#ffffff";
    a2.style.color = "#ffffff";
    a3.style.color = "#ffffff";
}

function changePage3()
{
  page1.style.backgroundColor = "#ffffff";
  page2.style.backgroundColor = "#ffffff";
  page3.style.backgroundColor = "#086665";
  opening.style.color = "#ffffff";
  supporting.style.color = "#ffffff";
  page1.style.backgroundColor = "#ffffff";
  bg3.style.opacity = "1";
  bg2.style.opacity = "0";
  a1.style.color = "#ffffff";
  a2.style.color = "#ffffff";
  a3.style.color = "#ffffff";
}
