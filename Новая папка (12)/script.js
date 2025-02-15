function generateStory() {
    const genres = ["Фэнтези", "Научная фантастика", "Детектив", "Ужасы", "Комедия", "Приключения", "История Марса"];
    const locations = ["древний замок", "космический корабль", "заброшенный город", "подводный мир", "магическая школа", "поверхность Марса", "марсианская колония"];
    const characters = ["храбрый рыцарь", "гениальный ученый", "таинственный детектив", "призрачный охотник", "говорящий робот", "марсианский исследователь", "кибернетический солдат"];
    const plotTwists = ["неожиданный враг", "временной парадокс", "неожиданная находка", "предательство друга", "портал в другой мир", "контакт с марсианами", "революция на Марсе"];
    
    const genre = genres[Math.floor(Math.random() * genres.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const character = characters[Math.floor(Math.random() * characters.length)];
    const plotTwist = plotTwists[Math.floor(Math.random() * plotTwists.length)];
    
    const story = `В жанре ${genre} главный герой - ${character}, попадает в ${location}. ` +
                  `Но всё идёт не по плану, когда происходит ${plotTwist}. ` +
                  `Смогут ли герои справиться с испытаниями? Приключение начинается!`;
    
    return story;
}

// Генерируем случайную историю
console.log(generateStory());
