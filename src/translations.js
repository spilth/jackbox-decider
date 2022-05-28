const translations = {
  selectLanguage: {
    en: "Select language: ",
    ru: "Выберите язык: ",
    ua: "Оберіть мову: ",
  },
  howManyPeople: {
    en: "How many people?",
    ru: "Сколько людей?",
    ua: "Скільки людей?",
  },
  displayGameCount: {
    en: (count) => count + " game" + (count > 1 ? "s" : "") + " to play!",
    ru: (count) => count + (count === 1 ? " игра найдена!" : " игр найдено!"),
    ua: (count) => count + (count === 1 ? " гра знайдена!" : " ігор знайдено!")
  },
  players: {
    en: "players",
    ru: "игроков",
    ua: "гравців",
  },
  familyFriendlySetting: {
    en: "Family Friendly Setting",
    ru: "Семейный фильтр",
    ua: "Сімейний фільтр",
  },
  manualCensoring: {
    en: "Manual Censoring",
    ru: "Ручная цензура",
    ua: "Ручна цензура",
  },
  extendedTimers: {
    en: "Extended Timers",
    ru: "Увеличенные таймеры",
    ua: "Розширені таймери",
  },
  hasTranslation: {
    en: "Translated",
    ru: "Переведено",
    ua: "Перекладено",
  },
  noTranslation: {
    en: "Not translated",
    ru: "Не переведено",
    ua: "Не перекладено",
  },
  partOf: {
    en: "Part of",
    ru: "В составе",
    ua: "У складі",
  },
  standaloneTitle: {
    en: "Standalone Title",
    ru: "Отдельная игра",
    ua: "Окрема гра",
  },
};

export default translations;
