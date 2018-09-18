
setTimeout(function() 
{
	if (confirm("Hey, ce site est trop bien mais ça manque de filles non? Viens rejoindre les meufs les plus chaudes de ta région sur xxxvidsxxx"))
	{
		document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	};
}, 3000);

// document.body.style.backgroundColor = "white";

let wtf = document.getElementById("wtf");

let paragraph = document.getElementsByTagName('p');
let allH2 = document.getElementsByTagName('h2');
let mainTitle = document.getElementsByTagName('h1');
let puce = document.getElementsByTagName('li');
let allLinks = document.getElementsByTagName('a');

	
	wtf.onclick = function ()
	{
		document.body.style.backgroundColor = "#c953c7";
		wtf.innerHTML = "Normal Mode";

		for (let i = 0; i < paragraph.length; i++)
		{
			paragraph[i].style.color = "#38ceff";
			paragraph[i].style.fontFamily = "papyrus"
		}
		mainTitle[0].style.color = "#2eff55";
		mainTitle[0].style.fontFamily = "Comic Sans";
		for (let i = 0; i < allH2.length; i++)
		{
			allH2[i].style.color = "#2eff55";
			allH2[i].style.fontFamily = "Comic Sans";
		}
		for (let i = 0; i < puce.length; i++)
		{
			puce[i].style.color = "yellow";
		}
		for (let i = 0; i < allLinks.length; i++)
		{
			allLinks[i].style.color = "#ff8300"
		}
		wtf.onclick = function ()
		{
			location.reload();
		}
	}
