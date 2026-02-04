const emojis = [
    { emoji: '😀', name: 'Grinning Face' },
    { emoji: '😃', name: 'Grinning Face with Big Eyes' },
    { emoji: '😄', name: 'Grinning Face with Smiling Eyes' },
    { emoji: '😁', name: 'Beaming Face with Smiling Eyes' },
    { emoji: '😆', name: 'Grinning Squinting Face' },
    { emoji: '😅', name: 'Grinning Face with Sweat' },
    { emoji: '🤣', name: 'Rolling on the Floor Laughing' },
    { emoji: '😂', name: 'Face with Tears of Joy' },
    { emoji: '🙂', name: 'Slightly Smiling Face' },
    { emoji: '🙃', name: 'Upside Down Face' },
    { emoji: '😉', name: 'Winking Face' },
    { emoji: '😊', name: 'Smiling Face with Smiling Eyes' },
    { emoji: '😇', name: 'Smiling Face with Halo' },
    { emoji: '🥰', name: 'Smiling Face with Heart Eyes' },
    { emoji: '😍', name: 'Smiling Face with Heart Eyes' },
    { emoji: '🤩', name: 'Star Struck' },
    { emoji: '😘', name: 'Face Blowing a Kiss' },
    { emoji: '😗', name: 'Kissing Face' },
    { emoji: '😚', name: 'Kissing Face with Closed Eyes' },
    { emoji: '😙', name: 'Kissing Face with Smiling Eyes' },
    { emoji: '🥲', name: 'Smiling Face with Tear' },
    { emoji: '😋', name: 'Face Savoring Food' },
    { emoji: '😛', name: 'Face with Tongue' },
    { emoji: '😜', name: 'Winking Face with Tongue' },
    { emoji: '🤪', name: 'Zany Face' },
    { emoji: '😌', name: 'Relieved Face' },
    { emoji: '😔', name: 'Pensive Face' },
    { emoji: '😑', name: 'Expressionless Face' },
    { emoji: '😐', name: 'Neutral Face' },
    { emoji: '😏', name: 'Smirking Face' },
    { emoji: '😒', name: 'Unamused Face' },
    { emoji: '🙄', name: 'Face with Rolling Eyes' },
    { emoji: '😬', name: 'Grimacing Face' },
    { emoji: '🤥', name: 'Lying Face' },
    { emoji: '😌', name: 'Relieved Face' },
    { emoji: '😔', name: 'Pensive Face' },
    { emoji: '😪', name: 'Sleepy Face' },
    { emoji: '🤤', name: 'Drooling Face' },
    { emoji: '😴', name: 'Sleeping Face' },
    { emoji: '😷', name: 'Face with Medical Mask' },
    { emoji: '🤒', name: 'Face with Thermometer' },
    { emoji: '🤕', name: 'Face with Head Bandage' },
    { emoji: '🤢', name: 'Nauseated Face' },
    { emoji: '🤮', name: 'Face Vomiting' },
    { emoji: '🤧', name: 'Sneezing Face' },
    { emoji: '🤠', name: 'Cowboy Hat Face' },
    { emoji: '🤡', name: 'Clown Face' },
    { emoji: '🤥', name: 'Lying Face' },
    { emoji: '😈', name: 'Smiling Face with Horns' },
    { emoji: '👿', name: 'Angry Face with Horns' },
    { emoji: '👹', name: 'Ogre' },
    { emoji: '👺', name: 'Goblin' },
    { emoji: '💀', name: 'Skull' },
    { emoji: '👻', name: 'Ghost' },
    { emoji: '👽', name: 'Alien' },
    { emoji: '🤖', name: 'Robot' },
    { emoji: '😺', name: 'Grinning Cat' },
    { emoji: '😸', name: 'Grinning Cat with Smiling Eyes' },
    { emoji: '😹', name: 'Cat with Tears of Joy' },
    { emoji: '😻', name: 'Smiling Cat with Heart Eyes' },
    { emoji: '😼', name: 'Cat with Wry Smile' },
    { emoji: '😽', name: 'Kissing Cat' },
    { emoji: '🙀', name: 'Weary Cat' },
    { emoji: '😿', name: 'Crying Cat' },
    { emoji: '😾', name: 'Pouting Cat' },
    { emoji: '❤️', name: 'Red Heart' },
    { emoji: '🧡', name: 'Orange Heart' },
    { emoji: '💛', name: 'Yellow Heart' },
    { emoji: '💚', name: 'Green Heart' },
    { emoji: '💙', name: 'Blue Heart' },
    { emoji: '💜', name: 'Purple Heart' },
    { emoji: '🎉', name: 'Party Popper' },
    { emoji: '🎊', name: 'Confetti Ball' },
    { emoji: '🎈', name: 'Balloon' },
    { emoji: '🎁', name: 'Wrapped Gift' },
    { emoji: '🎀', name: 'Ribbon' },
    { emoji: '⚽', name: 'Soccer Ball' },
    { emoji: '🏀', name: 'Basketball' },
    { emoji: '🏈', name: 'American Football' },
    { emoji: '⚾', name: 'Baseball' },
    { emoji: '🎾', name: 'Tennis' },
    { emoji: '🎮', name: 'Video Game Controller' },
    { emoji: '🎯', name: 'Direct Hit' },
    { emoji: '🎲', name: 'Game Die' },
    { emoji: '🎰', name: 'Slot Machine' },
    { emoji: '🚗', name: 'Automobile' },
    { emoji: '🚕', name: 'Taxi' },
    { emoji: '🚙', name: 'Sport Utility Vehicle' },
    { emoji: '🚌', name: 'Bus' },
    { emoji: '🚎', name: 'Trolleybus' },
    { emoji: '🏎️', name: 'Racing Car' },
    { emoji: '🏍️', name: 'Motorcycle' },
    { emoji: '✈️', name: 'Airplane' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🛸', name: 'Flying Saucer' }
];

function getRandomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}

function generateEmoji() {
    const randomEmoji = getRandomEmoji();
    document.getElementById('emojiDisplay').textContent = randomEmoji.emoji;
    document.getElementById('emojiName').textContent = randomEmoji.name;
}

function generateMultiple() {
    const display = document.getElementById('emojiDisplay');
    const emojiNames = document.getElementById('emojiName');
    const selected = [];
    
    for (let i = 0; i < 5; i++) {
        selected.push(getRandomEmoji());
    }
    
    display.textContent = selected.map(e => e.emoji).join(' ');
    emojiNames.textContent = selected.map(e => e.name).join(' | ');
}

// Generate an emoji on page load
generateEmoji();