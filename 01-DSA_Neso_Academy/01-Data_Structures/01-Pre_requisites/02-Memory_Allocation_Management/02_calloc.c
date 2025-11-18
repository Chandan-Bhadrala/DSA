#include <stdio.h>
#include <stdlib.h>

// calloc() → “Clear Allocation”.

int main()
{
    int n, size;
    printf("Enter the number of memory blocks required: ");
    scanf(" %d", &n);

    // printf("Enter the required size of the memory block: ");
    // scanf(" %d", &size);

    // int *ptr = (int *)calloc(n, size);

    // Asking user for the memory block size is a wrong approach as corrected by the ChatGPT. User shall only be asked to tell the number of memory blocks required and programmer must allocate memory block size equal to the sizeof(int) himself.

    int *ptr = (int *)calloc(n, sizeof(int));

    if (ptr == NULL)
    {
        printf("Memory allocation failed!\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        printf("Enter the number to be stored at index %d: ", i);
        scanf(" %d", &ptr[i]);
    }

    for (int i = 0; i < n; i++)
    {
        printf("You have saved these number successfully %d\n", ptr[i]);
    }

    for (int i = 0; i < n; i++)
    {
        printf("Address of %d is %p\n", ptr[i], &ptr[i]);
    }

    // Only a pointer allocated using malloc, calloc or realloc must be freed. Here, p points to stack memory and not the heap memory.
    // So, pointer pointing to the stack memory must not be freed by the programmer.
    // Freeing such pointer can make program to crash.
    // free(ptr);
    // ptr = NULL;

    return 0;
}