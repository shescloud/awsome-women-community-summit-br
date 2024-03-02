// Dados dos palestrantes
const speakersData = {
    'keynote': {
      name: 'Claudia Charro',
      info: 'Claudia Charro é formada em Pedagogia e Sistemas de Informação pela USP e atualmente é Technology Strategist na Microsoft. Está desde 2001 na área de tecnologia atuou como desenvolvedora, analista de sistemas, arquiteta e em 2015 transicionou para Cloud Computing como instrutora técnica e arquiteta de soluções na Amazon Web Services.Claudia foi uma das fundadoras do projeto TheFemTech e atualmente coordena as mentorias de carreira em grupo e ações de preparação promovidas pela Microsoft. Seu sonho é impactar a vida das pessoas através da tecnologia e promover ambientes saudáveis e de alta performance para qualquer pessoa que deseje ter uma carreira na tecnologia.',
      image: "images/speakers/charro.jpeg",
      title: 'Estrategista Técnica na Microsoft',      
      icon: '',
    },
    'keynote2': {
      name: 'Yara Mascarenhas',
      info: 'Formada em Ciências da Computação pelo ICMC / USP - em São Carlos - Yara é co-fundadora da Globalcode e CEO do The Developers Conference (TDC), maior evento de profissionais de tecnologia da América Latina! Atua diariamente com as maiores empresas do setor para a co-criação de estratégias que gerem resultados através de interações - digitais e presenciais - com profissionais de tecnologia.A mais de uma década colabora com a gestão de comunidades e ecossistemas de inovação aberta!   Recentemente criou a ARENA Eventos Digitais, com objetivo de apoiar a transformação dos eventos presenciais aproveitando todo o potencial de geração de valor dos eventos online.',
      image: "images/speakers/yara.jpeg",
      title: "CEO at TDC The Developer's Conference",    
      icon: '',  
    },
    'ini1': {
      name: 'Ana Cunha',
      info: 'Ana Cunha é Developer Advocate na AWS para América Latina. Anteriormente, ela trabalhou como engenheira de desenvolvimento de software na Amazon.com',
      image: "images/speakers/ana-cunha.jpeg",
      title: 'Senior Developer Advocate na AWS',
      icon: '',
    },
    'ini2': {
      name: 'Leticia Massae',
      info: 'Leticia trabalha como Cloud DevOps e engenheira de segurança na GFT. Faz parte dos programas AWS Community Builders e AWS Partner Ambassadors LATAM desde 2022.Graduada em Análise e Desenvolvimento de Programas pelo IBTA e Análise de Sistemas pela FIAP. Ela é especialista em DevOps trabalhando em soluções organizacionais automatizadas, segurança e trabalhou em uma ampla gama de serviços AWS para grandes empresas.',
      image: "images/speakers/leticia.jpg",
      title: 'DevOps Engineer da AWS Business Unit na GFT',
      icon: '',
    },
    'ini3': {
      name: 'Adriane Müller',
      info: 'Tenho 27 anos, trabalho com TI desde 2016.Passando por várias areas de infraestrutura desde manutenção de computadores, instalação de componentes de rede até chegar até o atual momento no cargo de SRE.',
      image: "images/speakers/adriane-muller.png",
      title: 'SRE na Serasa',
      icon: '',
    },
    'ini4': {
      name: 'Lanay Marques',
      info: 'Nordestina. + 10 anos de experiência profissional na área (Redes, Infraestrutura, suporte e DevOps).     Entusiasta da cultura DevOps e competências SRE.Mestre acadêmica na Universidade Federal de Sergipe especializado em Redes de Computadores e Sistemas Distribuídos. (2020)Ex. Professora voluntária da UFS. (2019)Bacharel em sistemas de informação na Universidade Tiradentes (2017).Técnica em informática (2012).',
      image: "images/speakers/lanay-marques.jpg",
      title: 'DevOps na Claro Brasil',
      icon: '',
    },
    'ini5': {
      name: 'Roze Anne Cardoso',
      info: 'Soteropolitana de coração, mãe de pet, devops de alma e platform engineer de profissão.Sou cientista da computação e desde criança quero saber como as coisas entram no computador, amo tecnologia e principalmente explicar coisas complexas de forma simplificada',
      image: "images/speakers/roze-anne-cardoso.jpg",
      title: 'Platform engineer',
      icon: '',
    },
    'ini6': {
      name: 'Daniele Nazaré',
      info: 'Mestranda em Engenharia Eletrônica e Computação pelo Instituto Tecnológico de Aeronáutica (ITA), e bacharel em Engenharia de Computação pelo Instituto Nacional de Telecomunicações (Inatel), com experiência em desenvolvimento de aplicações Web e estudos em interface homem máquina baseada nas Heurísticas de Nielsen e acessibilidade. Contribuo com a comunidade tecnológica participando de organizações eventos e trilhas, ministrando palestras e apresentando minicursos, ajudando principalmente a comunidade de software livre e open source a disseminar a importância de tecnologias abertas, livres e emergentes. Os principais eventos da comunidade na qual tive a oportunidade de palestrar inclui a 9ª semana de SI da USP, Cryptorave, ABCdev, QA-Ladies, TDC, Brazil JS On the Road, Python Brasil 2019, Campus Party, Latinoware, Campus Party.',
      image: "images/speakers/daniele-nazare-tavares.jpg",
      title: 'Mestranda em Engenharia Eletrônica e computação no ITA',
      icon: '',
    },
    'ini6': {
      name: 'Daniele Nazaré',
      info: 'Mestranda em Engenharia Eletrônica e Computação pelo Instituto Tecnológico de Aeronáutica (ITA), e bacharel em Engenharia de Computação pelo Instituto Nacional de Telecomunicações (Inatel), com experiência em desenvolvimento de aplicações Web e estudos em interface homem máquina baseada nas Heurísticas de Nielsen e acessibilidade. Contribuo com a comunidade tecnológica participando de organizações eventos e trilhas, ministrando palestras e apresentando minicursos, ajudando principalmente a comunidade de software livre e open source a disseminar a importância de tecnologias abertas, livres e emergentes. Os principais eventos da comunidade na qual tive a oportunidade de palestrar inclui a 9ª semana de SI da USP, Cryptorave, ABCdev, QA-Ladies, TDC, Brazil JS On the Road, Python Brasil 2019, Campus Party, Latinoware, Campus Party.',
      image: "images/speakers/daniele-nazare-tavares.jpg",
      title: 'Mestranda em Engenharia Eletrônica e computação no ITA',
      icon: '',
    },
    'av1': {
      name: 'Ariane Vieira',
      info: 'Ariane Vieira trabalha com TI há 8 anos e atualmente é arquiteta de soluções na AWS com o foco em GovTechs, onde atua apoiando os clientes em suas diversas fases de adoção da nuvem, passando por projetos de migração de dados, modernização e otimização de custos, sempre buscando as melhores práticas. Anteriormente trabalhou no setor financeiro em projetos de inovação em canais digitais para o contato com os clientes, adquirindo experiencia em sistemas distribuídos, de mensageira em ambientes on-premises e realizando migrações para AWS.',
      image: "images/speakers/ariane.png",
      title: 'Arquiteta de Soluções para o Setor Público na AWS',
      icon: '',
    },
    'av2': {
      name: 'Laura Zitelli',
      info: 'Laura Zitelli é Arquiteta de Soluções para Parceiros na AWS com foco em Setor Público, onde atua apoiando os parceiros em sua jornada para a nuvem AWS, passando por projetos de migração de dados, modernização e otimização de custos. É entusiasta da área de AI/ML e também possui interesse em Analytics e IaC.',
      image: "images/speakers/laura-zitelli-de-souza.png",
      title: 'Arquiteta de Soluções para o Setor Público na AWS',
      icon: '',
    },
    'av3': {
      name: 'Isadora Ribeiro',
      info: 'Curiosa, nerd, otimista, há 25 anos trabalhando em TI - sendo 11 como puramente dev e os últimos 14 em DevOps/SRE, evangelista de Golang e apaixonada por time series..',
      image: "images/speakers/isadora-ribeiro.jpg",
      title: 'SRE na Dinamize',
      icon: '',
    },
    'av4': {
      name: 'Marília Rocha',
      info: "Com mais de 4 anos de experiência em cybersegurança, Marília Rocha é apaixonada por Application Security e Social Engineering. Com MBA em Cyber Security com ênfase em Forensics, Ethical Hacking e DevSecOps pela FIAP e atual aluna de mestrado na linha de pesquisa de Segurança de Aplicações pelo CIn na Universidade Federal de Pernambuco, Marília sempre esteve em constante compromisso e dedicação com à segurança cibernética. Atualmente, contribui ativamente como profissional de Application Security no Mercado Livre, onde aplica seus conhecimento para fortalecer as defesas digitais através de Modelagens de Ameaças, Ciclo de Vida de Desenvolvimento Seguro (Secure Software Development Life Cycle (SSDLC) e educação dos desenvolvedores em Segurança de Aplicações através do programa Security Champions da OWASP, desenvolvendo uma abordagem holística que abrange desde a concepção segura de códigos até a implementação de práticas DevSecOps, garantindo a integridade e confidencialidade dos sistemas.Ao longo da carreira, participou de inúmeras iniciativas bem-sucedidas, protegendo ativos digitais e mitigando riscos sendo motivada pela busca incessante de desafios e pela missão contínua de fortalecer a resiliência cibernética em um cenário em constante evolução.",
      image: "images/speakers/marilia-rocha.jpg",
      title: 'SRE na Serasa',
      icon: '',
    },
      'av5': {
        name: 'Ana Beatriz Neri',
        info: "Ana Neri é engenheira de software sênior especializada em streaming ao vivo e fluxo de usuários em larga escala em uma das principais plataformas de educação financeira. Ela utiliza NestJS, Typescript, NodeJS e Serverless em seu trabalho. Ana foi reconhecida como Embaixadora Women Tech Makers pelo Google, lidera a comunidade NodeBR e é voluntária no Womakerscode. Ela cria conteúdo técnico em seus canais de mídia social e mostra suas habilidades como baixista de heavy metal e rata de academia.",
        image: "images/speakers/ana-beatriz-neri.jpg",
        title: 'Senior Software Engineer',
        icon: '',
    },
    'av6': {
      name: 'Natália Granato',
      info: "Uma mulher negra e lésbica de Ribeirão das Neves, cidade da periferia, da região metropolitana de Belo Horizonte. Tenho 29 anos, sou amante de futebol, Galo Doido e Valorant. Há quase dois anos realizei uma transição de carreira, saindo das operações de telemarketing para DevOps, hoje atuo com Cloud Native e as premissas da CNCF, ajudando clientes a migrar do modelo VM para o modelo Docker, avaliando suas aplicações, seguindo boas práticas e pensando sempre em estabilidade e controle. Apto aplicações para rodar em ambientes Kubernetes, sendo compatível com Clusters K8S Cloud Native Certified. DevOps de Cria é observabilidade, Linux e contêineres.",
      image: "images/speakers/natalia-granato.jpg",
      title: 'DevOps na Jack Experts',
      icon: '',
    },
    'av10': {
      name: 'Dani Monttêiro',
      info: "Dani Monteiro, com mais de 20 anos de experiência em dados e inteligência artificial, é uma figura destacada e respeitada internacionalmente. Atualmente atuando como consultora no “Seu ChatGPT” e instrutora na Dani Academy, ela possui um histórico profissional diversificado, incluindo papéis como DBA, arquiteta e engenheira de dados. Dani é mestra em Engenharia da Computação e acumulou diversos prêmios de prestígio, como LinkedIn Top Voice, Google Developer Expert (GDE), e MongoDB Female Innovator.Conhecida por sua habilidade de comunicação, é TEDx Speaker, palestrante renomada e escritora, tendo sido a primeira brasileira a palestrar no MongoDB World em Nova York. Com uma paixão por dados e pessoas, Dani inspira através de suas palavras e ensinamentos em eventos globais e nacionais",
      image: "images/speakers/dani.jpeg",
      title: 'Consultora no “Seu ChatGPT” e Instrutora na Dani Academy',
      icon: '',
    },
    'av7-t': {
      name: 'Tatiana Barros',
      info: "Tatiana Barros, DevRel Manager no Meteor Software, entusiasta tech apaixonada por creative code, computação natural, futurismo, sci-fi e IAs generativas, especialmente GitHub Copilot. Como mulher neurodivergente, abordo desafios na TI e a síndrome do impostor nas redes sociais, crio frameworks de estudos para autodidatas e toma café quente mesmo em dias de sol.",
      image: "images/speakers/tatiana-barros.jpg",
      title: 'Developer Relations Manager na Meteor Software',
      icon: '',
    },
    'car1': {
      name: 'Diuliana França',
      info: "Diuliana França é Diretora de Serviços Cloud na Embratel. Formada em Processamento de Dados pelo Colégio Técnico da Unicamp, Administração de Empresas pela Pontifícia Universidade Católica de Campinas, pós-graduada em Estratégia de Empresas pela Unicamp,  Gestão e Governança de TI pelo Instituto de Pesquisas e Tecnologia – IPT e especialização em Business Digital Transformation pela INSEAD Business School. Tem mais de 25 anos atuando no mercado de TI e nos últimos anos esteve envolvida em toda estratégia de cloud B2B da empresa, estruturando o centro de excelência de serviços multicloud e o portfólio cloud do grupo América Móvil em LATAM.",
      image: "images/speakers/diuliana.jpeg",
      title: 'Diretora de Serviços Cloud B2B at Embratel',
      icon: '',
    },
    'car2': {
      name: 'Fernanda Guglielmo',
      info: "Me chamo Fernanda, natural do Rio de Janeiro, e minha paixão pela tecnologia, inovação e interação humana molda minha jornada. Movida pela curiosidade, estou sempre em busca de novos aprendizados para me manter atualizada e inspirada. Nos momentos de lazer, encontro meu refúgio na arte de viajar, explorando novos lugares e absorvendo diversas culturas. Além disso, valorizo profundamente os vínculos familiares e amizades, buscando cultivar momentos significativos rodeada daqueles que tornam minha vida mais rica e especial.",
      image: "images/speakers/fernanda-guglielmo.jpg",
      title: 'Agilista na Claro/Embratel',
      icon: '',
    },
    'car4': {
      name: 'Beatriz Oliveira',
      info: "Beatriz Oliveira atua como Cloud Engineer na Vivo e é líder do grupo de afinidade Vivo Mulheres. Sua formação técnica e acadêmica é dedicada à Infraestrutura de TI e Arquitetura de Soluções. Além disso, é Cofundadora da Comunidade SysAdminas, um grupo que fortalece a presença feminina na área de TI, promovendo capacitação técnica e empregabilidade. Por seu trabalho em comunidades, ela tem sido reconhecida por organizações de tecnologia através de diversos programas e prêmios, como AWS Community Builder, Google's Women TechMakers Ambassador, VMware vExpert e Microsoft MVP.",
      image: "images/speakers/beatriz-oliveira.png",
      title: 'Consultora de Infraestrutura de TI na Telefonica & Community Manager na SysAdminas',
      icon: '',
    },
    'car5': {
      name: 'Elizabeth Souza',
      info: "Elizabeth é graduada em Administração de Sistemas de Informação, pós graduada em Gestão da Informação. Está na área de TI há cerca de 30 anos. Atualmente ela é analista de infraestrutura de TI no Senac Minas, área na qual vem trilhando durante toda sua carreira com paixão e aprendizado contínuo. Possui certificação Microsoft, VMware. Faz parte de programas de reconhecimento da VMware e Veeam como resultado da contribuição em comunidades de TI, engajando pessoas tanto para o crescimento profissional quanto pessoal. Busca sempre apoiar e trazer mais pessoas para a área de tecnologia.",
      image: "images/speakers/elizabeth-souza.jpg",
      title: 'Analista de Infraestrutura de TI',
      icon: '',
    },
    'car6': {
      name: 'Camilla Martins',
      info: "Não-binário. Punk, paulista, santista. Docker Community Leader. Sou Senior Site Reliability Engineer e atualmente trabalho na Storyblok, com pós em Forense Computacional e mestrando em Operação, Avaliação e Gerenciamento Avançado de Redes de Computadores na Universidade Federal do Estado do Rio de Janeiro. Sou Docker Community Leader premiada duas vezes pela Docker Inc, Docker Captain, DevOpsDays Core Organizer, Impulso Expert, Google Developer Expert em Cloud, Hashicorp Ambassador, organizadora e palestrante de DevOpsDays pelo Brasil e instrutora e curadora de conteúdo pela LinuxTips. Nas horas vagas, estou curtindo a vida viajando por aí (já viajei 10 países e contando) e afofando meus gatinhos pretos <3 ela/ele https://pronoun.is/they",
      image: "images/speakers/camilla.png",
      title: 'Senior Site Reliability Engineer Na Storyblok',
      icon: '',
    },
    'car7': {
      name: 'Samantha Morais Nunes',
      info: "Head de Segurança da Informação no netLex, Coordenadora e Professora de Pós-graduação na PUC Minas nos cursos Cibersegurança e Governança de Dados e Gestão de Cibersegurança e Riscos. Formada em Ciência da Computação e pós-graduada em Segurança da Informação e Direito Digital.",
      image: "images/speakers/samantha-morais-nunes.jpeg",
      title: 'Head de Segurança da Informação no netLex, Coordenadora e Professora de Pós-graduação na PUC Minas',
      icon: '',
    },
    'car10': {
      name: 'Marilia Brito',
      info: "Marilia Brito é Sr Technical Instructor da AWS, especialista em analytics. Iniciou na AWS em um programa de formação de arquitetos de soluções e hoje ela ensina de forma leve e descomplicada desde o cliente que está iniciando sua jornada na nuvem, até aqueles que já estão em um estágio mais avançado de conhecimento.",
      image: "images/speakers/mari.jpeg",
      title: 'Senior Technical Trainer na Amazon Web Services (AWS)',
      icon: '',
    },
    'pnl1': {
      name: 'Ana Cecília',
      info: "",
      image: "images/speakers/ana-ceci.jpeg",
      title: 'Senior Tech Recruiter na ClickBus',
      icon: '',
    },
    'pnl2': {
      name: 'Camila Pires',
      info: "Atuo há mais de 9 anos na área de Gestão de Pessoas. Já passei por empresas nacionais e multinacionais de segmentos diversos.Atualmente, sou Business Partner na Vale, Influencer, Palestrante e Mentora.",
      image: "images/speakers/camila-pires.jpeg",
      title: 'HR Business Partner | HRBP | Top Voice Recrutamento | Mentora de Carreira | Parcerias | Palestras',
      icon: '',
    },
    'pnl3': {
      name: 'Gabriella Meira',
      info: "",
      image: "images/speakers/gabi.jpeg",
      title: 'Talent Acquisition | Recrutadora | Analista Recrutamento e Seleção',
      icon: '',
    },
    'pnl4': {
      name: 'Natália Balancin',
      info: "",
      image: "images/speakers/natalia-bal.jpeg",
      title: 'Training and Development Lead | Talent Strategy | HR Generalist | Customer Care | Psychoterapist',
      icon: '',
    },
    'ini12': {
      name: 'Pollyanna Gonçalves',
      info: "Mestre em Ciência da Computação pela UFMG e Senior Data Manager na Hotmart. Na busca por problemas para serem resolvidos com dados desde 2011 e early-adopter de gadgets inúteis!",
      image: "images/speakers/polly.jpeg",
      title: 'Gerente Sr. Dados na Hotmart',
      icon: '',
    },


    


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
  