#include <stdio.h>
#include <stdlib.h>

// # Realloc: It is used to reallocate a new memory size to the existing pointer.

int main()
{
    int nValueFromTheUser;
    printf("Enter the number of integers you intend to store: ");
    scanf(" %d", &nValueFromTheUser);

    int *ptr = (int *)calloc(nValueFromTheUser, sizeof(int));

    if (ptr == NULL)
    {
        printf("Memory allocation failed!\n");
        return 1;
    }

    for (int i = 0; i < nValueFromTheUser; i++)
    {
        printf("Enter the value to be stored at index %d: ", i);
        scanf(" %d", &ptr[i]);
    }

    for (int i = 0; i < nValueFromTheUser; i++)
    {
        printf("You have saved these numbers successfully %d\n", ptr[i]);
    }

    for (int i = 0; i < nValueFromTheUser; i++)
    {
        printf("Address of %d is %p\n", ptr[i], &ptr[i]);
    }

    int newNvalueFromTheUser;

    printf("Do you wish to save more numbers, then enter the higher number than before: ");
    scanf(" %d", &newNvalueFromTheUser);

    if (newNvalueFromTheUser > nValueFromTheUser)
    {
        int *temp = realloc(ptr, newNvalueFromTheUser * sizeof(int));
        // This way we will only update our old pointer, if the reallocation is successful.
        if (temp != NULL)
        {
            ptr = temp;
        }

        for (int i = 0; i < (newNvalueFromTheUser - nValueFromTheUser); i++)
        {
            printf("Enter the new integer values to store: ");
            scanf(" %d", &ptr[i + nValueFromTheUser]);
        }

        // Update the current value of integers user is using. To keep the user's number of values stored record straight.
        nValueFromTheUser = newNvalueFromTheUser;
        for (int i = 0; i < newNvalueFromTheUser; i++)
        {
            printf("You have saved all these numbers successfully %d\n", ptr[i]);
        }

        for (int i = 0; i < newNvalueFromTheUser; i++)
        {
            printf("Address of %d is %p\n", ptr[i], &ptr[i]);
        }
    }
    else
    {
        printf("You have entered the lower number than before to store, this will cause memory loss, please restart the program.");
    };
    free(ptr);
    ptr = NULL;
    return 0;
}