(function() {
  console.log('downloads.js loaded!');

  let controller = new ScrollMagic.Controller();

  let mainTimeline = new TimelineMax();

  mainTimeline
    .fromTo(
      '.DownloadsPage__Downloads-Header',
      0.5,
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        y: 0,
        autoAlpha: 1,
      },
      '+=0',
    )
    .fromTo(
      '.DownloadsPage__Downloads-Sidebar',
      0.5,
      {
        xPercent: -20,
        autoAlpha: 0,
      },
      {
        xPercent: 0,
        autoAlpha: 1,
      },
      '+=0.3',
    )
    .fromTo(
      '.DownloadsPage__Downloads-List',
      0.5,
      {
        xPercent: 20,
        autoAlpha: 0,
      },
      {
        xPercent: 0,
        autoAlpha: 1,
      },
      '+=0.3',
    );

  let mainScene = new ScrollMagic.Scene({
    triggerElement: '',
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(mainTimeline)
    .addTo(controller);

  const buttons = Array.from(document.querySelectorAll('li > button'));

  const loadFiles = e => {
    let {id} = e.currentTarget.dataset;
    let selectedBoard = boards.find(board => board.name === id);

    buttons.forEach(button => button.classList.remove('active'));
    if (!e.currentTarget.classList.contains('active')) {
      e.currentTarget.classList.add('active');
    }
    generateFilesList(selectedBoard);
  };

  let boards = [
    {
      name: 'a-level',
      type: 'boards',
      files: [
        {
          filename: 'A.pdf',
          description: 'A level - 1',
          size: '787KB',
        },
        {
          filename: 'A1.pdf',
          description: 'A level - 1',
          size: '777KB',
        },
        {
          filename: 'AS.pdf',
          description: 'A level - 1',
          size: '385KB',
        },
        {
          filename: 'AS-1.pdf',
          description: 'A level - 1',
          size: '312KB',
        },
      ],
    },
    {
      name: 'cbse',
      type: 'boards',
      files: [
        {
          filename: 'CLASS 5.pdf',
          description: 'Cbse Class 5',
          size: '782KB',
        },
        {
          filename: 'CLASS 6.pdf',
          description: 'Cbse Class 6',
          size: '653KB',
        },
        {
          filename: 'CLASS 7.pdf',
          description: 'Cbse Class 7',
          size: '782KB',
        },
        {
          filename: 'Class-8.docx',
          description: 'Cbse Class 8',
          size: '732KB',
        },
        {
          filename: 'Class-9.docx',
          description: 'Cbse Class 9',
          size: '1539KB',
        },
        {
          filename: 'Class-10.docx',
          description: 'Cbse Class 10',
          size: '546KB',
        },
        {
          filename: 'Class-11.docx',
          description: 'Cbse Class 11',
          size: '62KB',
        },
        {
          filename: 'Class-12.pdf',
          description: 'Cbse Class 12',
          size: '111KB',
        },
      ],
    },
    {
      name: 'icse',
      type: 'boards',
      files: [
        {
          filename: 'Class-8th-ICSE.docx',
          size: '25KB',
          description: 'Class 8 - ICSE',
        },
        {
          filename: 'Class-9th-ICSE.docx',
          size: '21KB',
          description: 'Class 9 - ICSE',
        },
        {
          filename: 'Class-10th-ICSE.rtf',
          size: '52KB',
          description: 'Class 10 - ICSE',
        },
      ],
    },
    {
      name: 'igcse',
      type: 'boards',
      files: [
        {
          filename: '425123-june-2016-question-paper-11.pdf',
          size: '915KB',
          description: 'June 2016 - IGCSE - Quesion Paper 11',
        },
        {
          filename: 'IGCSE-10th.pdf',
          size: '143KB',
          description: '10th - IGCSE',
        },
      ],
    },
    {
      name: 'isc',
      type: 'boards',
      files: [
        {
          filename: '11th.pdf',
          size: '309KB',
          description: '11th - ICSE',
        },
        {
          filename: '12th.pdf',
          size: '59KB',
          description: '12th - ICSE',
        },
      ],
    },
    {
      name: 'puc',
      type: 'boards',
      files: [
        {
          filename: 'PU-1.pdf',
          size: '1080KB',
          description: 'PUC I',
        },
        {
          filename: 'PU-II.pdf',
          size: '1531KB',
          description: 'PUC II',
        },
      ],
    },
    {
      name: 'bitsat',
      type: 'competitive',
      files: [
        {
          filename: 'BITSAT-Solved-Paper-2017.pdf',
          size: '3357KB',
          description: 'BITSAT 2017 Question Paper Solved',
        },
      ],
    },
    {
      name: 'cet',
      type: 'competitive',
      files: [
        {
          filename: 'CET-che2016.pdf',
          size: '927KB',
          description: 'CET 2016',
        },
      ],
    },
    {
      name: 'jee',
      type: 'competitive',
      files: [
        {
          filename: 'JEE-Adv-2018-Paper1_ENGLISH.pdf',
          size: '2355KB',
          description: 'JEE Advance 2018 - Paper 1',
        },
        {
          filename: 'JEE-Adv-2018-Paper2_ENGLISH.pdf',
          size: '604KB',
          description: 'JEE Advance 2018 - Paper 2',
        },
        {
          filename: 'jee-main-2018-question-paper-code-A.pdf',
          size: '619KB',
          description: 'JEE Main 2018 -Paper Code A',
        },
      ],
    },
    {
      name: 'kvpy',
      type: 'competitive',
      files: [
        {
          filename: 'KVPY-SA.docx',
          size: '1628KB',
          description: 'KVPY - SA',
        },
        {
          filename: 'KVPY-SX.pdf',
          size: '3498KB',
          description: 'KVPY - SX',
        },
      ],
    },
    {
      name: 'neet',
      type: 'competitive',
      files: [
        {
          filename: 'neet-code-cc-question-paper.pdf',
          size: '3076KB',
          description: 'NEET Code CC Question Paper',
        },
      ],
    },
    {
      name: 'ntse',
      type: 'competitive',
      files: [
        {
          filename: 'NTSED-Stage-2.docx',
          size: '3682KB',
          description: 'NTSED Stage 2',
        },
        {
          filename: 'NTSE-SET-1-Stage-1.docx',
          size: '3542KB',
          description: 'NTSE Set 1 Stage 1',
        },
      ],
    },
    {
      name: 'srm',
      type: 'competitive',
      files: [
        {
          filename: 'SRM btech_health_sciences_ug_model_questions_answers.pdf',
          size: '858KB',
          description:
            'SRM B.Tech - Health Sciences - Under Graduate - Model Questions',
        },
      ],
    },
  ];

  let generateFilesList = board => {
    let output = ``;
    let destination = document.querySelector('.DownloadsPage__Downloads-List');
    if (board) {
      let {files, name, type} = board;

      files.forEach(file => {
        let outputPerFile = `<li class="DownloadsPage__Download">
                              <a href="./downloads/${type}/${name}/${
          file.filename
        }" target="_blank">${file.filename}</a>
                              <p class="DownloadsPage__Download-Size">Size: <span>${
                                file.size
                              }</span></p>
                              <p class="DownloadsPage__Download-Description">Description: <span>${
                                file.description
                              }</span></p>
                            </li>`;

        output += outputPerFile;
      });
      destination.innerHTML = output;
    } else {
      destination.innerHTML = `<li>No files Available Currently!</li>`;
    }
  };

  //export { loadFiles, boards, generateBoardsList };
  let defaultBoard = boards.find(board => board.name === 'cbse');
  buttons.find(button => button.dataset.id === 'cbse').classList.add('active');
  generateFilesList(defaultBoard);

  buttons.map(el => {
    el.addEventListener('click', loadFiles);
  });
})();
