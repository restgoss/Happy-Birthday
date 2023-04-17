const initCards = [
    {
      title: 'Хорошо дома отдыхать!',
      description: 'Желаю, чтобы находилось побольше времени на отдых и на любимые занятия &#127866;',
      url: 'https://sun9-21.userapi.com/impg/fgHSf-pnkONbEMJmQMgwmI_8QlrLmIQH-8R68A/khZV-8_hDtU.jpg?size=635x649&quality=96&sign=d674a07bf6555a0c0d5fb3ba38a94c63&type=album'
    },
    {
      title: 'Вот откуда такая зачетная генетика))',
      description: 'Желаю крепкого здоровья, хорошего настроения и здорового духа. &#128074;',
      url: 'https://sun9-43.userapi.com/impg/jWVsThsyXh-lOVx4KGKdejWkELGvE-2uBoMegA/QAPO05MFDB4.jpg?size=461x603&quality=96&sign=62761c22b4e7e24961e43b1b54336c16&type=album'
    },
    {
      title: 'Мы всегда рядом! Мы твоя семья!',
      description: 'Ты построил такую крутую семью, это дорогого стоит! И мы, твои дети, будем продолжать эту тенденцию, только радовать тебя!',
      url: 'https://sun9-33.userapi.com/impg/irtwrx_9tQ2Ny6p6sN6P3r7j8uvp2zRC0Uuq9Q/uCIl_TOZUGk.jpg?size=1280x960&quality=95&sign=fd4ae839327c87a17edf1755427cd96c&type=album'
    },
    {
      title: 'Куда же без неё!',
      description: 'Желаю неутихающей любви и счастья! Всегда оставаться красивым, любимым и любящим мужчиной. &#128157;',
      url: 'https://sun9-23.userapi.com/impg/ItRzYO1Na-VpxQZ4oAg6ku2dDCj4Pg0YY6-17Q/TSbPmzyZVps.jpg?size=768x1024&quality=95&sign=e959af7b5b37483db3a27d57e3bbee70&type=album'
    },
    {
      title: 'Чтобы всегда все получалось!',
      description: 'Успехов во всех начинаниях, работе и хобби. Желаю чтобы то, чем ты занимаешься приносило тебе удовольствие, а самое главное приятный результат. &#129517;',
      url: 'https://sun9-39.userapi.com/impg/X4zKrs8ty-JUtAbGqbghbpFEWCo6ah1sqlpKPw/zTgYgfqjcas.jpg?size=1620x2160&quality=95&sign=2bf1f8386de6aed2e750ea145c4fa3a0&type=album'
    },
    {
      title: 'Будто вчера было...',
      description: 'Желаю выглядеть так круто и молодо всегда! Почаще уделяй время себе, масочки там, барбершоп и всякие приколюхи &#128083;',
      url: 'https://sun9-59.userapi.com/impf/c850628/v850628889/4662d/55aYfasMFiI.jpg?size=640x854&quality=96&sign=1049bf5f53df425c82f63195480aa377&type=album'
    },
    {
      title: 'Очень сильно люблю и скучаю!',
      description: 'Надеюсь будем видеться только чаще, со временем! А я постараюсь сделать так, чтобы такая возможность была почаще &#128151;',
      url: 'https://sun9-30.userapi.com/impg/s2DVcwS6HhTCZ8RfS6oBKPlk8eom3oirQgmcAw/FCsx0zMPp8s.jpg?size=634x676&quality=96&sign=b022623b15d7a61072b6e39f7638fd3d&type=album'
    },
    {
      title: 'Хорошо, когда есть друзья',
      description: 'Желаю только верных, надежных и веселых друзей! И конечно же, побольше времени, на встречи с ними. &#127866;',
      url: 'https://sun9-52.userapi.com/impg/9RYGZsTNv0i7N0uLiMLv9H5c0axwPwWzeCw-Cw/iesa6NSte0Y.jpg?size=2560x1920&quality=95&sign=62393bd76fa188bd86c7a506be2c9bfe&type=album'
    },
    {
      title: 'Поймал удачу за...',
      description: 'Конечно же желаю, чтобы по жизни удача была всегда с тобой! Побольше приятных сюрпризов, выигрышей и хороших вестей. &#127808;',
      url: 'https://sun9-40.userapi.com/impf/cG3vKbpmlh4aV2kH3nFgfNFm_Eki5YvJTZ5-6A/SzVaa6vLs6A.jpg?size=1280x853&quality=96&sign=01f155ad9c5d72f933f7f8aee988ef82&type=album'
    },
    {
      title: 'Моё детство было счастливым!',
      description: 'Благодаря тебе (и маме конечно же), у тебя такие красивые и воспитанные дети!',
      url: 'https://sun9-24.userapi.com/impg/U1ZYVlzKB3L9KQy1bGnGuI4_dDKYp3VaU_cVVQ/Ql07Mjx3LOc.jpg?size=633x740&quality=96&sign=4972c10709dd495d222337c428ab8279&type=album'
    },
    {
      title: 'Назад в 90-е',
      description: 'Будь всегда таким же позитивным, веселым и интересным чуваком! Думаю это я перенял от тебя, и горжусь этим. &#128514;',
      url: 'https://sun9-73.userapi.com/impg/Ux8nReXPOvXFdNHFVETsv8fE-kqESQbNMK3LgA/5BUV658U2ik.jpg?size=638x590&quality=96&sign=60cb3002e39427084242149f86311a05&type=album'
    },
  ];


const max = initCards.length;
const cardTitle = document.querySelector('.popup-title')
const cardDescription = document.querySelector('.popup-descr');
const cardImage = document.querySelector('.popup-img');
const popup = document.querySelector('.popup-overlay');
const closeButton = document.querySelector('.close-btn');
const addButton = document.querySelector('.btn-create');

console.log(closeButton);
console.log(addButton);

addButton.addEventListener('click', openRandomCard);
closeButton.addEventListener('click', closeCard);

function closeCard() {
    popup.classList.remove('active');
}

function openRandomCard() {
    const randomNumber = Math.floor(Math.random() * max);
    console.log(randomNumber);
    cardTitle.textContent = initCards[randomNumber].title;
    cardDescription.innerHTML = initCards[randomNumber].description;
    cardImage.src = initCards[randomNumber].url;
    popup.classList.add('active');

    console.log(cardImage.src, cardDescription.textContent, cardTitle.textContent);
}
