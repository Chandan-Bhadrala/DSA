#include <stdio.h>
#include <stdlib.h>

// Topic: Pointers
// Format specifier for the pointers is %p and not %d.

// & is used to access the address.
// * is used to access the value.

// We require & to access the address of the variable to access/write the value in the variable using scanf.
// However, we don't require & to read the value stored at the variable address.
// Thus, & is only needed to store the value of the variable, not for reading the value of the variable.

// Always type cast addresses as void, because %p officially expects a generic pointer type (void*).

int main()
{
    int num = 5;
    int *p = &num;

    printf("Print the address of the variable 'num' (using the pointer): %p\n", (void *)p);

    printf("Print the address of the variable 'num' (direct address of the num using & with num): %p\n", (void *)&num);

    printf("Print the address of the pointer 'p': %p\n", (void *)&p);

    printf("Print the value stored at the address given by the pointer 'p' (i.e. num): %d\n", *p);

    printf("Print the value stored in the variable 'num': %d\n", num);

    printf("Print the value stored at the address given by the pointer 'p' (i.e. num): %d\n", p[0]);

    // Need to free the pointer.
    free(p);
    // To avoid creating a dangling pointer has to initialize the pointer with Null.
    p = NULL;
    return 0;
}