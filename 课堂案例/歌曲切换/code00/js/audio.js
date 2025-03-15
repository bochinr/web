/*第6单元 项目6-3 音乐播放器 js文件*/
var audio = document.getElementById('audio');
var playpause = document.getElementById("play-pause");
var volume = document.getElementById("volume");
var songName = document.getElementById("songName")
var author = document.getElementById("author")
var lyrics = document.getElementsByClassName("lyrics")
audio.controls = false;
var k = 0,
	flag = 1;
var arr = [{
	src: 'audio/我记得.mp3',
	sName: '我记得',
	aName: '赵雷',
	ly:  '歌词1'
}, {
	src: 'audio/陪你度过漫长岁月.mp3',
	sName: '陪你度过漫长岁月',
	aName: '陈奕迅',
	ly:  '歌词2'
}, {
	src: 'audio/隐形的翅膀.mp3',
	sName: '隐形的翅膀',
	aName: '张韶涵',
	ly:  '歌词3'
}];

//定义控制歌曲播放暂停的方法：togglePlayPause()。
//该方法中在切换播放暂停的同时需要切换字体图标和按钮的title属性值
function togglePlayPause() {
	if (audio.paused || audio.ended) {
		playpause.title = "暂停";
		playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
		audio.play();
	} else {
		playpause.title = "播放";
		playpause.innerHTML = '<i class="fa fa-play fa-3x"></i>';
		audio.pause();
	}
}
//定义设置音量的方法：setVolume()，设置Audio对象的volume属性等于range控件的值
function setVolume() {
	audio.volume = volume.value;
}

function nextSong() {
		k++;
		if (k > 2) {
			k = 0;
		}

	sPlay(k)

}

function nextSong2() {
	k--;
	if (k < 0) {
		k = 2;
	}
	sPlay(k)
}



function sPlay(k) {
	audio.setAttribute('src', arr[k].src);
	songName.innerText = arr[k].sName;
	author.innerText = arr[k].aName;
	lyrics[0].innerText = arr[k].ly;
	playpause.title = "暂停";
	playpause.innerHTML = '<i class="fa fa-pause fa-3x"></i>';
	audio.play();

}
