charset = "euc-kr"
		
var todayPhoto = [
                 {"title":"�� ������ħ��, �Ӵ���� �ᴫ �����..��, ���ٹ��¼� ","id":"20120516082207657"}
                ,{"title":"�� ������ħ�� ���� �´� ��ȫ�� �Ѹ�","id":"20120516092003892"}
                ,{"title":"�� ������ ħf��, ������ ����� '9�ò� Ż���� �� ����'","id":"20120516092003892"}
                ,{"title":"�� ħ���ϴµ� '�������� ����'��.. '�ܽŵ� ���� ����'","id":"20120516092003892"}
                ,{"title":"�� ħ������ 140��.. ���߰� ���̵� �Ҵ� ����","id":"20120516092003892"}
                ,{"title":"�� �������� �� ���ö� �л��� �޷��� Ż�� ���� ����..","id":"20120516092003892"} 
                ,{"title":"�� '���� �¸�' 46�� �� 2���� �۵�","id":"20120516092003892"}
                ,{"title":"�� [�ܵ�]���� '�����浹 �ƴϴ�.. ���� ����'","id":"20120516092003892"} 
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