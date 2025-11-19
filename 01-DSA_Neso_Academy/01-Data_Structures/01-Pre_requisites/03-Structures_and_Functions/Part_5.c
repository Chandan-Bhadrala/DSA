#include <stdio.h>
#include <stdlib.h>

// # 5. Returning Pointer to a Structure from a Function.

// ---

struct point {
    int x;
    int y;
};

// Function returning a pointer to a structure
struct point* createPoint(int a, int b) {
    // Allocate memory on heap for struct point
    struct point *ptr = (struct point*) malloc(sizeof(struct point));

    // Store values in heap memory
    ptr->x = a;
    ptr->y = b + 5;

    // Return pointer to heap memory
    return ptr;
}

// Function to print values from structure pointer
void printPoint(struct point *p) {
    printf("%d %d\n", p->x, p->y);
}

int main() {
    struct point *ptr1, *ptr2;

    // First call
    ptr1 = createPoint(2, 3);     // x = 2, y = 8
    // Second call
    ptr2 = createPoint(6, 9);     // x = 6, y = 14

    // Printing values using print function
    printPoint(ptr1);   // Output: 2 8
    printPoint(ptr2);   // Output: 6 14

    // Free heap memory
    free(ptr1);
    free(ptr2);

    return 0;
}
