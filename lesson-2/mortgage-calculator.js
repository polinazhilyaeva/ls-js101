const readLine = require('readline-sync');
const TRANSLATIONS = require('./mortgage_calculator_translations.json');
const CURRENCIES = [
  {
    currencyName: 'USD (U.S. Dollar)',
    currencySign: '$'
  },
  {
    currencyName: 'EUR (Euro)',
    currencySign: '€'
  },
  {
    currencyName: 'UAH (Українська Гривня)',
    currencySign: '₴'
  }
];

// Functions declaration

function getTranslatedMessage(message, language) {
  return TRANSLATIONS[language]['messages'][message];
}

function readUserInput() {
  return readLine.question('---> ');
}

function getValidChoice(choicesCount) {
  let choice = Number(readUserInput());

  while (
    choice < 1
    || choice > choicesCount
    || Number.isNaN(choice)
  ) {
    console.log(`Please type a digit between 1 and ${choicesCount}`);
    choice = Number(readUserInput());
  }

  return choice;
}

function getLanguageFromUser(translations) {
  const languages = Object.keys(translations);
  const languagesCount = languages.length;

  for (let index = 0; index < languagesCount; index += 1) {
    console.log(`${getTranslatedMessage('chooseLanguage', languages[index])} ${index + 1}`);
  }

  let languageChoice = getValidChoice(languagesCount);

  return languages[languageChoice - 1];
}

function sayWelcome(language) {
  console.log(getTranslatedMessage('welcome', language));
}

function sayGoodbye(language) {
  console.log(getTranslatedMessage('goodBye', language));
}

function getCurrencyFromUser(currencies, language) {
  let currenciesCount = currencies.length;

  console.log(getTranslatedMessage('chooseCurrency', language));

  for (let index = 0; index < currenciesCount; index += 1) {
    console.log(`${index + 1} - ${currencies[index].currencyName}`);
  }

  let currencyChoice = getValidChoice(currenciesCount);

  return currencies[currencyChoice - 1];
}

function isInvalidNumber(input) {
  if (
    input.trimStart() === ''
    || Number.isNaN(Number(input))
    || Number(input) <= 0
  ) {
    return true;
  }

  return false;
}

function getLoanAmountFromUser(currencyName, language) {
  console.log(`${getTranslatedMessage('enterLoanAmount', language)} ${currencyName}:`);
  let loanAmount = readUserInput();

  while (isInvalidNumber(loanAmount)) {
    console.log(getTranslatedMessage('invalidNumber', language));
    loanAmount = readUserInput();
  }

  return loanAmount;
}

function getAnnualPercentageRateFromUser(language) {
  console.log(getTranslatedMessage('enterRate', language));
  let annualPercentageRate = readUserInput();

  while (isInvalidNumber(annualPercentageRate)) {
    console.log(getTranslatedMessage('invalidNumber', language));
    annualPercentageRate = readUserInput();
  }

  return annualPercentageRate;
}

function getLoanDurationYearsFromUser(language) {
  console.log(getTranslatedMessage('enterDuration', language));
  let loanDurationYears = readUserInput();

  while (isInvalidNumber(loanDurationYears)) {
    console.log(getTranslatedMessage('invalidNumber', language));
    loanDurationYears = readUserInput();
  }

  return loanDurationYears;
}

function calculateMonthlyPayment(
  loanAmount, monthlyInterestRate, loanDurationMonths
) {
  let monthlyPayment = loanAmount * (
    monthlyInterestRate / (
      1 - Math.pow((1 + monthlyInterestRate), (-loanDurationMonths))
    )
  );

  return monthlyPayment;
}

function printMonthlyPayment(monthlyPayment, currencySign, language) {
  console.log(`${getTranslatedMessage('yourMonthlyPayment', language)} ${currencySign}${monthlyPayment.toFixed(2)}`);
}

function doesUserWantToRepeat(language) {
  console.log(getTranslatedMessage('anotherCalculation', language));
  let answer = readUserInput();
  return answer.toLowerCase() === 'y';
}

// Start of the main program

const language = getLanguageFromUser(TRANSLATIONS);

sayWelcome(language);

let repeat = false;

do {
  let { currencyName, currencySign } =
    getCurrencyFromUser(CURRENCIES, language);

  let loanAmount = getLoanAmountFromUser(currencyName, language);
  let annualRatePercents = getAnnualPercentageRateFromUser(language);
  let loanDurationMonths = getLoanDurationYearsFromUser(language) * 12;

  let annualInterestRate = annualRatePercents / 100;
  let monthlyInterestRate = annualInterestRate / 12;

  let monthlyPayment = calculateMonthlyPayment(
    loanAmount, monthlyInterestRate, loanDurationMonths
  );

  printMonthlyPayment(monthlyPayment, currencySign, language);
  repeat = doesUserWantToRepeat(language);
} while (repeat);

sayGoodbye(language);