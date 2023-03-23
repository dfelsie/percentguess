export default interface Question {
  group: string;
  actualPercent: number;
  guessedPercent: number;
  userGuessPercent: number | null;
}
