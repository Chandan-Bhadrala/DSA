#include <iostream>
using namespace std;

// # Decimal to Binary.
// 1. Take user n value and divide it by the 2, remainder is the binary required digit.
// 2. Divide above n/2 result with 2 again, remainder again is the binary required digit.
// 3. Shove those binary digits together using base as 10^i.

int main()
{
    int n;
    cout << "Enter an integer to calculate its binary: ";
    cin >> n;

    if (n == 0) // Solving straight away for n input as 0.
    {
        cout << "Binary: 0" << endl;
        return 0;
    }

    int copyN = n;
    // int binary = 0; // Correction and Mistake is stated below.
    string binary = "";

    while (copyN > 0)
    {
        int remainder = copyN % 2;
        copyN = copyN / 2;

        // binary*10, is used to left shift the previous output, so that new remainder is stored at the LSB.
        // However, this method yields binary output in the reverse order.
        // binary = binary * 10 + remainder;

        // So, we are going to use "binary = to_string(remainder) + binary;" to build in the correct order.
        // i.e., from right to left.
        binary = to_string(remainder) + binary;
    };

    cout << "Binary for the given value " << n << " is " << binary << endl;

    return 0;
}
