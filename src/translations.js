const translations = {
  select_language: {
    en: "Select language: ",
    ru: "Выберите язык: ",
  },
  how_many_people: {
    en: "How many people?",
    ru: "Сколько людей?",
  },
  display_game_count: {
    en: (count) => count + " game" + (count > 1 ? "s" : "") + " to play!",
    ru: (count) => count + (count === 1 ? " игра найдена!" : " игр найдено!"),
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
  has_translation: {
    en: "Translated",
    ru: "Переведено",
  },
  no_translation: {
    en: "Not translated",
    ru: "Не переведено",
  },
};

export default translations;
