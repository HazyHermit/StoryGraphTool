class SceneA extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneA' });
    }

    preload (){
        this.load.path = './assets/';
        this.load.image('madmourn', 'madmourn.png');
        this.load.audio('background_music', 'reverb violin.mp3');
    }

    create ()
    {
        //play music 
        this.backgroundMusic = this.sound.add('background_music', {loop:true });
        this.backgroundMusic.play();
        //create image object 
        this.imageObject = this.add.image(
            700,//x
            350,
            'madmourn',//imagename
        )
        this.imageObject.scale = 0.5;

        this.textObject = this.add.text(
            500, //x
            500,//y
            "chikisan studio presents...", //text
            {
                font: "40px Times New Roman",
                color: "#ffffff",
            }
        );
        //fade in and out 
        {
            this.tweens.add({
                targets: this.imageObject,
                ease: 'Sine.easeInOut',
                repeat: -1,
                duration: 960
            });

            this.cameras.main.once('camerafadeincomplete', function (camera) {
                camera.fadeOut(500);
            });

            this.cameras.main.fadeIn(560);
        }

        //switch to next  
        this.time.delayedCall(1000 , () => 
        {
            console.log('From SceneA to SceneB');

            this.scene.start('sceneB');

        }, this);
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneB' });
    }

    preload ()
    {
        this.load.image('arrow', 'assets/sprites/longarrow.png');
    }

    create ()
    {
        this.textObject = this.add.text(
            300, //x
            100,//y
            "In the midst of battle,",//text
            {
                font: "40px Times New Roman",
                color: "#ffffff",
            }
        );
        this.textObject = this.add.text(
            200, //x
            200,//y
            "when you are surrounded by nothing but blood shed,",//text
            {
                font: "40px Times New Roman",
                color: "#ffffff",
            }
        );

        this.textObject = this.add.text(
            300, //x
            500,//y
            "you hear her song.",//text
            {
                font: "40px Times New Roman",
                color: "#ff0000",
            }
        );

        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneB to SceneC');

            this.scene.start('sceneC');

        }, this);
    }

}

class SceneC extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneC' });
    }

    preload ()
    {
        this.load.image('mech', 'assets/pics/titan-mech.png');
    }

    create ()
    {
        this.textObject = this.add.text(
            300, //x
            100,//y
            "Time freezes as velvet feathers descend from the sky. ",//text
            {
                font: "40px Times New Roman",
                color: "#ffffff",
            }
        );

        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneC to SceneD');

            this.scene.start('sceneD');

        }, this);
    }
}

class SceneD extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneD' });
    }

    preload ()
    {
        this.load.path = './assets/';
        this.load.image('feathers', 'IMG_0071.png');
    }

    create ()
    {
        //create image object 
        this.imageObject = this.add.image(750,500,'feathers')
        this.imageObject.scale = 0.75;

        this.textObject = this.add.text(
            300, //x
            100,//y
            "That is when you know the final act is at hand.",//text
            {
                font: "40px Times New Roman",
                color: "#ffffff",
            }
        );
        
        this.textObject = this.add.text(
            750, //x
            200,//y
            "The curtain calls.",//text
            {
                font: "40px Times New Roman",
                color: "#ff0000",
            }
        );
        this.cameras.main.fadeIn(560);

        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneD to SceneE');

            this.scene.start('sceneE');

        }, this);
    }

}

class SceneE extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'sceneE' });
    }

    preload ()
    {
        this.load.path = './assets/';
        this.load.image('zylan', 'soldier_poet_king.png');

    }

    create ()
    {

        //create image object 
        this.imageObject = this.add.image(100,320,'zylan')
        this.imageObject.scale = 0.75;
        const r3 = this.add.circle(750, 200, 80);

        r3.setStrokeStyle(2, 0xff0000);

        const r4 = this.add.triangle(730, 400, 40);

        r4.setStrokeStyle(3, 0xff0000);
        r4.scale = 0.25; 

        //move in from left animation 
        this.tweens.add({
            targets: this.imageObject,
            x: 400,
            duration: 2000,
            repeat: 0,
            hold: 500,
            repeatDelay: 500,
            ease: 'cubic.in'
        });

        this.textObject = this.add.text(
            750, //x
            200,//y
            "The Scarlet Orchestra",//text
            {
                font: "40px Times New Roman",
                color: "#ffffff",
            }
        );

        this.textObject = this.add.text(
            750, //x
            400,//y
            "START",//text
            {
                font: "20px Times New Roman",
                color: "#ffffff",
            }
        );

        this.textObject = this.add.text(
            750, //x
            500,//y
            "CREDITS",//text
            {
                font: "20px Times New Roman",
                color: "#ffffff",
            }
        );

        this.textObject = this.add.text(
            750, //x
            550,//y
            "SETTINGS",//text
            {
                font: "20px Times New Roman",
                color: "#ffffff",
            }
        );

        this.textObject = this.add.text(
            750, //x
            600,//y
            "QUIT",//text
            {
                font: "20px Times New Roman",
                color: "#ffffff",
            }
        );
        this.input.once('pointerdown', function (event)
        {

            console.log('From SceneE to Credits');

            this.scene.start('Credits');

        }, this);
    }
}

class Credits extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'Credits' });
    }

    preload ()
    {
        this.load.path = './assets/';
        this.load.image('zylan', 'soldier_poet_king.png');
    }

    create ()
    {
        //create image object 
        this.imageObject = this.add.image(440,340,'zylan')
        this.imageObject.scale = 0.75;
        this.textObject = this.add.text(
            750, //x
            200,//y
            "Credits",//text
            {
                font: "70px Times New Roman",
                color: "#ffffff",
            }
        );

        this.textObject = this.add.text(
            750, //x
            400,//y
            "Art by Hazelle Malonzo",//text
            {
                font: "20px Times New Roman",
                color: "#ffffff",
            }
        );

        this.textObject = this.add.text(
            750, //x
            500,//y
            "Coded by Hazelle Malonzo in Phaser",//text
            {
                font: "20px Times New Roman",
                color: "#ffffff",
            }
        );

        this.textObject = this.add.text(
            750, //x
            550,//y
            "Audio -”hoochie violin variation” by Freqman on freesound.org",//text
            {
                font: "20px Times New Roman",
                color: "#ffffff",
            }
        );

        this.textObject = this.add.text(
            750, //x
            600,//y
            "Background music was reverbed in Audacity.",//text
            {
                font: "20px Times New Roman",
                color: "#ffffff",
            }
        );


        this.input.once('pointerdown', function (event)
        {

            console.log('From Credits to SceneA');

            this.scene.start('sceneA');

        }, this);
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1000,
    backgroundColor: '#000000',
    parent: 'phaser-example',
    scene: [ SceneA, SceneB, SceneC, SceneD, SceneE, Credits ]
};

const game = new Phaser.Game(config);
