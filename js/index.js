/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
		this.hi();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
		//app.hi();
		//app.test();
		
    },
	test:function(){
		alert("we working");
		},
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
	hi: function(){
		app.test();
			 	 pictureSource=navigator.camera.PictureSourceType;
        		destinationType=navigator.camera.DestinationType;
		//hi
			navigator.camera.getPicture(this.uploadPhoto, onFail, { quality: 100,targetWidth: 700,
  		  	targetHeight:600,
        
			destinationType: navigator.camera.DestinationType.FILE_URI,
			sourceType: navigator.camera.PictureSourceType.DATA_URL});
		},
	uploadPhoto: function (imageURI){
	var options = new FileUploadOptions();
				options.fileKey="file";
				options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1)+'.jpg';
				options.mimeType="image/jpeg";
				options.chunkedMode = false;
				var ft = new FileTransfer();
				var c = localStorage.getItem('userId');
				ft.upload(imageURI, "http://www.salecarro.com/uploadTest/test_upload.php?user="+c, win, fail, options, true);
				app.onPhotoDataSuccess(imageURI);				
        },
	onPhotoDataSuccess: function(FILE_URI) { // Called when a photo is successfully retrieved
    // Uncomment to view the base64 encoded image data
      // console.log(imageData);
	  //this.imageURI = imageURI;
		//this.imageData = imageData;
		//this.FILE_URI = FILE_URI;
	
	 
	   console.log("Picture created succefully.");
	//var E = document.getElementById('error');
		
      // Get image handle
      //
	  //show('test')
      var smallImage = document.getElementById('smallImage');

      // Unhide image elements
      //
      smallImage.style.display = 'block';

      // Show the captured photo
      // The inline CSS rules are used to resize the image
      //
      smallImage.src = FILE_URI;
	  //smallImage.src = DATA_URL;
	 // uploadPhoto();
	  //E.innerHTML = imageURI;
	  //alert("Image uploaded");
	  app.imageLoaded();
	 									
	//console.log(this.imageURI +"**" + this.imageData+"**"+this.FILE_URI+"**"+this.DATA_URL);
    
	},
	imageLoaded: function()//image loaded will display after image loaded
	{
		var x = document.getElementById('test');
		var text = document.createTextNode('Image Uploaded :)');
		var green = document.createElement('div');
			
			x.appendChild(green);
			green.appendChild(text);
			green.setAttribute('class', 'green');
			//show('test')
			//clearAll();//line 500
			//setTimeout("animateThis()",5000);
		},
		 win: function (r) {
            console.log("Code = " + r.responseCode);
            console.log("Response = " + r.response);
            console.log("Sent = " + r.bytesSent);
        },

        fail:function (error) {
            console.log("An error has occurred: Code = " + error.code);
            console.log("upload error source " + error.source);
            console.log("upload error target " + error.target);
			/*
			this.imageURI = imageURI;
										this.imageData = imageData;
										this.FILE_URI = FILE_URI;
										this.DATA_URL = DATA_URL;
        */
		
		}

};
