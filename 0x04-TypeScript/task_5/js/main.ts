interface MajorCredits {
    credits: counter;
    brand: "major";
  }
  
  interface MinorCredits {
    credits: counter;
    brand: "minor";
  }
  
  function sumMajorCredits(subj1: MajorCredits, subj2: MajorCredits) {
    return subj1.credits + subj2.credits;
  }
  
  function sumMinorCredits(subj1: MinorCredits, subj2: MinorCredits) {
    return subj1.credits + subj2.credits;
  }
