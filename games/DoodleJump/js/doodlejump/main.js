var Doodle = Doodle || {};

// Создаем игру
Doodle.game = new Phaser.Game(635, 1148, Phaser.AUTO);

// Добавляем состояния
Doodle.game.state.add("Boot", Doodle.BootState);
Doodle.game.state.add("Preload", Doodle.PreloadState);
Doodle.game.state.add("Game", Doodle.GameState);
Doodle.game.state.add("Menu", Doodle.MenuState);
Doodle.game.state.add("Settings", Doodle.SettingsState);
Doodle.game.state.add("Calibrate", Doodle.CalibrateState);
Doodle.game.state.add("Scores", Doodle.ScoresState);
Doodle.game.state.add("NameInput", Doodle.NameInput); // Добавляем состояние NameInput

// Запускаем начальное состояние
Doodle.game.state.start("Boot");
