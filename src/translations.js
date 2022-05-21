const translations = {
  selectLanguage: {
    en: "Select language: ",
    ru: "Выберите язык: ",
  },
  howManyPeople: {
    en: "How many people?",
    ru: "Сколько людей?",
  },
  displayGameCount: {
    en: (count) => count + " game" + (count > 1 ? "s" : "") + " to play!",
    ru: (count) => count + (count === 1 ? " игра найдена!" : " игр найдено!"),
  },
  players: {
    en: "players",
    ru: "игроков",
  },
  familyFriendlySetting: {
    en: "Family Friendly Setting",
    ru: "Семейный фильтр",
  },
  manualCensoring: {
    en: "Manual Censoring",
    ru: "Ручная цензура",
  },
  extendedTimers: {
    en: "Extended Timers",
    ru: "Увеличенные таймеры",
  },
  hasTranslation: {
    en: "Translated",
    ru: "Переведено",
  },
  noTranslation: {
    en: "Not translated",
    ru: "Не переведено",
  },
  partOf: {
    en: "Part of",
    ru: "В составе",
  },
  standaloneTitle: {
    en: "Standalone Title",
    ru: "Отдельная игра",
  },
  sortBy: {
    en: "Sort by: ",
    ru: "Сортировка: ",
  },
  name: {
    en: "Name",
    ru: "Название",
  },
  pack: {
    en: "Pack",
    ru: "Издание",
  },
};

export default translations;
