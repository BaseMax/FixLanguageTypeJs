l/**
*
* @Name : FixLanguageType.js
* @Version : 1.1
* @Programmer : Max
* @Date : 2018-06-26-2018-07-02
* @Released under : https://github.com/BaseMax/FixLanguageTypeJs/blob/master/LICENSE
* @Repository : https://github.com/BaseMax/FixLanguageTypeJs
*
**/
;(function(window,document)
{
	"use strict";
	/**
	* @function keymap
	*
	* @goal : Keymap of en , fa
	*
	* @return array (key=en , value=fa)
	**/
	var keymap=
	[
		["q","ض"],
		["w","ص"],
		["e","ث"],
		["r","ق"],
		["t","ف"],
		["y","غ"],
		["u","ع"],
		["i","ه"],
		["o","خ"],
		["p","ح"],
		["[","ج"],
		["]","چ"],
		["a","ش"],
		["s","س"],
		["d","ی"],
		["m","ئ"],
		["f","ب"],
		["g","ل"],
		["h","ا"],
		["j","ت"],
		["k","ن"],
		["l","م"],
		[";","ک"],
		["\"","گ"],
		["z","ظ"],
		["x","ط"],
		["c","ز"],
		["C","ژ"],
		["v","ر"],
		["b","ذ"],
		["n","د"],
		["\\","پ"],
		["`","پ"],
		[",","و"]
	];
	/**
	* @function replaceAll
	*
	* @goal : Replace All
	*
	* @return string
	**/
	var replaceAll=function(input,str1,str2,ignore)
	{
 		return input.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
	}
	/**
	* @function en_fa
	*
	* @goal : Change `en` character to `fa` character in self keymap!
	*
	* @return void
	**/
	var en_fa=function(value)
	{
		//var keys=Object.keys(keymap);
		//var values=Object.values(keymap);
		//for(var i=0;i<keys.length;i++)
		//	value=replaceAll(value,keys[i],values[i]);
		for(var i=0;i<keymap.length;i++)
		{
			//console.log(keymap[i]);
			value=replaceAll(value,keymap[i][0],keymap[i][1]);
		}
		return value;
	};
	/**
	* @function fa_en
	*
	* @goal : Change `fa` character to `en` character in self keymap!
	*
	* @return void
	**/
	var fa_en=function(value)
	{
		//var keys=Object.values(keymap);
		//var values=Object.keys(keymap);
		//for(var i=0;i<keys.length;i++)
		//	value=replaceAll(value,keys[i],values[i]);
		for(var i=0;i<keymap.length;i++)
		{
			//console.log(keymap[i]);
			value=replaceAll(value,keymap[i][1],keymap[i][0]);
		}
		return value;
	};
	/**
	* @struct fixtype
	*
	* @goal : access to public functions
	*
	* @return struct
	**/
	window.fixtype=
	{
		en_fa:en_fa,
		fa_en:fa_en,
	};
	/**
	* @struct onload
	*
	* @goal : set onclick and events after page load...
	*
	* @return void
	**/
	window.addEventListener("load",function()
	{
		//soon
	},false);
}(window,document));
