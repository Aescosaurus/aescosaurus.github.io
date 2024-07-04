embed_link_list =
[
	'<iframe frameborder="0" src="https://itch.io/embed-upload/3768381?color=7f9fd2" allowfullscreen="" width="980" height="688"><a href="https://aescosaurus.itch.io/upgrade-parkour">Play Upgrade Parkour on itch.io</a></iframe>',
	'<iframe frameborder="0" src="https://itch.io/embed-upload/3537229?color=19103f" allowfullscreen="" width="480" height="660"><a href="https://aescosaurus.itch.io/mech-gun">Play Mech Gun on itch.io</a></iframe>',
	'<iframe frameborder="0" src="https://itch.io/embed-upload/2603822?color=a1858d" allowfullscreen="" width="640" height="660"><a href="https://aescosaurus.itch.io/really-zoomed-in-dungeon">Play Really Zoomed-in Dungeon on itch.io</a></iframe>',
	'<iframe frameborder="0" src="https://itch.io/embed-upload/2597643?color=caa05a" allowfullscreen="" width="900" height="560"><a href="https://aescosaurus.itch.io/on-the-rails">Play On the Rails on itch.io</a></iframe>',
	'<iframe frameborder="0" src="https://itch.io/embed-upload/2462744?color=90ff8b" allowfullscreen="" width="980" height="688"><a href="https://aescosaurus.itch.io/laggy-racing">Play Laggy Racing on itch.io</a></iframe>',
	'<iframe frameborder="0" src="https://itch.io/embed-upload/1763279?color=321434" allowfullscreen="" width="960" height="560"><a href="https://aescosaurus.itch.io/space-force">Play S.P.A.C.E. Force on itch.io</a></iframe>',
	'<iframe frameborder="0" src="https://itch.io/embed-upload/10837284?color=6a6997" allowfullscreen="" width="960" height="560"><a href="https://aescosaurus.itch.io/space-tether">Play Space Tether on itch.io</a></iframe>',
]

title_list =
[
	'<a href="https://aescosaurus.itch.io/upgrade-parkour">Upgrade Parkour</a>',
	'<a href="https://aescosaurus.itch.io/mech-gun">Mech Gun</a>',
	'<a href="https://aescosaurus.itch.io/really-zoomed-in-dungeon">Really Zoomed-in Dungeon</a>',
	'<a href="https://aescosaurus.itch.io/on-the-rails">On the Rails</a>',
	'<a href="https://aescosaurus.itch.io/laggy-racing">Laggy Racing</a>',
	'<a href="https://aescosaurus.itch.io/space-force">S.P.A.C.E. Force</a>',
	'<a href="https://aescosaurus.itch.io/space-tether">Space Tether</a>',
]

desc_list=
[
	`Capstone project developed over the course of a semester.  What started out as a bullet hell RPG transitioned into a dungeon crawler and then finally to it's current state as a parkour game.  Choose between different levels and upgrades to get stronger over the course of the game!  All the coding, voxel models, music, and sound effects were done by me!  Started 1-21-2021, published 5-3-2021.  (<a href="https://github.com/Aescosaurus/Upgrade-Parkour">Link to repo</a>)`,
	`Made in a few days for the ScoreSpace Jam with the theme of combining. I initially had trouble with the theme but eventually settled on an idea I was happy with. Made with JavaScript and HTML5 canvas. (<a href="https://github.com/Aescosaurus/mech-gun">Link to repo</a>)`,
	`Gamejam game made in a couple weeks for lowrez jam, which meant it had to be 64x64 resolution. I started out with a management game where you cook and serve food but ended up pivoting, it ended up as a top down dungeon crawler focused on resource management and dungeon exploration. Made in JavaScript and HTML5 canvas. (<a href="https://github.com/Aescosaurus/Really-Zoomed-in-Dungeon">Link to repo</a>)`,
	`Top down local co-op puzzle game about rearranging train tracks. Made in JavaScript in a few days for Multiplayer Jam with the theme of desert. (<a href="https://github.com/Aescosaurus/On-the-Rails">Link to repo</a>)`,
	`Racing game made in Unity for GMTK Jam 2020 with the theme Out of Control. For this game I designed a different AI to drive each of 8 cars. (<a href="https://github.com/Aescosaurus/Laggy-Racing">Link to repo</a>)`,
	`Made in a week for UDC Jam 11, with the theme being Space. As I was working with a teammate we used Unity. This project required a lot of AI work for each of the three bosses and their multiple phases. (<a href="https://github.com/Aescosaurus/S.P.A.C.E.-Force">Link to repo</a>)`,
	`A precision platformer with puzzles based around navigating obstacles while staying within range of your tether. Features a custom level editing system and level loader with various puzzle elements. This project focused heavily on level design, and introducing new mechanics to the player organically.`,
]

embed_order =
[
	6,0,3,1,5,4,2
]

let cur_item = 0
let demo_div = null
let title_div = null
let desc_div = null

function load_cur_game()
{
	if( demo_div )
	{
		const list_spot = embed_order[cur_item]
		demo_div.innerHTML = embed_link_list[list_spot]
		title_div.innerHTML = title_list[list_spot]
		desc_div.innerHTML = desc_list[list_spot]
	}
}

function goto_next_game()
{
	++cur_item
	if( cur_item > embed_link_list.length - 1 ) cur_item = 0
	load_cur_game()
}

function goto_prev_game()
{
	--cur_item
	if( cur_item < 0 ) cur_item = embed_link_list.length - 1
	load_cur_game()
}

window.onload = function()
{
	demo_div = document.getElementById( "actual_game" )
	title_div = document.getElementById( "actual_title" )
	desc_div = document.getElementById( "actual_text" )
	load_cur_game()
}