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

function getLanguageFromUser() {
  const languages = Object.keys(TRANSLATIONS);
  const languagesCount = languages.length;

  for (let index = 0; index < languagesCount; index += 1) {
    console.log(`${getTranslatedMessage('chooseLanguage', languages[index])} ${index + 1}`);
  }

  let languageChoice = Number(readLine.question('---> '));
  let language = languages[languageChoice - 1];

  while (!languages.includes(language)) {
    console.log(`Please type a digit between 1 and ${languagesCount}`);
    languageChoice = readLine.question('---> ');
    language = languages[Number(languageChoice) - 1];
  }

  return language;
}

function getCurrencyFromUser(currencies, language) {
  let currenciesCount = currencies.length;
  console.log(getTranslatedMessage('chooseCurrency', language));

  for (let index = 0; index < currenciesCount; index += 1) {
    console.log(`${index + 1} - ${currencies[index].currencyName}`);
  }

  let currencyChoice = Number(readLine.question('---> '));

  while (currencyChoice < 1
    || currencyChoice > currenciesCount
    || Number.isNaN(currencyChoice)
  ) {
    console.log(`Please type a digit between 1 and ${currenciesCount}`);
    currencyChoice = Number(readLine.question('---> '));
  }

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
  let loanAmount = readLine.question('---> ');

  while (isInvalidNumber(loanAmount)) {
    console.log(getTranslatedMessage('invalidNumber', language));
    loanAmount = readLine.question('---> ');
  }

  return loanAmount;
}

function getAnnualPercentageRateFromUser(language) {
  console.log(getTranslatedMessage('enterRate', language));
  let annualPercentageRate = readLine.question('---> ');

  while (isInvalidNumber(annualPercentageRate)) {
    console.log(getTranslatedMessage('invalidNumber', language));
    annualPercentageRate = readLine.question('---> ');
  }

  return annualPercentageRate;
}

function getLoanDurationYearsFromUser(language) {
  console.log(getTranslatedMessage('enterDuration', language));
  let loanDurationYears = readLine.question('---> ');

  while (isInvalidNumber(loanDurationYears)) {
    console.log(getTranslatedMessage('invalidNumber', language));
    loanDurationYears = readLine.question('---> ');
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
  let answer = readLine.question('---> ');
  return answer.toLowerCase() === 'y';
}

// Start of the main program

let language = getLanguageFromUser();

console.log(getTranslatedMessage('welcome', language));

let repeat;

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

console.log(getTranslatedMessage('goodBye', language));