                              STUDENT ID: 11357174

                              This project includes functions to manipulate arrays and create user profiles.
        Task 1:
        This function accepts an array of numbers as input and returns a new array with each even number squared and each odd number tripled.
        When given an array of numbers, 'processArray' iterates through each one. The function squares each even element and triples each odd element. The resulting array retains the original element order while applying the specified mathematical transformations.

        Task 2:
        This function takes two arguments: an array of strings and an array of numbers processed by 'processArray'. It returns a new array in which each string is modified based on the corresponding number: capitalized if even, and lowercase if odd.
        'formatArrayStrings' associates each string in the input array with a corresponding number. If the number is even, the string is capitalized; otherwise, it is converted to lowercase. The resulting array preserves the original string order.

        Task 3
        This function accepts two arrays as input: original names and modified names. It creates an array of user profiles, each with an auto-incremented ID, original name, and modified name.
        'createUserProfiles' associates each original name with its corresponding modified name and assigns an auto-incremented ID to each one. The resulting array contains objects, each of which represents a user profile and has three properties: 'id', 'originalName', and'modifiedName'. 