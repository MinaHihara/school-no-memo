enchant ();

//ウィンドウ画面がロードされた直後に、ブロック内の処理を行います

window.onload = function () {
//6001000
            //ゲームオブジェクトをサイズ480*480ピクセルで作成します
            var GameW=600;
            var GameH=1000;
            var game = new Game (GameW, GameH);
            //一秒間に15回に画面の更新頻度を設定します
            game.fps = 15;
            
            document.body.style.backgroundColor="green";
            //必要な画像類ロード

            game.preload("biribiri.png");

            game.preload("wood.png");

            game.preload("wood1.png");

            game.preload("player1.png");  
            
            game.preload("replay.png"); 

            game.preload("miss.png");
            
            game.preload("clear.png");

            game.preload("gameover.png");

            game.preload("setumei.png");

            game.preload("gameend.png");
            //ゲームがロードされた際にブロック内の処理を行います
            game.onload = function () {

            //alert(' なにか ');
          
            //prayer Sprite

        //game.onload
              //ライフ
              var lifeLabel = new LifeLabel(450, 10,4);
              //X,Y,ライフ 
              lifeLabel.life=3; 
              game.rootScene.addChild(lifeLabel);
              
            
            var stage=0;


            player = new Sprite (60, 100);
            player.image = game.assets['player1.png']; 
            player.frame = 1;

            player.x = 0;

            player.y = 0;

            //ドラッグ部分

            originX=0;

            originY=0;
            
            missbiri=0;

            sinda = 0;

            player.addEventListener(enchant.Event.TOUCH_START, function(e){

                originX = e.x - this.x;
                originY = e.y - this.y;
            });
            player.addEventListener(enchant.Event.TOUCH_MOVE, function(e){ 
               if(missbiri==0&&sinda==0)
               {
                   if(this.x < e.x - originX)
                   {
                       this.scaleX=1;
                   }
                   else if(this.x > e.x - originX)
                   {
                       this.scaleX=-1;
                   }
                   
                  this.x = e.x - originX;
                  this.y = e.y - originY;
                  this.frame = game.frame % 2;
               }
            });
            player.addEventListener(enchant.Event.TOUCH_END, function(e){ 
                this.scaleX=1;
                this.scaleY=1;
                missbiri=0;
                player.x = 0;
                player.y = 0;
            });
        
            //goal
                game.rootScene.addChild(player);
                
                straw = new Sprite(73, 111);

                straw.image = game.assets["wood1.png"];

                straw.x = 0;

                straw.y = 900;
                game.rootScene.addChild(straw);
                //毎フレームに辺り判定を行って、当たってたら削除してます
                straw.addEventListener('enterframe', function()
                {
                  if (this.intersect(player))
                  {
                    stage++;
                    //alert(stage);
                    ViewItem2.x = GameW;
                    ViewItem2.tl.moveBy(-500, 0, 500).delay(500).moveBy(-500, 0, 500).delay(500);
                    player.x = 0;
                    player.y = 0;
                    missbiri=1;
                    
                    if(stage==0)
                    {//stage1
                        for (i = 0; i < 4; i++)
                        {
                        array1[i].x = 0+i*230;
                        array1[i].y = 100;
                        array1[i].tl.clear(); 
                        }
                        for (i = 0; i < 4; i++)
                        {
                        array2[i].x = 0+i*230;
                        array2[i].y = 330;
                        array2[i].tl.clear(); 
                        }
                        for (i = 0; i < 4; i++)
                        {
                        array3[i].x = 0+i*230;
                        array3[i].y = 570;
                        array3[i].tl.clear(); 
                        }
                      
                    }
                    else if(stage==1)
                    {//stage2
                        for (i = 0; i < 4; i++)
                        {
                            array1[i].x = 0+i*100;
                            array1[i].y = 100;
                          array1[i].tl.clear(); 
                          array1[i].tl.setTimeBased();
                          array1[i].tl.moveBy(200, 0, 1000).delay(500).
                          moveBy(-200, 0, 1000).delay(500).loop();
                        }
                        for (i = 0; i < 4; i++)
                        {
                          array2[i].x = 0+i*160;
                          array2[i].y = 330;
                          array2[i].tl.clear(); 
                        }
                        for (i = 0; i < 4; i++)
                        {
                          array3[i].x = 200+i*100;
                          array3[i].y = 570;
                          
                          array3[i].tl.setTimeBased();
                          array3[i].tl.moveBy(-200, 0, 1000).delay(500).
                          moveBy(200, 0, 1000).delay(500).loop();
                        }
                        //alert('unko');
                    }
                    else if(stage==2)
                    {
                    //stage3 ugoke
                     
                      for (i = 0; i < 4; i++)
                      {
                          array1[i].x = 0+i*100;
                          array1[i].y = 110;
                          
                          array1[i].tl.setTimeBased();
                          array1[i].tl.moveBy(-200, 0, 1000).delay(500).
                          moveBy(200, 0, 1000).delay(500).loop();
                      }
                      for (i = 0; i < 4; i++)
                      {
                        array2[i].x = 200+i*100;
                        array2[i].y = 340;
                        
                          array2[i].tl.setTimeBased();
                          array2[i].tl.moveBy(-200, 0, 1000).delay(500).
                          moveBy(200, 0, 1000).delay(500).loop();
                      }
                      for (i = 0; i < 4; i++)
                        {
                          array3[i].x = 0+i*100;
                          array3[i].y = 480;
                          
                          array3[i].tl.setTimeBased();
                          array3[i].tl.moveBy(-200, 0, 1000).delay(500).
                          moveBy(200, 0, 1000).delay(500).loop();
                        }
                    }else if(stage==3)
                    {
                    //stage4 ugoke
                     
                      for (i = 0; i < 4; i++)
                      {
                          array1[i].x = 0+i*100;
                          array1[i].y = 110;
                          array1[i].frame=0;
                          game.rootScene.addChild(array1[i]);
                          //ここから移動とか
                          array1[i].tl.setTimeBased();
                          
                          array1[i].tl.setTimeBased();
                          array1[i].tl.moveBy(-200, 0, 1000).delay(500).
                          moveBy(200, 0, 1000).delay(500).loop();
                      }
                      for (i = 0; i < 4; i++)
                      {
                        array2[i].x = 200+i*100;
                        array2[i].y = 340;
                        array2[i].frame=0;
                          game.rootScene.addChild(array2[i]);
                          array2[i].tl.clear(); 
                          //ここから移動とか
                      }
                      for (i = 0; i < 4; i++)
                        {
                          array3[i].x = 0+i*100;
                          array3[i].y = 480;

                          array3[i].frame=0;
                          game.rootScene.addChild(array3[i]);
                          
                          array3[i].tl.setTimeBased();
                          array3[i].tl.moveBy(-200, 0, 1000).delay(500).
                          moveBy(200, 0, 1000).delay(500).loop();
                          //ここから移動とか 
                        }
                    }
                    else if(stage==4)
                    {
                      ViewItem4.x =200;
                      ViewItem4.y =400;

                      ViewItem3.x =300;
                      ViewItem3.y =600;
                    }
                  }
                });
                 //ループ　ビリビリwood
              var array1 = new Array(4);

              for (i = 0; i < 4; i++){
              
                array1[i] = new Sprite(73, 111);

                array1[i].image = game.assets["wood.png"];

                array1[i].x = 0+i*230;

                array1[i].y = 100;


                game.rootScene.addChild(array1[i]);
                array1[i].addEventListener('enterframe', function(){
                    this.frame = game.frame % 2;
                  if (this.intersect(player))
                  {
                  lifeLabel.life--;
                  if(lifeLabel.life<=0)
                  {
                   
                    ViewItem1.x = 200;
                    ViewItem1.y = 400;
                    
                    ViewItem3.x = 200;
                    ViewItem3.y = 600;
                    missbiri=1;
                    sinda=1;
                    //restartのやつ
                  }
                  else{
                  //ミスが動く処理
                    ViewIte.x = GameW;
                    ViewIte.tl.moveBy(-500, 0, 500).delay(500).moveBy(-500, 0, 500).delay(500);
                    player.x = 0;
                    player.y = 0;
                    missbiri=1;
                  }
                  }
                  
            });//ここまで
              }
              //ループ　ビリビリwood2

               var array2 = new Array(4);

              for (i = 0; i < 4; i++){
              
                array2[i] = new Sprite(73, 111);

                array2[i].image = game.assets["wood.png"];

                array2[i].x = 0+i*230;

                array2[i].y = 330;


                game.rootScene.addChild(array2[i]);
                array2[i].addEventListener('enterframe', function(){
                    this.frame = game.frame % 2;
                  if (this.intersect(player))
                  { lifeLabel.life--;
                  if (lifeLabel.life<=0)
                   {
                    ViewItem1.x = 200;
                    ViewItem1.y = 400;
                    
                    ViewItem3.x = 200;
                    ViewItem3.y = 600;
                    missbiri=1;
                    sinda=1;
                    //restartのやつ
                  }
                  else{
                  //ミスが動く処理
                    ViewIte.x = GameW;
                    ViewIte.tl.moveBy(-500, 0, 500).delay(500).moveBy(-500, 0, 500).delay(500);
                    player.x = 0;
                    player.y = 0;
                    missbiri=1;
                      }
                  }
            });//ここまで
              }
              
              //ループ　ビリビリwood2

               var array3 = new Array(4);

              for (i = 0; i < 4; i++){
              
            array3[i] = new Sprite(73, 111);

                array3[i].image = game.assets["wood.png"];

                array3[i].x = 0+i*230;

                array3[i].y = 570;


                game.rootScene.addChild(array3[i]);
                array3[i].addEventListener('enterframe', function(){
                    this.frame = game.frame % 2;
                  if (this.intersect(player))
                  {lifeLabel.life--;
                  if (lifeLabel.life<=0)
                   {
                    ViewItem1.x = 200;
                    ViewItem1.y = 400;
                    
                    ViewItem3.x = 200;
                    ViewItem3.y = 600;
                    missbiri=1;
                    sinda=1;
                    //restartのやつ
                  }
                  else{
                  //ミスが動く処理
                    ViewIte.x = GameW;
                    ViewIte.tl.moveBy(-500, 0, 500).delay(500).moveBy(-500, 0, 500).delay(500);
                    player.x = 0;
                    player.y = 0;
                    missbiri=1;
                      }
                  }
            });//ここまで
             }
              

                //ミス;
                //時間で移動とか
                //まずは表示
                var ViewIte=new Sprite(300,200);
                ViewIte.image=game.assets['miss.png'];
                ViewIte.frame=0;
                ViewIte.x = GameW;
                game.rootScene.addChild(ViewIte);
                //ここから移動とかmissを動かすよ
                ViewIte.tl.setTimeBased(); 
                
                //ゲームオーバー;
                //時間で移動とか
                //まずは表示
                var ViewItem1=new Sprite(189,97);
                ViewItem1.image=game.assets['gameover.png'];
                ViewItem1.frame=0;
                ViewItem1.x = GameW;
                game.rootScene.addChild(ViewItem1);
                //ここから移動とかmissを動かすよ
                ViewItem1.tl.setTimeBased();

                //クリア;
                //時間で移動とか
                //まずは表示
                var ViewItem2=new Sprite(189,97);
                ViewItem2.image=game.assets['clear.png'];
                ViewItem2.frame=0;
                ViewItem2.x = GameW;
                game.rootScene.addChild(ViewItem2);
                //ここから移動とかmissを動かすよ
                ViewItem2.tl.setTimeBased(); 

                //リプレイボタン;
                //時間で移動とか
                //まずは表示
                var ViewItem3=new Sprite(200,100);
                ViewItem3.image=game.assets['replay.png'];
                ViewItem3.frame=0;
                ViewItem3.x = GameW;
                game.rootScene.addChild(ViewItem3);
                //ここから移動とかmissを動かすよ
               
                ViewItem3.tl.setTimeBased();
                ViewItem3.addEventListener(enchant.Event.TOUCH_END,function(e)
                  { 
                    //stage1
                        for (i = 0; i < 4; i++)
                        {
                        array1[i].x = 0+i*230;
                        array1[i].y = 100;
                        array1[i].tl.clear(); 
                        }
                        for (i = 0; i < 4; i++)
                        {
                        array2[i].x = 0+i*230;
                        array2[i].y = 330;
                        array2[i].tl.clear(); 
                        }
                        for (i = 0; i < 4; i++)
                        {
                        array3[i].x = 0+i*230;
                        array3[i].y = 570;
                        array3[i].tl.clear(); 
                        }
                        
                    stage=0;
                    originX=0;
                    originY=0;
                    missbiri=0;
                    sinda = 0;
                    ViewItem3.x = GameW;
                    ViewItem1.x = GameW;
                    ViewItem4.x = GameW;
                    lifeLabel.life=3;
                  });
                  
                  //ゲームエンド;
                //時間で移動とか
                //まずは表示
                var ViewItem4=new Sprite(189,97);
                ViewItem4.image=game.assets['gameend.png'];
                ViewItem4.frame=0;
                ViewItem4.x = GameW;
                game.rootScene.addChild(ViewItem4);
                //ここから移動とかmissを動かすよ
                ViewItem4.tl.setTimeBased();
                


        };
    //ゲームを開始します
    game.start();
    
}//window.onload
