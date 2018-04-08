	//Name of the webpage is set
	document.title = "11-99 as bundle and sticks";


	var mySceneTLX;        /* Top Left corner X coordinate */
	var mySceneTLY;        /* Top Left corner Y coordinate */
	var mySceneBRX;        /* Bottom Right corner X coordinate */
	var mySceneBRY;        /* Bottom Right corner Y coordinate */

 	//////////////////////ALL threeOBJECTS///////////////////////////////
	var background;					/* background object (PlaneGeometry) */
	var arrow;							/* ConeGeometry to show forward arrow */
	var outlinearrow;				/* ConeGeometry to show outline of forward arrow */
	//var cart;								/* Object to show horse cart */
	var sticks = [];				/* array of individual sticks */
	var bundle = [];				/* array of bundle of sticks */
	//var cText=[];						/* Array of Objects to show text */
	//var tempElement;				/* Object to store another object for function move() */
	//var sideOutline;				/* plane object to show outline */
	////////////////////END OF OBJECTS/////////////////////////////////
var a;
var t1;
	var centerX;						/*X coordinate of center of screen*/
	var centerY;						/*Y coordinate of center of screen*/
	var frameCount;					/* variable to keep count of current frame */
	var canvas;							/* canvas material used for different objects */
	var context;						/* canvas's context to draw on canvas */
	var collected ;					/* total number of sticks collected  */
	var stickCollected;			/* total number of individual sticks */
	var bundleCollected;		/* total number of bundled sticks */
	var required;						/* required number of sticks for each frame */
	var tempRequired;				/* Temporary variable to keep count of bundles required */
	var tempRequiredSticks;	/* Temporary variable to keep count of require individual sticks*/
	var totStick;						/* variable to contain individual div element by id */
	var totBundle;					/* variable to contain bundle div element by id */
	var total=0;							/* variable to contain total div element by id*/
	var learn;							/* 1 when learn steps is clicked and animation is shown */
	var stickAdd=[];				/* value of element is 1 if it has been added to the total count of sticks */
	var bundleAdd=[];				/* value of element is 1 if it has been added to the total count of sticks */
	var success;						/* 1 id answer is correct and animation is shown */
var n;
var n1;
var n2;
var count=[];
var count1=[];
var dup=0;
var con=0;
var con1=0;
var total1=0;
//var three=[];
var three1;
var three2;
var three;
var check;
var check1;
var t2;
//var required;
	//////////////End of Variables/////////////////////
	
	

/******************* Load Experiment objects code ***********************/


	var helpContent;
	function initialiseHelp()
	{
    helpContent="";
    helpContent = helpContent + "<h1>11-99 as bundle and sticks</h1>";
    helpContent = helpContent + "<h2>About the experiment</h2>";
    helpContent = helpContent + "<p>The experiment shows different way to stack sticks like individual and bundle.</p>";
    helpContent = helpContent + "<h3>Animation control</h3>";
    helpContent = helpContent + "<p>The top line has animation controls</p>";
    helpContent = helpContent + "<h3>You can first check by yourself by dragging required sticks and bundles and check whether you are correct in counting.</h3>";
	helpContent = helpContent + "<h3>Hence, the students can practice by themselves by dragging bundles and sticks to the right side of the window whether they are correct in counting or not.</h3>";
	helpContent = helpContent + "<h2>You can choose from the following options:</h2>";
    helpContent = helpContent + "<ul></ul>";
    helpContent = helpContent + "<li>Learn.</li>";
    helpContent = helpContent + "<li>Next.</li>";
    helpContent = helpContent + "<h3>Learn</h3>";
    helpContent = helpContent + "<p>Click on this if you want to see how to solve a question and count upto 99.</p>";
    helpContent = helpContent + "<p>Click on Next Button for next example. Wait for some time after clicking next button as it will take time to load or after clicking next button, click learn button to see the next animation of counting.</p>";
  //  helpContent = helpContent + "<h3>Submit</h3>";
    helpContent = helpContent + "<h2>Happy Experimenting</h2>";
    PIEupdateHelp(helpContent);
}

	var infoContent;
	function initialiseInfo()
	{
    infoContent =  "";
    infoContent = infoContent + "<h1>11-99 as bundle and sticks</h2>";
    infoContent = infoContent + "<h2>About the experiment</h3>";
    infoContent = infoContent + "<p>We can count upto 99 using sticks and bundle of sticks,</p>";
		infoContent = infoContent + "<p>where each individual sticks are considered as one and<p>";
		infoContent = infoContent + "<p>and each bundle of sticks are considered as tens.<p>";
		infoContent = infoContent + "<h2>Happy Experimenting</h2>";
    PIEupdateInfo(infoContent);
	}

	function initialiseScene()
	{
    	/* Initialise Scene Variables */
    	mySceneTLX = 0.0;
    	mySceneTLY = 50.0;
    	mySceneBRX = 100.0;
    	mySceneBRY = 0.0;
	}

	function initialiseOtherVariables()
	{
		/* Initialise other globally declared Variables */
	  centerX = (mySceneBRX - mySceneTLX)/2;
      centerY = (mySceneTLY - mySceneBRY)/2;
      
		//frameCount=0;
		//tempRequired=0;
		//totStick=document.getElementById("stick");
		//totBundle=document.getElementById("bundle");
	//	total=document.getElementById("total");
	}
/*function change(event)
{
fun
var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 +1);
    vector = vector.unproject(PIEcamera);

    var raycaster = new THREE.Raycaster(PIEcamera.position, vector.sub(PIEcamera.position).normalize());
    var intersects = raycaster.intersectObjects(PIEscene.children,true);
    for(var i=0;i<intersects.length;i++)
    {
		 	var c=intersects[i].object.name.charAt(0);
		 	if(c == 'h' || c=='o')
		 		break;
	}
	
	 if(c=='h')
	{
		PIEstartAnimation();
	}
	if(c=='o')
	{
		resetExperiment();
	}
}
/**
 * This function creates the scene of the experiment.
 * It is called by the library during document load.
 * It is recommended that you do not initialise any variables globally.
 * It is recommended that this function create all the elements first.
 * It should then call a reset function to initialise values.
 * This will allow a reset exepriment functionality to be implemented.
 * <p>
 * It is recommended that the developer first draw a sketch of the experiment on a piece of paper.
 * The sketch should specify the size and initial position of all the elements that comprise the experiment.
 * <p>
 * Once the sketch is ready, the developer should instantiate the elements at the intial location.
 * <p>
 * The (x,y) position of the camera would be set to the center of area of interest.
 * The z position of the camera would be such that the field of vision would cover the height.
 * The aspect ratio of the camera whould cover the width.
 * <p>
 * Two lights would be suitably positioned to light the area of interest.
 * <p>
 * The developer can position the camera and lights if he so chooses.
 * <p>
 * The camera would adjust and cover a wider and taller area depending on the dimensions of the display.
 * hence the background (if any) shoudl extend beyond the area of interest.
 * <p>
 * Finally the developer should call the function PIEsetAreaOfInterest(tlx, tly, brx, bry).
 * The parameters are the top left corner and bottom right corner coordinates.
 * The X axis goes from lef to right of te display and the y axis goes from bottom to up.
 * The area of interst should be wide and tall enough to cover all potential movements.
 * <p>
 * The developer should have a fairly good idea of the controls forthe experiment.
 * Once the scene is setup and is visible, the developer can include the controls and
 * the callback functions needed to update the experiment parameters.
 * The PIE library provides a set of functions to implement common controls.
 * <p>
 * The developer should code and assign proper event handlers to the elements (to control animation).
 */
function bun1(element,newpos)
{
   element.position.x=newpos.x
}
function stic1(element,newpos)
{
//element.position.x=newpos.x;
}
function bun(element,newpos)
{
	element.position.x=newpos.x;
	element.position.y=newpos.y;
	element.position.z=newpos.z;
	if(newpos.x<=centerX+12)
	{
		t1=0;
	}

	// t1=0;
	if(newpos.x>=centerX+12)
	{
		if(t1==0)
		{
	total=total+10;
	PIEscene.remove(three);
	if(total==required)
	{
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(total, { font: font, size:4.5, height: 2.05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'green' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(centerX-3,centerY-3,0) ;
				PIEaddElement( three );})
				PIErender();
				PIErender();
				
				PIErender();
				}			
			 else{
				var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(total, { font: font, size:4.5, height: 2.05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(centerX-3,centerY-3,0) ;
				PIEaddElement( three );})
				PIErender();
				PIErender();
				
				PIErender();
				
			 
			 }   				
			t1=1;	
			
			}


}

}
function stic(element,newpos)
{
	if(newpos.x<=centerX+12)
	{
		t2=0;
	}
	element.position.x=newpos.x;
	element.position.y=newpos.y;
	element.position.z=newpos.z;
	// t1=0;
	if(newpos.x>=centerX+12)
	{
		if(t2==0)
		{
	total=total+1;
	PIEscene.remove(three);
	if(total==required)
	{
			 var loader1 = new THREE.FontLoader();
                loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


                southGeometry = new THREE.TextGeometry(total, { font: font, size:4.5, height: 2.05, curveSegments: 7});
                southMaterial = new THREE.MeshBasicMaterial( { color:'green' });

                three = new THREE.Mesh(southGeometry ,southMaterial );
                three.position.set(centerX-3,centerY-3,0) ;
				PIEaddElement( three );})
				PIErender();
				PIErender();
				PIErender();
				}
else
{
	var loader1 = new THREE.FontLoader();
	loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


	southGeometry = new THREE.TextGeometry(total, { font: font, size:4.5, height: 2.05, curveSegments: 7});
	southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

	three = new THREE.Mesh(southGeometry ,southMaterial );
	three.position.set(centerX-3,centerY-3,0) ;
	PIEaddElement( three );})
	PIErender();
	PIErender();
	PIErender();

}
				t2=1;	
			}


}
}
	function loadExperimentElements()
		{
			var geometry;
			var material;
			var texture;
			var loader;
			initialiseHelp();
			initialiseInfo();
	
			/* initialise Scene */
			initialiseScene();
	
			/* initialise Other Variables */
			initialiseOtherVariables();
		//	PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
			PIEsetExperimentTitle("11-99 as bundle and sticks");
	    PIEsetDeveloperName("Poojan Dhameliya");
	    //PIEhideControlElement();

	    /* initialise help and info content */
	   
		
		
			/*Background plane*/
		   geometry = new THREE.PlaneGeometry( 120 , 60, 32 );
		   	material = new THREE.MeshBasicMaterial( {color: 0xa3c6ff, side: THREE.DoubleSide} );
		   	background = new THREE.Mesh( geometry, material );
		   	background.position.set(centerX,centerY-1,0);
		   	PIEaddElement(background);
	
			   var temp=0,l=0;
			   texture = new THREE.ImageUtils.loadTexture( "bundle.png",{},function (){PIErender();PIErender();PIErender();PIErender();} );
		texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
	        geometry = new THREE.PlaneGeometry(15, 7,0);
				
				for (var i = 0; i < 9; i++)
				{
					material = new THREE.MeshBasicMaterial( {transparent:true,color:0xDAA520 , map: texture, side: THREE.DoubleSide } );
					bundle[i] = new THREE.Mesh(geometry, material);
					bundle[i].scale.set(0.8,0.8,0.8);
					bundle[i].position.set(centerX-(Math.floor(i%3))*10-22,centerY+3-11*l,0);
					
					temp++;
					if(temp%3==0)
					{
						l++;
					}
					PIEaddElement(bundle[i]);
					//t1=0;
					PIEdragElement(bundle[i]);
					PIEsetDrag(bundle[i],bun);
		//			PIEsetDragEnd(bundle[i],bun);
					bundle[i].rotateZ(Math.PI/4);
				}
				texture = new THREE.ImageUtils.loadTexture( "stick.png",{},function (){PIErender();PIErender();PIErender();PIErender();} );
				texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
				geometry = new THREE.PlaneGeometry(10,2,0);
				//texture = new THREE.ImageUtils.loadTexture( 'stick.png' );

				for (var i = 0; i < 9; i++)
				{
				material = new THREE.MeshStandardMaterial( { transparent:true,color:0xCD853F,map: texture, side: THREE.DoubleSide } );
				sticks[i]= new THREE.Mesh(geometry,material);
				sticks[i].scale.set(0.9,0.9,0.9);
				sticks[i].position.set(centerX-2*i-20,centerY+13,0);
				PIEaddElement(sticks[i]);
				PIEdragElement(sticks[i]);
				PIEsetDrag(sticks[i],stic);
			//	PIEsetDragEnd(sticks[i],stic);
				sticks[i].rotateZ(Math.PI/4);
	
				
			}
			randomnum();
		//	required=99;
			PIErender();
			PIErender();
			
			var loader1 = new THREE.FontLoader();
			loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


			southGeometry = new THREE.TextGeometry("Need "+required+" Sticks", { font: font, size:2.0, height: 0.05, curveSegments: 7});
			southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

			three2 = new THREE.Mesh(southGeometry ,southMaterial );
			three2.position.set(centerX-10,centerY+18,0) ;
			PIEaddElement( three2 );})
			PIErender();PIErender();PIErender();PIErender();PIErender();

			n1=required%10;
			n2=Math.floor(required/10);
			a=1;
      for(var i=0;i<9;i++)
      {
          bundleAdd[i]=0;
      }
      for(var i=0;i<9;i++)
      {
          stickAdd[i]=0;
      }
for(var i=0;i<n2;i++)
        {
            bundleAdd[i]=1;
        }
        for(var i=0;i<n1;i++)
        {
            stickAdd[i]=1;
            dup++;
        }
        count[0]=1;
        count1[0]=1;
        for(var i=1;i<10;i++)
        {
            count[i]=0;
        }
        for(var i=1;i<10;i++)
        {
            count1[i]=0;
		}
		

///PIErender();
//PIErender();

//PIErender();

				/*Addition of different experiment objects*/
				
			
			/*var texture = THREE.ImageUtils.loadTexture( 'ne.png');
			texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
			//texture.repeat.set( 1, 1);
		
			var geometry = new THREE.PlaneGeometry( 12, 8,5 );
			var material = new THREE.MeshBasicMaterial( {transparent:true, map: texture, side: THREE.DoubleSide } );
			box1 = new THREE.Mesh(geometry,material);
			box1.position.x  = centerX+15;
			box1.position.y  = centerY-17;
			box1.name = "one";
			PIEaddElement(box1);
			var geometry = new THREE.PlaneGeometry( 12,8, 2.5 );
	var texture = THREE.ImageUtils.loadTexture( 'steps.png');
	var material = new THREE.MeshBasicMaterial( {transparent:true, map: texture, side: THREE.DoubleSide } );
	box3 = new THREE.Mesh(geometry,material);
	box3.position.x  = centerX;
	box3.position.y  = centerY-17;
	box3.name = "hi";
	PIEaddElement(box3);*/
	
//initialiseOthers();
	//	window.addEventListener("click",change);
	   
   
   PIEaddButton("Learn");
			document.getElementById("Learn").addEventListener("click",function(){
			//	total=0;
		//		resetExperiment();
		PIEremoveElement(three);
		var l=0,temp=0;
				for(var i=0;i<9;i++)
		{
			bundle[i].position.set(centerX-(Math.floor(i%3))*10-22,centerY+3-11*l,0);
			bundle[i].scale.set(0.8,0.8,0.8);
			temp++;
			if(temp%3==0)
			l++;
			PIErender();
		}
		for(var i=0;i<9;i++)
		{
			sticks[i].position.set(centerX-2*i-20,centerY+13,0);
			sticks[i].scale.set(0.9,0.9,0.9);
			PIErender();
		}
total=0;
			//	PIEremoveElement(three);
				/*var loader = new THREE.ImageLoader();
				geometry= new THREE.PlaneGeometry( 5, 10 );
				texture=THREE.ImageUtils.loadTexture('handarrow.png',{},function(){PIErenderer.render(PIEscene,PIEcamera)});
				material=new THREE.MeshBasicMaterial({transparent:true, opacity:1, map:texture});
	    		handarrow= new THREE.Mesh(geometry,material);
				PIEaddElement(handarrow);
				handarrow.position.set(centerX+3,centerY-3,0);
PIErender();*/
				
				PIEstartAnimation();
			});
			PIEaddButton("Next");
			document.getElementById("Next").addEventListener("click",function(){
				resetExperiment();

			});
			PIEsetAreaOfInterest(mySceneTLX, mySceneTLY, mySceneBRX, mySceneBRY);
			//PIEstartAnimation();
		}

	/******************* End of Load Experiment objects code ***********************/

	/******************* Reset Experiment code ***********************/

	/**
	 * This function resets the position of all experiment elements to their default values.
	 * <p>
	 * This is called during initial document load.
	 * This is also be called by the system provided reset button.
	 * <p>
	 * Apart from the position, this should also reset all variables which can be controlled by the user.
	 * This function will also clear any output variables/graphs
	 */
	function resetExperiment()
	{
		var l=0,temp=0;
		PIEstopAnimation();
		for(var i=0;i<9;i++)
		{
			bundle[i].position.set(centerX-(Math.floor(i%3))*10-22,centerY+3-11*l,0);
			bundle[i].scale.set(0.8,0.8,0.8);
			temp++;
			if(temp%3==0)
			l++;
			PIErender();
		}
		for(var i=0;i<9;i++)
		{
			sticks[i].position.set(centerX-2*i-20,centerY+13,0);
			sticks[i].scale.set(0.9,0.9,0.9);
			PIErender();
		}
total=0;
total1=0;dup=0;
con=0;con1=0;
PIEscene.remove(three);
PIEscene.remove(three1);
//PIEscene.remove(three2);
PIEremoveElement(three2);
PIErender();
PIErender();
randomnum();
n1=required%10;
n2=Math.floor(required/10);
a=1;
      for(var i=0;i<9;i++)
      {
          bundleAdd[i]=0;
      }
      for(var i=0;i<9;i++)
      {
          stickAdd[i]=0;
      }
for(var i=0;i<n2;i++)
        {
            bundleAdd[i]=1;
        }
        for(var i=0;i<n1;i++)
        {
            stickAdd[i]=1;
            dup++;
        }
        count[0]=1;
        count1[0]=1;
        for(var i=1;i<10;i++)
        {
            count[i]=0;
        }
        for(var i=1;i<10;i++)
        {
            count1[i]=0;
		}
		
var loader1 = new THREE.FontLoader();
loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


southGeometry = new THREE.TextGeometry("Need "+required+" Sticks", { font: font, size:2, height: 0.05, curveSegments: 7});
southMaterial = new THREE.MeshBasicMaterial( { color:'red' });

three2 = new THREE.Mesh(southGeometry ,southMaterial );
three2.position.set(centerX-10,centerY+18,0) ;
PIEaddElement( three2 );})
PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();PIErender();
//PIEstartAnimation();
//initialiseOthers();*/
	}
	function randomnum()
	{
		required=10+Math.floor(Math.random()*90);
		/*if(required==10)
		{
			required=99;
		}*/
	}
	/******************* End of Reset Experiment code ***********************/

	
	function updateExperimentElements(t, dt)
	{
        if(t!=0)
        {

        if(count[dup]==0){
        for(var i=0;i<9;i++)
        {
            if(count[i]==1)
            {
            if(stickAdd[i]==1)
            {
                if(sticks[i].position.x<=centerX-12)
                {
                    sticks[i].position.x+=0.4;

                }
                else if(sticks[i].position.x>=centerX-12 && sticks[i].position.x<=centerX+38-2*i)
                {
                    sticks[i].scale.set(0.7,0.7,0.7);
                    sticks[i].position.x+=0.4;
                }
                else
                {	if(con==0)
					{
			if(sticks[0].position.x>=centerX-20)
			{total++;
			show(0);
			con=1;}
					}
					if(con==1)
					{
			if(sticks[1].position.x>=centerX+38-2)
		{	total++;
			show(1);
			con=2;}
					}
					if(con==2)
					{
			if(sticks[2].position.x>=centerX+38-4)
			{total++;
			show(2);
			con=3;
						}	}
					if(con==3)
					{
			if(sticks[3].position.x>=centerX+38-6)
			{total++;
			show(3);
			con=4;
							}		}
					if(con==4)
					{
			if(sticks[4].position.x>=centerX+38-8)
			{total++;
			show(4);
			con=5;
							}		}
					if(con==5)
					{
			if(sticks[5].position.x>=centerX+38-10)
			{total++;
			show(5);
			con=6;
							}		}
					if(con==6)
					{
			if(sticks[6].position.x>=centerX+38-12)
			{total++;
			show(6);
			con=7;
							}		}
					if(con==7)
					{
			if(sticks[7].position.x>=centerX+38-14)
			{total++;
			show(7);
			con=8;
							}		}
					if(con==8)
					{
			if(sticks[8].position.x>=centerX+38-16)
			{total++;
			show(8);
			con=9;
							}		}
					
					
					                count[i+1]=1;
               	
				}
				
            }
	
		}
    
    }
	
        }	
        else
        {
			a=2;
		}
	
    if(a==2)
    {
    for(var i=0;i<3;i++)
    {
        if(count1[i]==1)
        {
        if(bundleAdd[i]==1)
        {
            if(bundle[i].position.x<=centerX-12)
            {
                bundle[i].position.x+=0.4;

            }
            else if(bundle[i].position.x>=centerX-12 && bundle[i].position.x<=centerX+40-8.5*(Math.floor(i%3)))
            {
                bundle[i].scale.set(0.7,0.7,0.7);
                bundle[i].position.x+=0.4;
            }
			else
			{
				if(con1==0)
					{
			if(bundle[0].position.x>=centerX+40)
			{total+=10;
			show(0);
			con1=1;}
					}
					if(con1==1)
					{
			if(bundle[1].position.x>=centerX+40-8.5)
		{	total+=10;
			show(1);
			con1=2;}
					}
					if(con1==2)
					{
			if(bundle[2].position.x>=centerX+40-8.5*2)
			{total+=10;
			show(2);
			con1=3;
						}	}
					
					
            count1[i+1]=1;
			}
		}
    }
}
for(var i=3;i<6;i++)
    {
        if(count1[i]==1)
        {
        if(bundleAdd[i]==1)
        {
            if(bundle[i].position.x<=centerX-12)
            {
                bundle[i].position.x+=0.4;

            }
			else if(bundle[i].position.x>=centerX-12 && bundle[i].position.x<=centerX+40-8.5*(Math.floor(i%3)))
			{
				bundle[i].scale.set(0.7,0.7,0.7);
                bundle[i].position.x+=0.4;
			}
			else
			{
				if(con1==3)
					{
			if(bundle[3].position.x>=centerX+40)
			{total+=10;
			show(3);
			con1=4;
							}		}
					if(con1==4)
					{
			if(bundle[4].position.x>=centerX+40-8.5)
			{total+=10;
			show(4);
			con1=5;
							}		}
					if(con1==5)
					{
			if(bundle[5].position.x>=centerX+40-8.5*2)
			{total+=10;
			show(5);
			con1=6;
							}		}
            count1[i+1]=1;
		}
	}
    }
}
for(var i=6;i<9;i++)
    {
        if(count1[i]==1)
        {
        if(bundleAdd[i]==1)
        {
            if(bundle[i].position.x<=centerX-12)
            {
                bundle[i].position.x+=0.4;

            }
			else if(bundle[i].position.x>=centerX-12  && bundle[i].position.x<=centerX+40-8.5*(Math.floor(i%3)))
			{
				bundle[i].scale.set(0.7,0.7,0.7);
                bundle[i].position.x+=0.4;
			}
			else
			{
				if(con1==6)
					{
			if(bundle[6].position.x>=centerX+40)
			{total+=10;
			show(6);
			con1=7;
							}		}
					if(con1==7)
					{
			if(bundle[7].position.x>=centerX+40-8.5)
			{total+=10;
			show(7);
			con1=8;
							}		}
					if(con1==8)
					{
			if(bundle[8].position.x>=centerX+40-8.5*2)
			{total+=10;
			show(8);
			con1=9;
							}		}
            count1[i+1]=1;
		}
	}
    }
}
    }
		}
		
	
    }
	/******************* Update (animation changes) code ***********************/
function show(d)
{
	PIEremoveElement(three1);
	PIErender();
	if(total==required)
	{
	var loader1 = new THREE.FontLoader();
loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


southGeometry = new THREE.TextGeometry(total, { font: font, size:4.5, height: 2.05, curveSegments: 7});
southMaterial = new THREE.MeshBasicMaterial( { color:'green' });
three1 = new THREE.Mesh(southGeometry ,southMaterial );
three1.position.set(centerX-3,centerY-3,0) ;
PIEaddElement( three1 );})
}
else
{
	var loader1 = new THREE.FontLoader();
loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


southGeometry = new THREE.TextGeometry(total, { font: font, size:4.5, height: 2.05, curveSegments: 7});
southMaterial = new THREE.MeshBasicMaterial( { color:'red' });
three1 = new THREE.Mesh(southGeometry ,southMaterial );
three1.position.set(centerX-3,centerY-3,0) ;
PIEaddElement( three1 );})
}
}
function show1(o)
{
	var loader1 = new THREE.FontLoader();
loader1.load( 'helvetiker_regular.typeface.json', function ( font ) {


southGeometry = new THREE.TextGeometry(total1, { font: font, size:1, height: 0.03, curveSegments: 7});
southMaterial = new THREE.MeshBasicMaterial( { color:'red' });
check=o;
three1[o] = new THREE.Mesh(southGeometry ,southMaterial );
three1[o].position.set(centerX+37-5*o,centerY-1.5,0) ;
PIEaddElement( three1[o] );})
}