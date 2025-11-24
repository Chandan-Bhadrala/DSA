#include <iostream>
using namespace std;

// # Search an array to verify if a given value of n exists in the array or not using linear search (i.e., using a for loop on the array).

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
