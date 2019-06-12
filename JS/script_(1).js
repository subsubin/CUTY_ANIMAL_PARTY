        function button1_click(){
            
            alert("멍뭉이를 선택하셨습니다. \n선택한 캐릭터와 함께 게임이 시작됩니다!");
            var nic = prompt("당신의 닉네임을 작성하시오.", " ");
        
            com = parseInt(Math.random()*3+1);
            var me = prompt("당신(" + nic + ")이 낼 동작을 선택하세요.\n1.가위  2.바위  3.보", " ");
            
            if(me==com){
               alert("컴퓨터와 " + nic + "는(은) 같은 동작을 내어서 비겼습니다.\n다음에는 이겨보세요!"); 
            } else if(me < com){
                alert(nic + "는(은) 컴퓨터를 이겼습니다!!\n다음에도 이겨보세요!");
            }else
                alert(nic + "는(은) 컴퓨터에게 졌습니다...\n다음에는 이겨보세요!");
        }//function_button1_click
         
        function button2_click(){
            
            alert("냥냥이를 선택하셨습니다. \n선택한 캐릭터와 함께 게임이 시작됩니다!");
            var nic = prompt("당신의 닉네임을 작성하시오.", " ");
        
            com = parseInt(Math.random()*3+1);
            var me = prompt("당신(" + nic + ") 이낼 동작을 선택하세요.\n1.가위  2.바위  3.보", " ");
            
            if(me==com){
               alert("컴퓨터와 " + nic + "는(은) 같은 동작을 내어서 비겼습니다.\n다음에는 이겨보세요!"); 
            } else if(me < com){
                alert(nic + "는(은) 컴퓨터를 이겼습니다!!\n다음에도 이겨보세요!");
            }else
                alert(nic + "는(은) 컴퓨터에게 졌습니다...\n다음에는 이겨보세요!");
        }//function_button2_click
         
        function button3_click(){
            
            alert("토갱이를 선택하셨습니다. \n선택한 캐릭터와 함께 게임이 시작됩니다!");
            var nic = prompt("당신의 닉네임을 작성하시오.", " ");
        
            com = parseInt(Math.random()*3+1);
            var me = prompt("당신(" + nic + ") 이낼 동작을 선택하세요.\n1.가위  2.바위  3.보", " ");
            
            if(me==com){
               alert("컴퓨터와 " + nic + "는(은) 같은 동작을 내어서 비겼습니다.\n다음에는 이겨보세요!"); 
            } else if(me < com){
                alert(nic + "는(은) 컴퓨터를 이겼습니다!!\n다음에도 이겨보세요!");
            }else
                alert(nic + "는(은) 컴퓨터에게 졌습니다...\n다음에는 이겨보세요!");
        }//function_button3_click