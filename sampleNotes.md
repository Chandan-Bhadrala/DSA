# Concept Summary
Short explanation in your own words.

# Why this matters in DSA
1.
2.
3.

# Code Patterns
- Pattern 1:
- Pattern 2:

# Mistakes to avoid
- Common error 1
- Common error 2

# My own memory hooks
Write how YOU remember the concept.

# Web Development Connection
How this relates to real-world development (like OS, memory, arrays, etc.)

---
---

# Notes style guided by the ChatGPT.

```
#include <stdio.h>
#include <stdlib.h>

/*
    Topic: Dynamic Memory Allocation (malloc)

    malloc():
      - Allocates memory at runtime (dynamic memory).
      - Takes ONE argument: total number of bytes required.
      - Returns a void* pointer (generic pointer), so typecasting is recommended.
      - Provides ONE contiguous memory block.

    calloc():
      - Takes TWO arguments: number of blocks and sizeof each block.
      - Returns memory initialized to ZERO.
      - Provides multiple contiguous blocks.

    Note:
      malloc returns memory type as `void*`, so we typecast 
      to the required type, such as (int*), (char*), etc.
*/

int main()
{
    // Allocating 4 bytes manually using malloc
    int *ptr1 = (int *)malloc(4);

    // Allocating memory for 4 integers (system decides int size)
    int *ptr2 = (int *)malloc(4 * sizeof(int));

    printf("Address from ptr1: %p %p %p %p\n",
           (void *)ptr1, 
           (void *)(ptr1 + 1), 
           (void *)(ptr1 + 2), 
           (void *)(ptr1 + 3));

    return 0;
}

```