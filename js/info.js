// Dados dos palestrantes
const speakersData = {
    'speaker1': {
      name: 'Luisa Brandt',
      info: 'Apaixonada por tecnologia, entusiasta em cloud, fã de cavaleiros do zodíaco e que ama compartilhar conhecimento. Graduada em Ciência da Computação pela Universidade FUMEC e pós graduanda em Cloud Computing pela PUC Minas. Sou uma AWS Community Builder, umas das Líderes do AWS User Group MG e Co-Fundadora do Mulheres na Nuvem MG.',
      image: "images/vols/luisa.jpeg",
      title: 'Cloud Engineer na Claro Brasil',
      icon: 'fa-twitter-square',
      
    },
    'speaker2': {
      name: 'Paloma Lataliza',
      info: 'Apaixonada por tecnologia, entusiasta em cloud, fã de cavaleiros do zodíaco e que ama compartilhar conhecimento. Graduada em Ciência da Computação pela Universidade FUMEC e pós graduanda em Cloud Computing pela PUC Minas. Sou uma AWS Community Builder, umas das Líderes do AWS User Group MG e Co-Fundadora do Mulheres na Nuvem MG.',
      image: "images/vols/paloma.jpg",
      title: 'Cloud Engineer na Claro Brasil',
      icon: 'fa-user'
    }

  };
  
  // Função para abrir o popup com informações do palestrante
  function openPopup(speakerId) {
    const speaker = speakersData[speakerId];
    if (speaker) {
        document.getElementById("speakerName").textContent = speaker.name;
    document.getElementById("speakerTitle").textContent = speaker.title; 
    document.getElementById("speakerInfo").textContent = speaker.info;
    document.getElementById("speakerImage").src = speaker.image;
      
     
     const speakerIcon = document.getElementById("speakerIcon");
     const iconClass = speaker.icon.startsWith("fa-") ? `fas ${speaker.icon}` : speaker.icon;
     speakerIcon.className = iconClass;

    document.getElementById("speakerPopup").style.display = "block";
    document.getElementById("popupBackground").style.display = "block";
    }
}

  
  // Função para fechar o popup
  function closePopup() {
    document.getElementById("speakerPopup").style.display = "none";
    document.getElementById("popupBackground").style.display = "none"; // Esconde o fundo escuro com transparência
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.close').addEventListener('click', closePopup);
  
    
    window.addEventListener('click', function(event) {
      let popup = document.getElementById("speakerPopup");
      let overlay = document.getElementById("popupBackground");
      if (event.target === overlay) {
        closePopup();
      }
    });
  });
  