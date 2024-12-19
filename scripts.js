function openNav() {
      document.getElementById("mySidenav").style.width = "250px";
      document.querySelector(".container").style.marginLeft = "250px";
    }

    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
      document.querySelector(".container").style.marginLeft = "0";
    }

    function showPage(pageId) {
      document.querySelectorAll('.home, .trackz').forEach(page => {
        page.classList.remove('active');
      });
      document.getElementById(pageId).classList.add('active');
    }

    function updateCharacterLimit() {
      const input = document.getElementById('userName');
      const characterLimit = document.getElementById('characterLimit');
      characterLimit.innerText = `${input.value.length} / 20`;
    }

    function submitName() {
      const name = document.getElementById('userName').value;
      if (name) {
        document.getElementById('namePopup').style.display = 'none';
        document.getElementById('mainContent').classList.remove('blurred');
        document.getElementById('header').classList.remove('blurred');
        document.getElementById('footer').classList.remove('blurred');
        const homeContent = document.getElementById('homeContent');
        const duration = name.length * 0.15; // Adjust duration based on character length
        homeContent.innerHTML = `<h2 class="typing-animation" style="animation-duration: ${duration}s;">WELCOME ${name.toUpperCase()} TO AFTLOZ</h2>`;
        setTimeout(() => {
          homeContent.querySelector('h2').classList.remove('typing-animation');
        }, duration * 1000); // Match the duration of the typing animation
      }
    }

    window.addEventListener('load', () => {
      document.body.classList.add('loaded');
      document.getElementById('namePopup').style.display = 'block';
      document.getElementById('mainContent').classList.add('blurred');
      document.getElementById('header').classList.add('blurred');
      document.getElementById('footer').classList.add('blurred');
    });

    console.log("Media Content Website Loaded");
