#include <stdio.h>
#include <stdlib.h>

// Topic: Pointers
// Format specifier for the pointers is %p and not %d.

// & is used to access the address.
// * is used to access the value.

// Always type cast addresses as void, because %p officially expects a generic pointer type (void*).

int main()
{
    int num = 5;
    int *p = &num;
    printf("Print the address of the variable 'num' (using the pointer): %p\n", (void*)p);
    printf("Print the address of the variable 'num' (direct address of the num using & with num): %p\n", (void*)&num);
    printf("Print the address of the pointer 'p': %p\n", (void*)&p);
    printf("Print the value stored at the address given by the pointer 'p' (i.e. num): %d\n", *p);
    printf("Print the value stored in the variable 'num': %d\n", num);
    return 0;
}