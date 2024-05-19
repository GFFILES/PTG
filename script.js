function generateHTML() {
    const file = document.getElementById('fileInput').files[0];
    const audioLink = document.getElementById('audioLink').value;

    if (!file) {
        alert('Please provide a file.');
        return;
    }

    const fileName = file.name.replace(/\.[^/.]+$/, "");
    // Construire le lien avec le nom du fichier
    var link = `https://gffiles.github.io/GFiles/${fileName}.html`;

    // Afficher le lien généré dans l'élément #generatedLink
    var generatedLink = document.getElementById('generatedLink');
    generatedLink.innerHTML = `<a href="${link}" target="_blank">${link}</a>`;

    // Convertir le lien Pillowcase au format souhaité
    let convertedLink = audioLink;
    if (audioLink.includes("pillowcase.su")) {
        const keyId = audioLink.split("f/")[1];
        convertedLink = `https://api.pillowcase.su/api/download/${keyId}`;
    }

    const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>${fileName} | GFiles</title>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/png" href="Assets/images/yf_logo_idea.png" />
        <meta property="og:title" content="${fileName}.mp3" />
        <meta property="og:type" content="website" />
    
        <meta
          property="og:image"
          content="https://cdn.discordapp.com/attachments/1063781123055956102/1063816014372028538/music-disk.png"
        />
        <meta
          property="og:description"
          content="GFiles.io is free file-sharing service."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="Assets/main.css" />
        <script
          src="https://kit.fontawesome.com/e480c8197c.js"
          crossorigin="anonymous"
        ></script>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-3.5.1.js"
        ></script>
        <script type="text/javascript" src="JS/index.js"></script>
        <script type="text/javascript" src="JS/test.js"></script>
        <script
          type="text/javascript"
          src="code.jquery.com/jquery-3.6.3.js"
        ></script>
        <script type="text/javascript" src="JS/particles.js"></script>
        <script async type="text/javascript" src="JS/player.js"></script>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js/vaafb692b2aea4879b33c060e79fe94621666317369993"
          integrity="sha512-0ahDYl866UMhKuYcW078ScMalXqtFJggm7TmlUtp0UlD4eQk0Ixfnm5ykXKvGJNFjLMoortdseTfsRT8oCfgGA=="
          data-cf-beacon='{"rayId":"7890836d1cb0d977","version":"2022.11.3","r":1,"token":"bf9da2ec7413430c91a24f3eab7c9725","si":100}'
          crossorigin="anonymous"
        ></script>
    
        <style>
          #player {
            display: flex;
            flex-direction: row;
            width: fit-content;
            justify-content: center;
    
            margin-top: 15px;
            align-items: center;
          }
          #player i {
            color: #ffffff;
          }
          #volume {
            position: relative;
            height: 5px;
            width: 200px;
            background: #555;
            border-radius: 15px;
            margin-left: 15px;
            margin-right: 25px;
          }
          #volume .ui-slider-range-min {
            height: 5px;
            width: 200px;
            position: absolute;
            background: #245a5f;
            border: none;
            border-radius: 10px;
            outline: none;
          }
          #volume .ui-slider-handle {
            width: 20px;
            height: 20px;
            border-radius: 20px;
            background: rgb(228, 228, 228);
            position: absolute;
            text-shadow: 0 0 10px #333;
            margin-left: -8px;
            margin-top: -8px;
            cursor: pointer;
            outline: none;
            -webkit-box-shadow: 0px 0px 15px 1px r "Roboto" a(0, 0, 0, 0.41);
            box-shadow: 0px 0px 15px 1px r "Roboto" a(0, 0, 0, 0.41);
          }
        </style>
        <script></script>
      </head>
      <script>
        function toggleMode() {
          document.body.classList.toggle("dark-mode");
          document
            .getElementById("audio-player-container")
            .classList.toggle("player-dark");
          document
            .getElementById("jackb")
            .classList.toggle("header-background-dark");
    
          console.log(document.getElementById("jackb2").getAttribute("src"));
    
          if (document.body.classList.contains("dark-mode") == false) {
            if (
              document.getElementById("jackb2").getAttribute("src") ==
              "/images/music-disk.png"
            ) {
              document.getElementById("jackb2").classList.remove("invert-colour");
            }
            document.getElementById("dark-mode-button").style.display = "block";
            document.getElementById("light-mode-button").style.display = "none";
            document
              .getElementById("download-btn-1")
              .classList.remove("invert-colour");
            document
              .getElementById("audio-btn-1")
              .classList.remove("invert-colour");
            document
              .getElementById("share-btn-1")
              .classList.remove("invert-colour");
            localStorage.setItem("theme", "light");
          } else {
            if (
              document.getElementById("jackb2").getAttribute("src") ==
              "/images/music-disk.png"
            ) {
              document.getElementById("jackb2").classList.add("invert-colour");
            }
            document.getElementById("dark-mode-button").style.display = "none";
            document.getElementById("light-mode-button").style.display = "block";
            document
              .getElementById("download-btn-1")
              .classList.add("invert-colour");
            document.getElementById("audio-btn-1").classList.add("invert-colour");
            document.getElementById("share-btn-1").classList.add("invert-colour");
            localStorage.setItem("theme", "dark");
          }
        }
    
        const currentTheme = localStorage.getItem("theme");
    
        if (currentTheme == "dark") {
          document.body.classList.add("dark-mode");
          if (
            document.getElementById("jackb2").getAttribute("src") ==
            "/images/music-disk.png"
          ) {
            document.getElementById("jackb2").classList.add("invert-colour");
          }
          document
            .getElementById("audio-player-container")
            .classList.add("player-dark");
          document.getElementById("jackb").classList.add("header-background-dark");
          document.getElementById("download-btn-1").classList.add("invert-colour");
          document.getElementById("audio-btn-1").classList.add("invert-colour");
          document.getElementById("share-btn-1").classList.add("invert-colour");
          document.getElementById("dark-mode-button").style.display = "none";
          document.getElementById("light-mode-button").style.display = "block";
        } else if (currentTheme == "light") {
          document.body.classList.add("light-mode");
          document
            .getElementById("audio-player-container")
            .classList.remove("player-dark");
          document
            .getElementById("jackb")
            .classList.remove("header-background-dark");
        }
      </script>
      <body>
        <div class="container">
          <div class="logoarea">
            <a href="https://discord.gg/DhsGWAHqVg"
              ><img class="logo" src="Assets/images/yf_logo_idea.png"
            /></a>
            <div class="logosubtext">Join GHub Discord Server !
              
            </div>
          </div>
    <img class="cover-image" src="Assets/images/giphy.gif" style="border-radius:24px;" width="250" height="165">
          <div class="songtitle">${fileName}</div>
          <div id="player">
            <i class="fa fa-volume-down"></i>
            <div id="volume"></div>
            <i class="fa fa-volume-up"></i>
          </div>
          <div style="font-family: 'gm'; font-size: 13px; color: #8e00e0"></div>
          <audio
            src="${convertedLink}"
            id="audio-player"
          ></audio>
          <div class="controls">
            <div class="playpause" id="playpause"><i class="fas fa-play"></i></div>
            <div class="progressbar">
              <div class="pbt">
                <div class="timedone" id="timedone">00:00</div>
                <div class="timetotal" id="timetotal">00:00</div>
              </div>
              <div class="pbb" id="pbb">
                <div class="pbbackground" id="pbbackground"></div>
                <div class="pbforeground" id="pbforeground"></div>
              </div>
            </div>
            <div
              class="download"
              onclick="downloadURI('${convertedLink}','${fileName}.mp3');"
            >
              <i class="fas fa-download"></i>
            </div>
          </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.2/jquery-ui.min.js"></script>
        <script>
          $("#volume").slider({
            min: 0,
            max: 100,
            value: 100,
            range: "min",
            slide: function (event, ui) {
              SetVolume(ui.value);
            },
          });
        </script>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js/vaafb692b2aea4879b33c060e79fe94621666317369993"
          integrity="sha512-0ahDYl866UMhKuYcW078ScMalXqtFJggm7TmlUtp0UlD4eQk0Ixfnm5ykXKvGJNFjLMoortdseTfsRT8oCfgGA=="
          data-cf-beacon='{"rayId":"78909c587fc2fe20","version":"2022.11.3","r":1,"token":"bf9da2ec7413430c91a24f3eab7c9725","si":100}'
          crossorigin="anonymous"
        ></script>
      </body>
    </html>`;

    // Créer un objet Blob à partir du HTML généré
    const blob = new Blob([html], { type: 'text/html' });
    // Créer un lien pour télécharger le fichier
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${fileName}.html`;
    // Simuler un clic sur le lien pour déclencher le téléchargement
    downloadLink.click();
}
