#include <stdio.h>
#include <stdlib.h>

// Function, free is used to de-allocate the memory provided by the malloc, calloc or the re-alloc to avoid memory leaks.
// So, after the memory role/purpose is resolved, one must free the pointer using free function.
// free(ptr); // This code line frees the memory.
// ptr = NULL; // This code line reset the pointer value, to avoid dangling pointer.
int main() {
   /* code */
    return 0;
}

// ---
// ChatGPT refinement on my above notes.
// The function free() is used to de-allocate the memory that was previously
// allocated using malloc(), calloc() or realloc().
// If we do not free the allocated memory, it will cause a memory leak.

// After calling free(ptr), the memory is released, but the pointer still
// holds the old (now invalid) address. Such a pointer is called a
// "dangling pointer".

// To avoid dangling pointers, always set the pointer to NULL after freeing.
// A NULL pointer is safe because dereferencing it crashes immediately,
// instead of silently causing undefined behaviour.

free(ptr);     // Releases the allocated memory.
ptr = NULL;    // Resets pointer to avoid dangling pointer issues.
