	var vid = document.getElementById("bgvid");
	var pauseButton = document.querySelector("#polina button");

	function vidFade() {
	  vid.classList.add("stopfade");
	}

	vid.addEventListener('ended', function() {
	// only functional if "loop" is removed 
	vid.pause();
	// to capture IE10
	vidFade();
	}); 
	pauseButton.addEventListener("click", function() {
	  vid.classList.toggle("stopfade");
	  if (vid.paused) {
	    vid.play();
	    pauseButton.innerHTML = "<i class='lni-pause'></i>";
	  } else {
	    vid.pause();
	    pauseButton.innerHTML = "<i class='lni-play'></i>";
	  }
	})

	// Força reprodução inline em dispositivos móveis
	document.addEventListener('DOMContentLoaded', function() {
	  var videos = document.querySelectorAll('video');
	  videos.forEach(function(video) {
	    // Adiciona atributos para reprodução inline
	    video.setAttribute('playsinline', 'true');
	    video.setAttribute('webkit-playsinline', 'true');
	    video.setAttribute('x5-playsinline', 'true');
	    
	    // Previne abertura em tela cheia no mobile
	    video.addEventListener('play', function() {
	      if (video.webkitEnterFullscreen) {
	        video.webkitEnterFullscreen = function() {};
	      }
	    });
	  });
	});