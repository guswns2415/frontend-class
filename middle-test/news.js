charset = "euc-kr"
 		
 var todayPhoto = [
                  {"title":"♣ 여객선침몰, 朴대통령 뜬눈 밤새워..靑, 비상근무태세 ","id":"20120516082207657"}
                 ,{"title":"♣ 여객선침몰 물병 맞는 정홍원 총리","id":"20120516092003892"}
                 ,{"title":"♣ 여객선 침몰, 여객선 기관원 '9시께 탈출한 것 같다'","id":"20120516092003892"}
                 ,{"title":"♣ 침몰하는데 '움직이지 말라'고.. '외신들 집중 보도'","id":"20120516092003892"}
                 ,{"title":"♣ 침몰까지 140分.. 눈뜨고 아이들 잃는 나라","id":"20120516092003892"}
                 ,{"title":"♣ 가슴까지 물 차올라도 학생들 달래며 탈출 돕다 끝내..","id":"20120516092003892"} 
                 ,{"title":"♣ '구명 뗏목' 46개 중 2개만 작동","id":"20120516092003892"}
                 ,{"title":"♣ [단독]선장 '암초충돌 아니다.. 원인 몰라'","id":"20120516092003892"} 
 ];
var board = document.getElementById('main');

var str = '';
var imgs = [];

for(var i=0; i<todayPhoto.length; i++){    
  imgs.push(todayPhoto[i].title);
}

var imgs1 = imgs.splice(0,3);
var img1String = imgs1.join("");
var img2String = imgs.join("");

board.innerHTML = "<div id ='d1'>"+img1String+"</div> "
				+ "<div id='d2' class='hide'>"+img2String+"</div>";

var More = document.getElementById("more");

var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
More.addEventListener("click", down);

function down(){	
	if(d2.className==="hide"){		
		d1.className = "";
		d2.className = "";
	}
	else{		
		d1.className = "";
		d2.className = "hide";	}
	}