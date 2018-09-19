
setTimeout(function() 
{
	if (confirm("Hey, ce site est trop bien mais ça manque de filles non? Viens rejoindre les meufs les plus chaudes de ta région sur xxxvidsxxx"))
	{
		document.location.href="https://www.youtube.com/watch?v=dQw4w9WgXcQ";
	};
}, 10000);

let wtf = document.getElementById("wtf");

let p = document.getElementsByTagName('p');
let h2 = document.getElementsByTagName('h2');
let h1 = document.getElementsByTagName('h1');
let li = document.getElementsByTagName('li');
let a = document.getElementsByTagName('a');

	wtf.onclick = function ()
	{
		document.body.style.backgroundColor = "#c953c7";
		wtf.innerHTML = "Normal Mode";

		for (let i = 0; i < p.length; i++)
		{
			p[i].style.color = "#38ceff";
			p[i].style.fontFamily = "papyrus"
		}
		h1[0].style.color = "#2eff55";
		h1[0].style.fontFamily = "Comic Sans";
		for (let i = 0; i < h2.length; i++)
		{
			h2[i].style.color = "#2eff55";
			h2[i].style.fontFamily = "Comic Sans";
		}
		for (let i = 0; i < li.length; i++)
		{
			li[i].style.color = "yellow";
		}
		for (let i = 0; i < a.length; i++)
		{
			a[i].style.color = "#ff8300"
		}
		wtf.onclick = function ()
		{
			location.reload();
		}
	}
