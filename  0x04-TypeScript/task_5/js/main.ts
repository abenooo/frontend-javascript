// Define brand interfaces for MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  brand: 'Major'; // Brand property for unique identification
}

interface MinorCredits {
  credits: number;
  brand: 'Minor'; // Brand property for unique identification
}

// Function to sum major credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  };
}

// Function to sum minor credits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, brand: 'Major' };
const majorSubject2: MajorCredits = { credits: 4, brand: 'Major' };
const minorSubject1: MinorCredits = { credits: 1, brand: 'Minor' };
const minorSubject2: MinorCredits = { credits: 2, brand: 'Minor' };

const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Total Major Credits:', totalMajorCredits);
console.log('Total Minor Credits:', totalMinorCredits);