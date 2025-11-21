#include <iostream>
using namespace std;

// Count 1's in a binary number.
// We will be using a right shift operator to shift the bits to the right and will be multiplying each bit with the & operator and 1, to check the result.
// If the result turns out to be 1, then we increment our count for 1s.

// Bitwise operators are bit-level operators.
// Meaning even, if I directly apply right-shift operator to an integer rather than onto an binary, it will still work.
// As CPU stores everything in a bits format in the memory.
// and Bitwise operators operate directly on these binary bits in memory.
// So, when we we use bitwise operator even on an integer, it is internally being applied on the bits directly by the CPU.

// Bitwise operators are: >>, <<, &, |, ~(Not), ^(XOR).

int main()
{
    int n;
    cout << "Enter an integer to count the number of 1s in its binary format: ";
    cin >> n;

    int count = 0;
    int rightShiftedN = n;

    // i upper limit is taken to be 32, as an integer is stored using 4 bytes, which translates to the 32 bits.
    // So, we are traversing all and only 32 bits of the integer's allocated memory.
    // Unused bits are padded with 0s in the integer's memory location.
    for (int i = 0; i < 32; i++)
    {
        if (rightShiftedN & 1)
        {
            count++;
        }
        // Right shift by 1 position
        rightShiftedN = rightShiftedN >> 1;
    };

    cout << "Total number of 1s in the given binary number " << n << " are: " << count << endl;

    return 0;
}
