function processArray(numbers) {
  const result = [];
  for (const number of numbers) {
      if (number % 2 === 0) {
          result.push(number * number);
      } else {
          result.push(number * 3); 
      }
  }
  return result;
}

//TASK 2

function capitalizeString(str) {
    return str.toUpperCase();
}

function lowercaseString(str) {
    return str.toLowerCase();
}
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        throw new Error();
    }
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            
            return capitalizeString(str);
        } else {
    
            return lowercaseString(str);
        }
    });
}

//Task 3

function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error();
    }

    const profiles = [];
    for (let i = 0; i < names.length; i++) {
        profiles.push({
            id: i + 1,
            originalName: names[i],
            modifiedName: modifiedNames[i]
        });
    }
    return profiles;
}