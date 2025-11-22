#include <iostream>
using namespace std;

// # Find 1s complement of a base 10 integer.
// 1. We will take the number and operate ^ (XOR) on it.
// 2. This way we will get the function of ~ (NOT) operator.
// 2.1. Why not directly apply the NOT operator on n?
// 2.2. Because n will have padding of 0 to fill all the 32 bits allocated to it.
// 2.2.1. As an int is assigned a memory of 4 bytes or 32 bits.
// 2.2.2. Unused memory is padded with 0.
// 2.3. So using the NOT operator directly on n will invert all the padded bits of n too.
// 2.3.1. So, we will be inverting only the requisite bits of n and not all bits of n.
// 2.3.2. Using XOR operator and the right shift operator and a loop till n > 0.

int main()
{
    int n;
    cout << "Enter an integer to find its complement: ";
    cin >> n;

    if (n == 0 || n == 1) // Solving straight away for n input as 0 or 1.
    {
        cout << "Complement of " << n << " is " << ~n << endl;
        return 0;
    }

    int copyN = n;
    string onesComplement = "";

    while (copyN > 0)
    {
        // Extract last bit using & operator.
        // Ex.
        // 101101
        // 000001
        // ------
        // 000001   → gives LAST BIT

        // Can't extract last bit using ^ operator.
        // Ex.
        // 101101
        // 000001
        // ------
        // 101100   → LAST BIT gets flipped, however the result is not useful.

        int lastBit = copyN & 1;
        int invertedBit = lastBit ^ 1;
        copyN = copyN >> 1;

        onesComplement = to_string(invertedBit) + onesComplement;
    };

    cout << "Complement of " << n << " is " << onesComplement << endl;

    return 0;
}
