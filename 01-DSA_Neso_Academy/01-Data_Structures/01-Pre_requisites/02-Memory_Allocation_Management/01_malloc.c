#include <stdio.h>
#include <stdlib.h>

// # Memory allocation using malloc function.

// malloc is used in C to allocate memory to a variable dynamically, i.e., the desired memory size can be allocated to a variable at runtime by the user as per the user's need.
// The malloc function takes in one argument, which is how much memory is required, and returns a single block of that memory.
// The calloc function takes in two arguments: one for how many memory blocks are required and the second argument dictating the size of each memory block.
// However, both malloc and calloc provide one big contiguous memory block.
// Memory provided by both malloc and calloc can be used to store multiple variables.
// The only difference between malloc and calloc is that malloc provides memory filled with garbage values, and calloc provides clear memory, meaning memory pre-filled with 0s only.
// Thus, calloc provides garbage-free values, and that's the only difference between malloc and calloc.

// In One-line 
// malloc → uninitialized memory
// calloc → zero-initialized memory
// Rest everything → SAME

// Memory allocated using malloc or calloc must be freed after the end of their use case to avoid memory leak issues.

int main()
{
    // (int*) is used to type cast the memory allocated by the malloc function. This way, we are indicating that the memory allocated by malloc will be used to store integers. Malloc allocates a void memory pointer because it doesn't know what type of data the allocated memory will be used for.

    // 1. Memory Allocation.
    // Here, the malloc function is used to allocate 4 bytes of memory.
    int *ptr1 = (int *)malloc(4);

    // Here, the malloc function is used to allocate a memory block equivalent to multiples of the memory allocated to an int by the system. Usually, 4 bytes are allocated to one int in common OSes, and only in rare architectures, 8 bytes are allocated to an int.
    // So, we are allocating a memory size equivalent to a multiple of four times the size of an int as given by the OS.

    int *ptr2 = (int *)malloc(4 * sizeof(int));

    // 2. Printing Memory Addresses.
    // Here we are printing the address of the memory allocated to the pointer ptr1 by the malloc function.
    // Addition of 1 to the pointer doesn't simply add 1 to the pointer but rather makes the pointer jump to the next memory block.
    printf("Print address of the allocated memory: %p, %p, %p, %p \n",
           (void *)ptr1,
           (void *)(ptr1 + 1),
           (void *)(ptr1 + 2),
           (void *)(ptr1 + 3));

    // 3. Allocating memory to a variable and filling it as well.
    int memorySizeInInt;

    // Taking the memory size requirement from the user.
    printf("Enter the size of the memory block required in multiples of the size of the int: ");
    scanf(" %d", &memorySizeInInt);

    // Allocating memory as per the user need.
    int *ptr3 = (int *)malloc(memorySizeInInt * sizeof(int));

    // Taking input values from the user and storing at the allocated memory.
    for (int i = 0; i < memorySizeInInt; i++)
    {
        printf("Enter the number to store at index %d: ", i);
        scanf(" %d", &ptr3[i]);
        // 💡 Why we use &ptr3[i] inside scanf?
        // Because scanf needs the address where it will store the number.
        // ptr3 → contains the address of the first element
        // ptr3 + i → address of i-th element
        // &ptr3[i] → same thing
        // So:
        // ptr3 + i    <==>    &ptr3[i]
        // ptr3[i] = *(ptr3 + i) → value stored at that address
    }

    // Printing back the values to the user
    for (int i = 0; i < memorySizeInInt; i++)
    {
        printf("Stored value at index %d is: %d \n", i, ptr3[i]);
    }

    // Freeing the allocated memory.
    free(ptr1);
    free(ptr2);
    free(ptr3);

    // Re-initializing the pointer value with NULL to avoid dangling pointer.
    ptr1 = NULL;
    ptr2 = NULL;
    ptr3 = NULL;

    return 0;
}