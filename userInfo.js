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