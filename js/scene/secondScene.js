var player;
var titleText;
var coins = [];
var hitPoints = 5;
var hitPointsString = "Combo x";
var hitPointsText;
var score = 0;
var scoreString= "Combo x";
var scoreText;
var gameStarted;
var gameFinished;  ///function that calls ctascene when game is finished
var combotxt;
var cursormain;
var chainsaw;
var stungun;
var cursor2;
var grenade;
var timedEvent;
var timedEvent1;
var timedDestroy;
var ctabutton;
var stunguncta;
var saw;
var grenade2;
var x = 160;
var y = 300;
var cx;
var cy;
var rotation;
var text1;
var combotxtgr;
var isClicking = false;
var swipeDirection;
var Bodies;
var circleA;
var compoundBody;
var playercollider;
var pairs;
var bodyA;
var bodyB;
var chainsawBody;
var melonBody;
var chainsawSprite;
var melonSprite;
var grenadeBody;
var playerBody;
var playerSprite;
var grenadeSprite;
var circleB;
var circleC;
var grenadecount =  0;
var newcount= 0;
var platform;
var chainsawCollider;
var melonCollider;
var melonCollider2;
var melonCollider3;
var melonCollider4;
var coinCollider;
var coinCollider1;
var coinCollider2;
var coinCollider3;
var coinCollider4;
var coinCollider5;
var coinCollider6;
var coinCollider7;
var coinCollider8;
var coinCollider9;
var sawcompoundBody;
var meloncompoundBody;
var coincompoundBody;
var coincompoundBody1;
var coincompoundBody2;
var coincompoundBody3;
var coincompoundBody4;
var coincompoundBody5;
var coincompoundBody6;
var coincompoundBody7;
var coincompoundBody8;
var coincompoundBody9;
var star;
var ellipse;
var finger;
var config17;
var config18;
var config19;
var config20;
var pyy;  //player coordinate var
var pxx;
var mainsawCollider;
var coin;
var coin1;
var coin2;
var coin3;
var coin4;
var coin5;
var coin6;
var coin7;
var coin8;
var coin9;
var group1;  //collision group
var tutorialText;
var taptut;
var tapndrag;
var tapndrag1;
var newco= '#00FF00';
var layer;
var holdndrag;
var hitCount=0;
var leftcollider;
var rightcollider;



//---------------------------------------MAINSCENE-------------------------------------//

var mainScene = new  Phaser.Class({


    Extends: Phaser.Scene,
    initialize:
    
    function mainScene(){
        Phaser.Scene.call(this,{key:'mainScene'});
    },


    init: function(){
        //  Inject our CSS
        var element = document.createElement('style');

        document.head.appendChild(element);

        var sheet = element.sheet;

        var styles = '@font-face { font-family: "troika"; src: url("assets/fonts/troika.otf") format("opentype"); }\n';

        sheet.insertRule(styles, 0);

    },

    preload: function(){

         //load cursor
         this.load.image('cursor', 'assets/coursour.png');
         //load bg and player
         this.load.image('background', 'assets/BG.png');
         //load melon player and saw
         this.load.image('melon', 'assets/melon.png');
         this.load.image('saw', 'assets/chainsaw.png');
         this.load.image('saw-img', 'assets/chainsaw-img.png');
         //load grenade-img
         this.load.image('grenade-img', 'assets/grenade-img.png');
         this.load.image('grenade', 'assets/grenade.png');
         //load groound for body
         //this.load.image('ground', 'assets/gun.png');
         //load cursorup
         this.load.image('cursorup', 'assets/coursourup.png');
         //load web-font
         this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
         //load spritesheet for grenade animation
         this.load.spritesheet('explosion', 'assets/grenadeanim.png', {frameWidth:161,frameHeight:161});
         //load gold coin
         this.load.image('goldcoin', 'assets/goldcoin.png');
         //load stun gun
         this.load.image('stun-gun', 'assets/plasma-gun.png');
         //load CTA-button
         this.load.image('cta-button', 'assets/cta-button.png');
         //load platform to game
         this.load.image('platform', 'assets/platform2.png');
         //load tap animator
         this.load.spritesheet('tapanim', 'assets/tapfinal.png',{frameWidth:100,frameHeight:120});
         //load pointer anim
         this.load.spritesheet('pointeranim', 'assets/pointerfinal.png', {frameWidth:120,frameHeight:120})
         //load ellipse
         this.load.image('ellipse', 'assets/ellipse.png');
         //load tap finger
         this.load.image('tap', 'assets/tap.png');
        
    },

    create: function(){

        var add = this.add;

        WebFont.load({
            google: {
                families: [ 'Poppins', 'troika' ]
            },
            active: function (){
                
                titleText = add.text(60,40,'KICK THE MELON',
                {fontFamily:'troika',fontStyle:'normal',fontWeight:900,fontSize:30,lineHeight:30,
                color:'#FFFFFF',textAlign:'centre'}).setShadow(0,4,'#7B140D',0);
                //this.text.setBorder(4,'solid','#A2180F');
                add.text(185, 295, 'select weapon', { fontFamily: 'troika', fontSize: 20, color: '#92BC00',fontWeight:900 }).setShadow(2, 2, "#333333", 2, false, true);
                tapndrag = add.text(135, 90, 'Tap and Drag', { fontFamily: 'troika', fontSize: 20, color: '#92BC00',fontWeight:900 }).setShadow(2, 2, "#333333", 2, false, true);
                tapndrag.setVisible(false);
            }
        });

        //environment bounds
        this.matter.world.setBounds();


        //config for tap-animation
        const config13 = {
            key: 'animate',
            frames: 'tapanim',
            frameRate: 4,
            repeat: -1,
            //yoyo: true
        }

        //config for the pointer anim
        const config14 = {
            key: 'pointer',
            frames: 'pointeranim',
            frameRate: 4,
            repeat : -1,
            yoyo: true
        }

        //load  background 
        this.add.image(0, 0, 'background');

        //load ellipse
        ellipse = this.add.image(180,100, 'ellipse');
        ellipse.setScale(0.1,0.1);
        ellipse.setVisible(false);

        //create finger
        finger = this.add.sprite(185,105, 'tap');
        finger.setScale(0.3,0.3);
        this.anims.create(config13);
        //finger.play('animate');
        finger.setVisible(false);


        //load platform to game
        platform = this.matter.add.image(110,420, 'platform', null,{restitution:0.4 ,isStatic: true});
        platform.setScale(4,3);

        //create  player sprite
        player = this.matter.add.sprite(x,y, 'melon');
        player.setScale(0.5,0.5);
        player.setFriction(0.05);
        player.setInteractive();
    

        //cursor and chainsaw button
        cursormain = this.add.sprite(280,350, 'cursor').setScale(0.3,0.3);
        //this.anims.create(config12);
        
        this.anims.create(config14);
        cursormain.play('pointer');

        chainsaw = this.add.sprite(270,420,'saw-img').setInteractive();
        chainsaw.setScale(0.3,0.3);


        //create stun gun button
        stungun = this.add.image(160,420,'stun-gun');
        stungun.setInteractive({cursor:'pointer'});
        stungun.setScale(0.7,0.7);
        stungun.setVisible(false);

        //second cursor for stungun
        cursor2 = this.add.image(160,350, 'cursor').setScale(0.15,0.15);
        cursor2.setVisible(false);

        //add grenade-img to scene/grenade button
        grenade= this.add.image(60,420,'grenade-img');
        grenade.setInteractive();
        grenade.setScale(0.3,0.3);

        console.log('mainscene');
        //create onclick function for chainsaw button
        chainsaw.on('pointerup', function(event){
            this.scene.start('chainsawScene');
            //callScene();
            tapndrag.setVisible(true);

        },this);

        //create onclick function for grenade button
        grenade.on('pointerup', function(event){
            this.scene.start('grenadeScene');
        },this);

        //generate timer
        timedEvent = this.time.addEvent({
            delay:10000,
            callback: gameF, //function to display cta scene
            callbackScope: this
            
        });
        


    },

    update: function(){

    }

});


//game finished function that calls cta scene
function gameF(){
    //console.log("CTA global scene function");
    //calls cta scene class
    //this.scene.start('grenadeScene');
}


//---------------------------------GRENADE SCENE--------------------------------------------------------//


var grenadeScene = new Phaser.Class({

    Extends: Phaser.Scene,
    initialize:

    function grenadeScene(){
        Phaser.Scene.call(this,{key:'grenadeScene'})
    },

    init: function(){
        //  Inject our CSS
        var element = document.createElement('style');

        document.head.appendChild(element);

        var sheet = element.sheet;

        var styles = '@font-face { font-family: "troika"; src: url("assets/fonts/troika.otf") format("opentype"); }\n';

        sheet.insertRule(styles, 0);

    },

    preload:function(){

        //load bg and player
        this.load.image('background', 'assets/BG.png');
        //load melon player and saw
        this.load.image('melon', 'assets/melon.png');
        this.load.image('saw', 'assets/chainsaw.png');
        this.load.image('saw-img', 'assets/chainsaw-img.png');
        //load grenade-img
        this.load.image('grenade-img', 'assets/grenade-img.png');
        this.load.image('grenade', 'assets/grenade.png');
        //load cursorup
        this.load.image('cursorup', 'assets/coursourup.png');
        //load web-font
        this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
        //load spritesheet for grenade animation
        this.load.spritesheet('explosion', 'assets/GrenadeAnim.png', {frameWidth:161,frameHeight:161});
        //load gold coin
        this.load.image('goldcoin', 'assets/goldcoin.png');
        //load stun gun
        this.load.image('stun-gun', 'assets/plasma-gun.png');
        //load CTA-button
        this.load.image('cta-button', 'assets/CTA-button.png');
        //load platform
        this.load.image('platform', 'assets/platform2.png');
        //load star for combo hits
        this.load.image('star', 'assets/Star.png');
        //load tap animator
        this.load.spritesheet('tapanim', 'assets/tapfinal.png',{frameWidth:100,frameHeight:120});
        //load pointer anim
        this.load.spritesheet('pointeranim', 'assets/pointerfinal.png', {frameWidth:120,frameHeight:120})
        //load ellipse
        this.load.image('ellipse', 'assets/Ellipse.png');
        //load tap finger
        this.load.image('tap', 'assets/tap.png');

    },

    create: function(){
        var add = this.add;

        WebFont.load({
            google: {
                families: [ 'Poppins' ]
            },
            active: function (){
                //text for displaying combo hits
                combotxtgr = add.text(80,40,scoreString + score*5,{fontFamily:'Poppins',fontStyle:'normal',fontWeight:900,fontSize:25,lineHeight:30,
                color:'#FFFFFF',textAlign:'centre'}).setShadow(0,4,'#7B140D',0);
                combotxtgr.setVisible(false);
                taptut = add.text(135, 90, 'Tap screen', { fontFamily: 'troika', fontSize: 20, color: '#92BC00',fontWeight:900 }).setShadow(2, 2, "#333333", 2, false, true);
            }
        });

        //environment bounds
        this.matter.world.setBounds();

        //load bg
        this.add.image(0, 0, 'background');

        //create star for hits
        star = this.add.image(145,50, 'star');
        star.setScale(0.5,0.5);
        star.setVisible(false)

        //load ellipse
        ellipse = this.add.image(175,135, 'ellipse');
        ellipse.setScale(0.1,0.1);

        //load platform to game
        platform = this.matter.add.image(110,420, 'platform', null,{restitution:0.4 ,isStatic: true});
        platform.setScale(4,3);

        const {Body,Bodies} = Phaser.Physics.Matter.Matter;
        
        circleB = Bodies.circle(-40,0,60,{isSensor:true,label:'left'});
        circleC = Bodies.circle(40,0,60,{isSensor:true, label:'right'});
        playercollider = Bodies.rectangle(0,0,30,150,{isSensor:false,label:'playercollider'});
        leftcollider = Bodies.circle(-40,0,25,{isSensor:true,label:'leftcentre'});
        rightcollider = Bodies.circle(40,0,25,{isSensor:true,label:'rightcentre'});

        compoundBody = Body.create({
            parts: [circleB,circleC,playercollider,leftcollider,rightcollider],
            inertia: Infinity
            
        });

        //config for tap-animation
        config17 = {
            key: 'animate',
            frames: 'tapanim',
            frameRate: 4,
            repeat: -1,
            //yoyo: true
        }

        //config for the pointer anim
        config18 = {
            key: 'pointer',
            frames: 'pointeranim',
            frameRate: 4,
            repeat : -1,
            yoyo: true
        }

        //create finger
        finger = this.add.sprite(185,145, 'tap');
        finger.setScale(0.3,0.3);
        this.anims.create(config17);
        finger.play('animate');

        //create  player sprite
        player = this.matter.add.sprite(0,0, 'melon');
        player.setScale(0.5,0.5);
        player.setInteractive();
        player.setExistingBody(compoundBody);
        player.setPosition(x,y);

        //chainsaw button
        chainsaw = this.add.sprite(270,420,'saw-img').setInteractive();
        chainsaw.setScale(0.3,0.3);

        //add grenade-img to create grenade button
        grenade= this.add.image(60,420,'grenade-img');
        grenade.setInteractive();
        grenade.setScale(0.3,0.3);

         //create stun gun button
        stungun = this.add.image(160,420,'stun-gun');
        stungun.setInteractive({cursor:'pointer'});
        stungun.setScale(0.7,0.7);
        stungun.setVisible(false);
        stungun.setInteractive = true;

        //second cursor for stungun
        cursor2 = this.add.sprite(160,350, 'cursor');
        cursor2.setVisible(false);
        
        //animation for grenade explosions
        const config1= {
            key:'explosion1',
            frames: 'explosion',
            frameRate: 8,
            //repeat: -1,
            delay: 1000,
            hideOnComplete: true,
            destroy: true 
        };

        

        //create onclick event for grenade button
        this.input.on('pointerdown', function(pointer){

            //hide finger animation and ellipse
            finger.destroy();
            ellipse.setVisible(false);
            taptut.setVisible(false);
            
            //increase score
            //score++;
            this.anims.create(config1);
            grenade2 = this.matter.add.sprite(pointer.x, pointer.y,'grenade');
            grenade2.setBody({type:'circle', radius:24});
            grenade2.setScale(0.18,0.18);
            grenade2.play('explosion1');

            //create tweens for grenade explosion
            this.tweens.add({
            targets:grenade2,
            ease:'Power1',
            duration: 2000,
            scaleX: 0.18,
            scaleY: 0.18,
            onComplete: Handler,
            onCompleteParams: [grenade2]
            })
            

        },this);

        

        //create onclick event for stungun button
        stungun.on('pointerup', function(pointer){
            this.scene.start('ctaScene');

        },this);

        //create onclick event for chainsaw button
        chainsaw.on('pointerup', function(pointer){
            this.scene.start('chainsawScene');
            grenadecount = 0;
            grenade2.destroy();
        },this);

        //collision sensor code for 2 two circles on left and rigth side
        this.matter.world.on('collisionstart', function(event){
            //player.x += 1;
            var pairs = event.pairs;
            for(var i = 0;i<pairs.length;i++){
                bodyA =pairs[i].bodyA;
                bodyB = pairs[i].bodyB;

                if(pairs[i].isSensor){
                    if(bodyA.isSensor){
                        grenadeBody = bodyB;
                        playerBody  = bodyA;
                    }
                    else if(bodyB.isSensor){
                        grenadeBody = bodyA;
                        playerBody =bodyB;
                    }

                    playerSprite = playerBody.gameObject;
                    grenadeSprite = grenadeBody.gameObject;
                    grenadecount++;

                    if(playerBody.label === 'left'){
                       playerSprite.x += 10;
                       //console.log(grenadecount);

                       //show hit count
                       combotxtgr.setVisible(true);
                       star.setVisible(true);
                       score+=1;
                       //updateScore();

                    }else if(playerBody.label === 'right'){
                        playerSprite.x -= 10;
                        score+=1;
                        //updateScore();

                        //show hit count
                        combotxtgr.setVisible(true);
                        star.setVisible(true);
                    }else if(playerBody.label === 'rightcentre'){
                        playerSprite.x -= 50;
                        score+=1;
                        //updateScore();

                        //show hit count
                        combotxtgr.setVisible(true);
                        star.setVisible(true);
                    }else if(playerBody.label === 'leftcentre'){
                        playerSprite.x += 50;
                        score+=1;
                        //updateScore();

                        //show hit count
                        combotxtgr.setVisible(true);
                        star.setVisible(true);
                    }
                    combotxtgr.text = scoreString + score*5;
                }
            }
        });

        //combotxtgr.text = scoreString + updateScore()*5;
        timedEvent1 = this.time.addEvent({
            delay:15000,
            callback: ctafunction,
            callbackScope: this
        });

        timedEvent = this.time.addEvent({
            delay:20000,
            callback: gameF2, //function to display cta scene
            callbackScope: this
            
        });

    },

    update: function(){
        //update combo hits

    }
});

function Handler(tween, targets, grenade2){
    //console.log('Handler function');
    grenade2.destroy();
}



function gameF2(){
    //start cta scene
    this.scene.start('ctaScene');
}



///---------------------------------CHAINSAW SCENE------------------------------------///



var chainsawScene = new Phaser.Class({
    Extends:Phaser.Scene,
    initialize:

    function chainsawScene(){
        Phaser.Scene.call(this,{key:'chainsawScene'})
    },


    init: function(){
        //  Inject our CSS
        var element = document.createElement('style');

        document.head.appendChild(element);

        var sheet = element.sheet;

        var styles = '@font-face { font-family: "troika"; src: url("assets/fonts/troika.otf") format("opentype"); }\n';

        sheet.insertRule(styles, 0);

    },


    preload:function(){

         //load bg and player
         this.load.image('background', 'assets/BG.png');
         //load melon player and saw
         this.load.image('melon', 'assets/melon.png');
         this.load.image('saw', 'assets/chainsaw.png');
         this.load.image('saw-img', 'assets/chainsaw-img.png');
         //load grenade-img
         this.load.image('grenade-img', 'assets/grenade-img.png');
         this.load.image('grenade', 'assets/grenade.png');
         //load cursorup
         this.load.image('cursorup', 'assets/coursourup.png');
         //load web-font
         this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
         //load spritesheet for grenade animation
         this.load.spritesheet('explosion', 'assets/GrenadeAnim.png', {frameWidth:161,frameHeight:161});
         //load gold coin
         this.load.image('goldcoin', 'assets/goldcoin.png');
         //load stun gun
         this.load.image('stun-gun', 'assets/plasma-gun.png');
         //load CTA-button
         this.load.image('cta-button', 'assets/CTA-button.png');
         //load platform
         this.load.image('platform', 'assets/platform2.png');
         //load star image
         this.load.image('star', 'assets/Star.png');
         //load tap animator
         this.load.spritesheet('tapanim', 'assets/tapfinal.png',{frameWidth:100,frameHeight:120});
         //load pointer anim
         this.load.spritesheet('pointeranim', 'assets/pointerfinal.png', {frameWidth:120,frameHeight:120})
         //load ellipse
         this.load.image('ellipse', 'assets/Ellipse.png');
         //load tap finger
         this.load.image('tap', 'assets/tap.png');


    },

    create: function(){

        var add = this.add;

        WebFont.load({
            google: {
                families: [ 'Poppins']
            },
            active: function (){
                //text for displaying combo hits
                combotxt = add.text(80,40,scoreString +newcount,{fontFamily:'Poppins',fontStyle:'normal',fontWeight:900,fontSize:25,lineHeight:30,
                color:'#FFFFFF',textAlign:'centre'}).setShadow(0,4,'#7B140D',0);
                combotxt.setVisible(false);
                tapndrag1 = add.text(135, 90, 'Tap Screen', { fontFamily: 'troika', fontSize: 20, color: '#92BC00',fontWeight:900 }).setShadow(2, 2, "#333333", 2, false, true);
                holdndrag = add.text(135, 90, 'Hold and Drag', { fontFamily: 'troika', fontSize: 20, color: '#92BC00',fontWeight:900 }).setShadow(2, 2, "#333333", 2, false, true);
                holdndrag.setVisible(false);
                tapndrag1.setVisible(true);
            }
        });

        //environment bounds
        this.matter.world.setBounds();

        //create bg 
        this.add.image(0, 0, 'background');

        //create star for hits
        star = this.add.image(145,50, 'star');
        star.setScale(0.5,0.5);
        star.setVisible(false);
        

        //load ellipse
        ellipse = this.add.image(175,135, 'ellipse');
        ellipse.setScale(0.1,0.1);

        //load platform to game
        platform = this.matter.add.image(110,420, 'platform', null,{restitution:0.4 ,isStatic: true});
        platform.setScale(4,3);

        const {Body,Bodies} = Phaser.Physics.Matter.Matter;
        
        melonCollider = Bodies.rectangle(30,0,10,125,{isSensor:true, label:'right'});
        melonCollider2 = Bodies.rectangle(0,0,30,150,{isSensor:false, label:'collider'});
        melonCollider3 = Bodies.rectangle(-30,0,10,125,{isSensor:true, label:'left'});
        melonCollider4 = Bodies.rectangle(0,0,20,125,{isSensor:true, label:'topcollider'});

        meloncompoundBody = Body.create({
            parts: [melonCollider, melonCollider2, melonCollider3,melonCollider4],
            inertia: Infinity,
            frictionAir: 0.05
        })
        
        //create player sprite
        player = this.matter.add.sprite(0,0, 'melon');
        player.setScale(0.5,0.5);
        
        player.setInteractive();
        player.setExistingBody(meloncompoundBody);
        player.setPosition(x,y);
        player.setMass(10);

        //create group for coins
        //colliding group objects within will collide
        group1 = this.matter.world.nextGroup();
       

        //chainsaw button
        chainsaw = this.add.sprite(270,420,'saw-img');
        chainsaw.setScale(0.3,0.3);
        chainsaw.setInteractive();

        //add grenade-img to create grenade button
        grenade= this.add.image(60,420,'grenade-img');
        grenade.setInteractive();
        grenade.setScale(0.3,0.3);

        //console.log("chainsawScene");

        //create stun gun button
        stungun = this.add.image(160,420,'stun-gun');
        stungun.setInteractive({cursor:'pointer'});
        stungun.setScale(0.7,0.7);
        stungun.setVisible(false);
 
        //second cursor for stungun
        cursor2 = this.add.sprite(160,350, 'cursor');
        cursor2.setVisible(false);

        //config for tap-animation
        config19 = {
            key: 'animate',
            frames: 'tapanim',
            frameRate: 4,
            repeat: -1,
            //yoyo: true
        }

        //config for the pointer anim
        config20 = {
            key: 'pointer',
            frames: 'pointeranim',
            frameRate: 4,
            repeat : -1,
            yoyo: true
        }

        //create finger
        finger = this.add.sprite(185,145, 'tap')
        finger.setScale(0.3,0.3);
        //finger.setVisible(false);
        this.anims.create(config19);
        finger.play('animate');

        //function for chainsawcollider 
        this.input.on('pointerup', function(pointer){
            //implement offset for pointer
            chainsawCollider = Bodies.circle(pointer.x,pointer.y,5,{isSensor:false, label:'chainsawcollider'});
            mainsawCollider = Bodies.rectangle(pointer.x,pointer.y,30,30,{isSensor:true,label:'sawcollider'})
            coinCollider = Bodies.circle(player.x+20,player.y+20,10,{isSensor:false, label:'coinCollider'});
            coinCollider1 = Bodies.circle(player.x+20,player.y+20,10,{isSensor:false, label:'coinCollider1'});
            coinCollider2 = Bodies.circle(player.x+20,player.y+20,10,{isSensor:false, label:'coinCollider2'});
            coinCollider3 = Bodies.circle(player.x+20,player.y+20,10,{isSensor:false, label:'coinCollider3'});
            coinCollider4 = Bodies.circle(player.x+20,player.y+20,10,{isSensor:false, label:'coinCollider4'});
            coinCollider5 = Bodies.circle(player.x-30,player.y-20,10,{isSensor:false, label:'coinCollider5'});
            coinCollider6 = Bodies.circle(player.x-30,player.y-20,10,{isSensor:false, label:'coinCollider6'});
            coinCollider7 = Bodies.circle(player.x-30,player.y-20,10,{isSensor:false, label:'coinCollider7'});
            coinCollider8 = Bodies.circle(player.x-30,player.y-20,10,{isSensor:false, label:'coinCollider8'});
            coinCollider9 = Bodies.circle(player.x-30,player.y-20,10,{isSensor:false, label:'coinCollider4'});

            sawcompoundBody = Body.create({
                parts: [mainsawCollider],
                //inertia: Infinity
            });

            //right side colliders
            coincompoundBody = Body.create({
                parts: [coinCollider],
                //inertia: Infinity

            });

            coincompoundBody1 = Body.create({
                parts: [coinCollider1],
                //inertia: Infinity

            });

            coincompoundBody2 = Body.create({
                parts: [coinCollider2],
                //inertia: Infinity

            });
            
            coincompoundBody3 = Body.create({
                parts: [coinCollider3],
                //inertia: Infinity

            });

            coincompoundBody4 = Body.create({
                parts: [coinCollider4],
                //inertia: Infinity

            });

            //left side colliders
            coincompoundBody5 = Body.create({
                parts: [coinCollider5],
                //inertia: Infinity

            });

            coincompoundBody6 = Body.create({
                parts: [coinCollider6],
                //inertia: Infinity

            });

            coincompoundBody7 = Body.create({
                parts: [coinCollider7],
                //inertia: Infinity

            });

            coincompoundBody8 = Body.create({
                parts: [coinCollider8],
                //inertia: Infinity

            });

            coincompoundBody9 = Body.create({
                parts: [coinCollider9],
                //inertia: Infinity

            });

        },this);

        //onclick function for chainsaw
        this.input.once('pointerup', function(pointer){
            
            //hide finger animation and ellipse
            finger.destroy();
            ellipse.setVisible(false);
            tapndrag1.setVisible(false);
            holdndrag.setVisible(true);
            
            //create chainsaw onclick
            saw = this.matter.add.sprite(pointer.x, pointer.y, 'saw');
            saw.setScale(0.32,0.32);
            
            this.x = pointer.x;
            this.y = pointer.y;
            
            saw.setInteractive();
            this.input.setDraggable(saw);
            
            saw.setExistingBody(sawcompoundBody);
            saw.setIgnoreGravity(true);

        }, this);
 
        //create goldcoin 
        coin  = this.matter.add.image( 0,0,'goldcoin',0).setVisible(false).setScale(0.1,0.1).setIgnoreGravity(true).setDepth(2);
        coin1 = this.matter.add.image( 0,0,'goldcoin',0).setVisible(false).setScale(0.1,0.1).setIgnoreGravity(true).setDepth(2);
        coin2 = this.matter.add.image( 0,0,'goldcoin',0).setVisible(false).setScale(0.1,0.1).setIgnoreGravity(true).setDepth(2);
        coin3 = this.matter.add.image( 0,0,'goldcoin',0).setVisible(false).setScale(0.1,0.1).setIgnoreGravity(true).setDepth(2);
        coin4 = this.matter.add.image( 0,0,'goldcoin',0).setVisible(false).setScale(0.1,0.1).setIgnoreGravity(true).setDepth(2);
        
        
        this.matter.world.on('collisionstart', function (event) {

            //logic for collisions
            pairs = event.pairs;
            for(var i = 0;i<pairs.length;i++){
                bodyA =pairs[i].bodyA;
                bodyB = pairs[i].bodyB;

                if(pairs[i].isSensor){
                    if(bodyA.isSensor){
                        chainsawBody = bodyB;
                        melonBody = bodyA;
                    }else if(bodyB.isSensor){
                        chainsawBody = bodyA;
                        melonBody  = bodyB;
                    }

                    chainsawSprite = chainsawBody.gameObject;
                    melonSprite = melonBody.gameObject;
                    
                    //increase grenade count with every click
                    newcount = grenadecount++;
                    //console.log(newcount);
                    combotxt.text = scoreString + newcount;

                    if(melonBody.label === 'right' && chainsawBody.label === 'sawcollider'){
                        hitCount++
                        melonSprite.x -= 10;
                        
                        //show hit count
                        combotxt.setVisible(true);
                        star.setVisible(true);
                        holdndrag.setVisible(false);
                        //console.log('hit from right side'+''+hitCount);

                        coin.setVisible(true).setPosition( player.x+20,player.y+20).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody);
                        coin1.setVisible(true).setPosition( player.x+20,player.y+20).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody1);
                        coin2.setVisible(true).setPosition( player.x+20,player.y+20).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody2);
                        coin3.setVisible(true).setPosition( player.x+20,player.y+20).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody3);
                        coin4.setVisible(true).setPosition( player.x+20,player.y+20).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody4);
            
                        
                           
                    }else if(melonBody.label === 'left' && chainsawBody.label === 'sawcollider'){
                        
                        //show hit count
                        combotxt.setVisible(true);
                        star.setVisible(true);
                        holdndrag.setVisible(false);

                        melonSprite.x += 10;
                        //coin.setVisible(true);

                        coin.setVisible(true).setPosition( player.x-20,player.y+20).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody5);
                        coin1.setVisible(true).setPosition( player.x-20,player.y+20).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody6);
                        coin2.setVisible(true).setPosition( player.x-20,player.y+20).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody7);
                        coin3.setVisible(true).setPosition( player.x-20,player.y+20).setScale(0.08,0.08).setBounce(0.5).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody8);
                        coin4.setVisible(true).setPosition( player.x-20,player.y+20).setScale(0.08,0.08).setBounce(0.5).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody9);

                    }else if(melonBody.label === 'topcollider' && chainsawBody.label === 'sawcollider'){
                        //show hit count
                        combotxt.setVisible(true);
                        star.setVisible(true);
                        holdndrag.setVisible(false);

                        coin.setVisible(true).setPosition( player.x+20,player.y-60).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody5);
                        coin1.setVisible(true).setPosition( player.x+20,player.y-60).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody6);
                        coin2.setVisible(true).setPosition( player.x+20,player.y-60).setScale(0.08,0.08).setBounce(0.3).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody7);
                        coin3.setVisible(true).setPosition( player.x+20,player.y-60).setScale(0.08,0.08).setBounce(0.5).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody8);
                        coin4.setVisible(true).setPosition( player.x+20,player.y-60).setScale(0.08,0.08).setBounce(0.5).setCollisionGroup(group1).setVelocity(10).setIgnoreGravity(false).setExistingBody(coincompoundBody9);
                    }
                }
            }

        });


        //create onclick event for stungun button
        stungun.on('pointerdown', function(pointer){
            this.scene.start('ctaScene');

        },this);

        //create onclick event for grenade button
        grenade.on('pointerdown', function(pointer){
            this.scene.start('grenadeScene');
            //resets score to  0 when u  change scenes
            score = 0;
            grenadecount = 0;
            newcount = 0;

        },this);

        timedEvent1 = this.time.addEvent({
            delay:15000,
            callback:ctafunction1,
            callbackScope: this
        });


        timedEvent = this.time.addEvent({
            delay:20000,
            callback: gameF3, //function to display cta scene
            callbackScope: this
            
        });

    },

    update: function(){

        this.input.on('drag', function(pointer, saw,dragX,dragY){
            //get player coordinates
            pxx = player.x;
            pyy = player.y;

            //chainsaw coordinates
            //pointer.x and pointer.y reeal time coordinates for chainsaw
            //get angle between player  and weapon
            rotation = Phaser.Math.Angle.Between(pxx,pyy,pointer.x,pointer.y);

            //rotate facing angle
            saw.rotation = rotation;
            //saw.rotation += 0.01;

            saw.x = dragX;
            saw.y = dragY;
            saw.setTarget = player;
            
        }, this);
        
    }

});

function gameF3(){
    //call cta scene
    this.scene.start('ctaScene');  
}

function ctafunction(){
    //display stungun button and cursor2
    stungun.setVisible(true);
    cursor2.setVisible(true);
    //create animation for cursor
    this.anims.create(config18);
    cursor2.play('pointer');
    cursor2.setScale(0.3,0.3);
}

function ctafunction1(){
    //display stungun button and cursor2
    stungun.setVisible(true);
    cursor2.setVisible(true);
    //create animation for cursor
    this.anims.create(config20);
    cursor2.play('pointer');
    cursor2.setScale(0.3,0.3);
}




//-------------------------------CTASCENE-------------------------------///


var ctaScene = new Phaser.Class({
    Extends: Phaser.Scene,
    initialize:

    function ctaScene(){
        Phaser.Scene.call(this,{key:'ctaScene'})
    },

    preload:function(){

        //load bg and player
        this.load.image('background', 'assets/BG.png');
        //load stun gun
        this.load.image('stun-gun', 'assets/plasma-gun.png');
        //load CTA-button
        this.load.image('cta-button', 'assets/CTA-button.png');
        
    },

    create: function(){
        console.log("cta scene class");
        this.add.image(0, 0, 'background');

        //create stungun button
        stunguncta = this.add.image(160, 240,'stun-gun');
        ctabutton = this.add.image(160, 320, 'cta-button');
        stunguncta.setScale(1,1);
        ctabutton.setScale(0.4);
        ctabutton.setInteractive({cursor:'pointer'})

        //ctabutton for link to webpage
        ctabutton.on('pointerup', function(event){
            console.log('clicked button');
            //code here
            window.location.href = "javascript:window.open(window.clickTag)";
            ExitApi.exit();

        }, this);

    },

    update: function(){

    }

});

const config = {
    width: 320,
    height: 480,
    //backgroundColor: '#1b1464',
    type: Phaser.AUTO,
    parent: 'Kick-melon',
    pixelArt: true,
    antialias: true,
    scene: [mainScene, grenadeScene, chainsawScene, ctaScene],
    scale: {
        zoom: -1,
    },
    physics: {
        //gravity: { y: 1 },
        default: 'matter',
        matter: {
            debug:false,
            enableSleeping: false
        }
    },
    plugins: {
        scene: [
            {
                plugin: PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }
}

var game = new Phaser.Game(config);